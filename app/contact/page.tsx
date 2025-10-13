export const metadata = {
  title: 'Contact',               
  description: 'Get in touch with us',
};

import ContactForm from './ContactForm';   

export default function ContactPage() {
  return (
    <section>
      <ContactForm /> 
    </section>
  );
}