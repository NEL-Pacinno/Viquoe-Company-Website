import React from 'react';

interface TallyFormProps {
  formId: string;
  height?: string;
  width?: string;
  className?: string;
}

const TallyForm: React.FC<TallyFormProps> = ({ 
  formId, 
  height = "500px", 
  width = "100%", 
  className = "" 
}) => {
  return (
    <div className={`tally-form-container ${className}`}>
      <iframe
        src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        width={width}
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        style={{
          border: 'none',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default TallyForm;