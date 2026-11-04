import { readFileSync } from 'node:fs'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Runs the Vercel functions in api/ during `vite dev`, so /admin works locally.
function devApi() {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        const name = req.url.split('?')[0].replace(/^\//, '')
        if (!/^[a-z]+$/.test(name)) return next()
        try {
          const { default: handler } = await server.ssrLoadModule(`/api/${name}.js`)
          await handler(req, res)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Keeps the page title and share text in index.html in step with the admin's content.
function seoFromContent() {
  return {
    name: 'seo-from-content',
    transformIndexHtml(html) {
      const { seo, profile } = JSON.parse(readFileSync('src/data/content.json', 'utf8'))
      return html
        .replaceAll('%SEO_TITLE%', escapeHtml(seo.title))
        .replaceAll('%SEO_DESCRIPTION%', escapeHtml(seo.description))
        .replaceAll('%SEO_SHARE%', escapeHtml(seo.shareDescription))
        .replaceAll('%SEO_KEYWORDS%', escapeHtml(seo.keywords))
        .replaceAll('%SEO_AUTHOR%', escapeHtml(`${profile.firstName} ${profile.lastName}`))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['ADMIN_PASSWORD', 'GITHUB_TOKEN']) {
    if (env[key]) process.env[key] = env[key]
  }
  return { plugins: [react(), devApi(), seoFromContent()] }
})
