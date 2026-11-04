import { CvField, ImageField, Repeater, ScreenshotList, StringList, TextArea, TextField, Toggle } from './fields';

const BOLD_HINT = 'Put **double asterisks** around words to make them bold.';

const blankCaseStudy = {
  id: '',
  title: '',
  company: '',
  duration: '',
  tags: [],
  overview: '',
  problem: '',
  approach: '',
  execution: [],
  outcome: '',
  keyInsight: '',
  links: [],
};

function Group({ title, children }) {
  return (
    <section className="space-y-5">
      {title && <h3 className="eyebrow pt-3">{title}</h3>}
      {children}
    </section>
  );
}

function Pair({ children }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}

function PageText({ section }) {
  return (
    <Pair>
      <TextField label="Small label above the heading" path={[section, 'eyebrow']} />
      <TextField label="Page heading" path={[section, 'heading']} />
    </Pair>
  );
}

function CvSection() {
  return (
    <Group>
      <CvField path={['profile', 'cvUrl']} />
      <p className="text-sm text-ink-faint">PDF only, up to 3 MB. Every “Download CV” button on the site uses this file.</p>
    </Group>
  );
}

function ProfileSection() {
  return (
    <>
      <Group title="Availability">
        <Toggle label="Show availability badge" hint="Appears on your photo on the home page." path={['profile', 'openToWork']} />
        <TextField label="Badge text" path={['profile', 'openToWorkLabel']} />
      </Group>
      <Group title="Name and title">
        <Pair>
          <TextField label="First name" path={['profile', 'firstName']} />
          <TextField label="Last name" path={['profile', 'lastName']} />
          <TextField label="Short name" hint="Used under your photo on the About page." path={['profile', 'shortName']} />
          <TextField label="Initials" hint="Shown if a photo can't load." path={['profile', 'initials']} />
        </Pair>
        <TextField label="Job title" path={['profile', 'role']} />
        <TextField label="Location" path={['profile', 'location']} />
      </Group>
      <Group title="Home page introduction">
        <TextField label="Small label above your name" path={['profile', 'eyebrow']} />
        <TextArea label="Tagline" path={['profile', 'tagline']} />
        <StringList label="Credentials" hint="The short list under your tagline." path={['profile', 'credentials']} addLabel="Add credential" itemName="credential" />
      </Group>
      <Group title="Photos">
        <Pair>
          <ImageField label="Home page photo" hint="A tall portrait works best." path={['profile', 'heroPhoto']} />
          <ImageField label="About page photo" hint="A tall portrait works best." path={['profile', 'aboutPhoto']} />
        </Pair>
      </Group>
    </>
  );
}

function HomeSection() {
  return (
    <Group>
      <TextArea label="Main statement" hint="The large sentence under the numbers on the home page." path={['home', 'statement']} rows={2} />
      <TextArea label="Supporting text" path={['home', 'statementBody']} />
      <p className="text-sm text-ink-faint">
        The numbers come from the About section. The projects shown are your first three case studies.
      </p>
    </Group>
  );
}

function AboutSection() {
  return (
    <>
      <Group>
        <PageText section="about" />
        <StringList label="Your story" hint={`The first paragraph appears larger. ${BOLD_HINT}`} path={['about', 'paragraphs']} addLabel="Add paragraph" itemName="paragraph" multiline />
      </Group>
      <Group title="Numbers">
        <p className="text-sm text-ink-faint">Shown on the home page and the About page.</p>
        <Repeater path={['about', 'stats']} addLabel="Add number" blank={{ value: '', label: '' }} itemName="number" title={(stat) => [stat.value, stat.label].filter(Boolean).join(' · ')}>
          {(path) => (
            <Pair>
              <TextField label="Value" placeholder="3+" path={[...path, 'value']} />
              <TextField label="Label" placeholder="Years Experience" path={[...path, 'label']} />
            </Pair>
          )}
        </Repeater>
      </Group>
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <Group>
        <PageText section="skills" />
      </Group>
      <Group title="Skill groups">
        <Repeater path={['skills', 'groups']} addLabel="Add skill group" blank={{ title: '', items: [] }} itemName="skill group" title={(group) => group.title}>
          {(path) => (
            <>
              <TextField label="Group name" path={[...path, 'title']} />
              <StringList label="Skills" path={[...path, 'items']} addLabel="Add skill" itemName="skill" />
            </>
          )}
        </Repeater>
      </Group>
    </>
  );
}

function CaseStudiesSection() {
  return (
    <>
      <Group>
        <PageText section="caseStudies" />
        <TextField label="Line under the heading" path={['caseStudies', 'subheading']} />
      </Group>
      <Group title="Projects">
        <p className="text-sm text-ink-faint">The first three also appear on your home page.</p>
        <Repeater path={['caseStudies', 'items']} addLabel="Add case study" blank={blankCaseStudy} itemName="case study" title={(item) => item.title}>
          {(path) => (
            <>
              <TextField label="Title" path={[...path, 'title']} />
              <Pair>
                <TextField label="Project name" path={[...path, 'company']} />
                <TextField label="Date" placeholder="2024" path={[...path, 'duration']} />
              </Pair>
              <StringList label="Tags" path={[...path, 'tags']} addLabel="Add tag" itemName="tag" />
              <TextArea label="Overview" path={[...path, 'overview']} />
              <TextArea label="The problem" path={[...path, 'problem']} />
              <TextArea label="Approach" path={[...path, 'approach']} />
              <StringList label="Execution steps" path={[...path, 'execution']} addLabel="Add step" itemName="step" />
              <TextArea label="Outcome" path={[...path, 'outcome']} />
              <TextArea label="Key insight" path={[...path, 'keyInsight']} rows={2} />
              <div>
                <p className="text-sm font-medium text-ink mb-2">Links</p>
                <Repeater path={[...path, 'links']} addLabel="Add link" blank={{ label: 'View Full Case Study', url: '' }} itemName="link" title={(link) => link.label}>
                  {(linkPath) => (
                    <>
                      <TextField label="Button text" path={[...linkPath, 'label']} />
                      <TextField label="Web address" type="url" placeholder="https://" path={[...linkPath, 'url']} />
                    </>
                  )}
                </Repeater>
              </div>
            </>
          )}
        </Repeater>
      </Group>
    </>
  );
}

function SupportingSection() {
  return (
    <Group>
      <PageText section="supporting" />
      <TextField label="Line under the heading" path={['supporting', 'subheading']} />
      <Pair>
        <TextField label="Organisation or project" path={['supporting', 'company']} />
        <TextField label="Dates" path={['supporting', 'duration']} />
      </Pair>
      <StringList label="Tags" path={['supporting', 'tags']} addLabel="Add tag" itemName="tag" />
      <TextArea label="Overview" path={['supporting', 'overview']} />
      <StringList label="Key contributions" path={['supporting', 'contributions']} addLabel="Add contribution" itemName="contribution" />
      <TextArea label="Key insight" path={['supporting', 'keyInsight']} rows={2} />
      <ScreenshotList label="Screenshots" path={['supporting', 'screenshots']} />
    </Group>
  );
}

function ToolsSection() {
  return (
    <>
      <Group>
        <PageText section="tools" />
        <TextField label="Closing note" path={['tools', 'note']} />
      </Group>
      <Group title="Tool groups">
        <Repeater path={['tools', 'groups']} addLabel="Add tool group" blank={{ category: '', tools: [] }} itemName="tool group" title={(group) => group.category}>
          {(path) => (
            <>
              <TextField label="Group name" path={[...path, 'category']} />
              <StringList label="Tools" path={[...path, 'tools']} addLabel="Add tool" itemName="tool" />
            </>
          )}
        </Repeater>
      </Group>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <Group title="Your details">
        <Pair>
          <TextField label="Email" type="email" path={['contact', 'email']} />
          <TextField label="Phone" type="tel" path={['contact', 'phone']} />
          <TextField label="LinkedIn web address" type="url" path={['contact', 'linkedinUrl']} />
          <TextField label="LinkedIn name to display" path={['contact', 'linkedinLabel']} />
        </Pair>
      </Group>
      <Group title="Page text">
        <PageText section="contact" />
        <TextArea label="Line under the heading" path={['contact', 'subheading']} rows={2} />
        <TextField label="Footer tagline" path={['footer', 'tagline']} />
      </Group>
    </>
  );
}

function SeoSection() {
  return (
    <Group>
      <TextField label="Page title" hint="Shown in browser tabs and Google results." path={['seo', 'title']} />
      <TextArea label="Search description" hint="The summary Google may show under your site." path={['seo', 'description']} />
      <TextArea label="Share description" hint="Shown when your link is shared on LinkedIn or WhatsApp." path={['seo', 'shareDescription']} />
      <TextArea label="Keywords" hint="Separate with commas." path={['seo', 'keywords']} rows={2} />
    </Group>
  );
}

export const SECTIONS = [
  { id: 'cv', label: 'CV', description: 'Replace the CV people download from your site.', Component: CvSection },
  { id: 'profile', label: 'Profile & photos', description: 'Your name, title, availability and photos.', Component: ProfileSection },
  { id: 'home', label: 'Home page', description: 'The statement on your home page.', Component: HomeSection },
  { id: 'about', label: 'About', description: 'Your story and your key numbers.', Component: AboutSection },
  { id: 'skills', label: 'Skills', description: 'The skills listed on your Skills page.', Component: SkillsSection },
  { id: 'work', label: 'Case studies', description: 'Add, edit, reorder or remove projects.', Component: CaseStudiesSection },
  { id: 'supporting', label: 'Supporting case study', description: 'Your operations and coordination work.', Component: SupportingSection },
  { id: 'tools', label: 'Tools', description: 'The tools and platforms you use.', Component: ToolsSection },
  { id: 'contact', label: 'Contact', description: 'How people reach you.', Component: ContactSection },
  { id: 'seo', label: 'Search & sharing', description: 'How your site appears on Google and social media.', Component: SeoSection },
];
