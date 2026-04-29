const CC_FALLBACK_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#0D9488',
  color: 'white',
  fontWeight: '700',
  fontSize: '1.5rem',
  letterSpacing: '0.05em',
};

export function ImageWithFallback({ src, alt, className = '', style = {}, fallbackSize = 'normal', ...props }) {
  const handleError = (e) => {
    const parent = e.target.parentNode;
    e.target.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.textContent = 'CC';
    Object.assign(fallback.style, CC_FALLBACK_STYLE, style, { width: '100%', height: '100%' });
    if (fallbackSize === 'large') fallback.style.fontSize = '2.5rem';
    parent.appendChild(fallback);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}

// Standalone circle fallback wrapper (for Hero)
export function CirclePhoto({ src, alt, sizeClass = 'w-72 h-72', className = '', imgClassName = '' }) {
  const handleError = (e) => {
    const container = e.target.parentNode;
    e.target.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.textContent = 'CC';
    Object.assign(fallback.style, {
      ...CC_FALLBACK_STYLE,
      width: '100%',
      height: '100%',
      borderRadius: '9999px',
      fontSize: '3rem',
    });
    container.appendChild(fallback);
  };

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden border-4 border-teal-600 ring-4 ring-teal-600/20 ring-offset-4 ring-offset-[#0F172A] ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        onError={handleError}
      />
    </div>
  );
}

// Rectangular photo with teal left border (for About)
export function RectPhoto({ src, alt, className = '' }) {
  const handleError = (e) => {
    const container = e.target.parentNode;
    e.target.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.textContent = 'CC';
    Object.assign(fallback.style, {
      ...CC_FALLBACK_STYLE,
      width: '100%',
      height: '100%',
      borderRadius: '1rem',
      fontSize: '3rem',
    });
    container.appendChild(fallback);
  };

  return (
    <div className={`rounded-2xl overflow-hidden border-l-4 border-teal-500 aspect-[4/5] w-full max-w-sm ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={handleError}
      />
    </div>
  );
}
