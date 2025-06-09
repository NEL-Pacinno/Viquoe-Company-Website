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
  width = '50%',
  height = '500px',
  className = ''
}) => {
  useEffect(() => {
    // Load Tally embed script
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
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
      width={width}
      height={height}
      className={className}
      title="Tally Form"
      style={{ border: 'none', borderRadius: '8px' }}
    ></iframe>
  );
};

export default TallyEmbed;