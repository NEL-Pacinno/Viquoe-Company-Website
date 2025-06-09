import TallyForm from './tally-form';
import TallyPopup from './tally-popup';

interface ContactSectionProps {
  formId: string;
  variant?: 'embedded' | 'popup' | 'both';
  title?: string;
  description?: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  formId,
  variant = 'embedded',
  title = "Get In Touch",
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  className = ""
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {variant === 'popup' && (
            <div className="text-center">
              <TallyPopup
                formId={formId}
                buttonText="Send us a Message"
                buttonClassName="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                popupWidth={800}
                popupHeight={700}
              />
            </div>
          )}

          {variant === 'embedded' && (
            <TallyForm 
              formId={formId}
              height="600px"
              className="rounded-lg shadow-lg bg-white"
            />
          )}

          {variant === 'both' && (
            <div className="space-y-8">
              <div className="text-center">
                <TallyPopup
                  formId={formId}
                  buttonText="Quick Contact (Popup)"
                  buttonClassName="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mr-4"
                />
                <p className="text-gray-500 text-sm mt-2">Or fill out the form below</p>
              </div>
              <TallyForm 
                formId={formId}
                height="600px"
                className="rounded-lg shadow-lg bg-white"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;