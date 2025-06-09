'use client';

import React, { useEffect } from 'react';

interface TallyPopupProps {
  formId: string;
  buttonText?: string;
  buttonClassName?: string;
  popupWidth?: number;
  popupHeight?: number;
}

const TallyPopup: React.FC<TallyPopupProps> = ({
  formId,
  buttonText = "Contact Us",
  buttonClassName = "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors",
  popupWidth = 700,
  popupHeight = 600
}) => {
  useEffect(() => {
    // Load Tally popup script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const openTallyPopup = () => {
    // @ts-ignore - Tally is loaded dynamically
    if (window.Tally) {
      // @ts-ignore
      window.Tally.openPopup(formId, {
        width: popupWidth,
        height: popupHeight,
        layout: 'modal'
      });
    }
  };

  return (
    <button
      onClick={openTallyPopup}
      className={buttonClassName}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default TallyPopup;