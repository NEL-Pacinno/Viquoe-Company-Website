declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: {
        width?: number;
        height?: number;
        layout?: string;
      }) => void;
      loadEmbeds: () => void;
    };
  }
}

export {};