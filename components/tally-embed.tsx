'use client';

import React, { useEffect } from 'react';

interface TallyEmbedProps {
  formId: string;
  width?: string;
  height?: string;
  className?: string;
}

const TallyEmbed: React.FC<TallyEmbedProps> = ({
  formId,
  width = '100%',
  height = '500px',
  className = ''
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <iframe
  data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&dynamicHeight=1&darkMode=1`}
  width={width}
  height={height}
  className={`rounded-md border border-input bg-background ${className}`}
  frameBorder="0"
  title="Contact Form"
  style={{
    minWidth: '100%',
    maxWidth: '100%',
    border: '1px solid var(--input)',
    borderRadius: '0.1rem',
    colorScheme: 'dark', // This hints to the browser about dark mode
  }}
/>
  );
};

export default TallyEmbed;