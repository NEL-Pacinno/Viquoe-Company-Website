// lib/config.ts
export const TALLY_CONFIG = {
  // Replace with your actual Tally form ID
    CONTACT_FORM_ID: "wd4D5r",  // ← PUT YOUR FORM ID HERE
  
  // You can add more form IDs if you have multiple forms
//   NEWSLETTER_FORM_ID: "xyz789",  // Example: if you have a newsletter form
//   FEEDBACK_FORM_ID: "def456",    // Example: if you have a feedback form
};

// // Alternative: use environment variables for production
// export const getFormId = (formType: 'contact' | 'newsletter' | 'feedback' = 'contact') => {
//   switch (formType) {
//     case 'contact':
//       return process.env.NEXT_PUBLIC_TALLY_CONTACT_FORM_ID || TALLY_CONFIG.CONTACT_FORM_ID;
//     case 'newsletter':
//       return process.env.NEXT_PUBLIC_TALLY_NEWSLETTER_FORM_ID || TALLY_CONFIG.NEWSLETTER_FORM_ID;
//     case 'feedback':
//       return process.env.NEXT_PUBLIC_TALLY_FEEDBACK_FORM_ID || TALLY_CONFIG.FEEDBACK_FORM_ID;
//     default:
//       return TALLY_CONFIG.CONTACT_FORM_ID;
//   }
// };