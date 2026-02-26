import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-14 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground uppercase mb-4">
              Get In Touch
            </h1>
            <p className="font-paragraph text-base md:text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Have questions about the National Ayurvedic Network? We're here to help. Contact us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl text-secondary uppercase mb-8">
                GET IN
                <br />
                <span className="text-primary">TOUCH</span>
              </h2>
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed mb-12">
                Our team is available to assist you with any questions about the traceability system, technical support, or partnership opportunities.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    content: 'Ministry of AYUSH, Ayush Bhawan, B Block, GPO Complex, INA, New Delhi - 110023, India',
                    color: 'bg-primary'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '+91-11-24651950\n+91-11-24651951 (Helpline)',
                    color: 'bg-highlightyellow'
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'info@ayush.gov.in\nsupport@ayushtraceability.gov.in',
                    color: 'bg-secondary'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-6"
                  >
                    <div className={`${item.color} w-16 h-16 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-secondary uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="font-paragraph text-base text-secondary/70 leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-12 bg-highlightyellow p-8"
              >
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  OFFICE HOURS
                </h3>
                <div className="space-y-2">
                  <p className="font-paragraph text-base text-secondary/80">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="font-paragraph text-base text-secondary/80">
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                  <p className="font-paragraph text-base text-secondary/80">
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 md:p-12"
            >
              <h2 className="font-heading text-4xl text-secondary-foreground uppercase mb-6">
                SEND US A MESSAGE
              </h2>
              <p className="font-paragraph text-base text-secondary-foreground/80 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-highlightyellow p-4 mb-6"
                >
                  <p className="font-paragraph text-sm text-secondary">
                    Thank you for your message! We'll respond within 24-48 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-heading text-sm text-secondary-foreground uppercase mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-2 border-secondary-foreground/20 focus:border-highlightyellow font-paragraph"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-heading text-sm text-secondary-foreground uppercase mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-2 border-secondary-foreground/20 focus:border-highlightyellow font-paragraph"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-heading text-sm text-secondary-foreground uppercase mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-2 border-secondary-foreground/20 focus:border-highlightyellow font-paragraph"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="font-heading text-sm text-secondary-foreground uppercase mb-2 block">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-2 border-secondary-foreground/20 focus:border-highlightyellow font-paragraph"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-heading text-sm text-secondary-foreground uppercase mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background border-2 border-secondary-foreground/20 focus:border-highlightyellow font-paragraph resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-base uppercase tracking-wide py-6 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    'SENDING...'
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="w-full py-24 bg-highlightyellow">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary uppercase mb-6">
              FREQUENTLY ASKED
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Who can use this system?',
                answer: 'The system is designed for farmers, processing units, laboratories, and consumers. Each stakeholder has a dedicated portal with specific features.'
              },
              {
                question: 'Is there a cost to use the portal?',
                answer: 'The consumer verification portal is completely free. For farmers and processing units, please contact us for registration details.'
              },
              {
                question: 'How do I report a technical issue?',
                answer: 'Use the contact form above or email support@ayushtraceability.gov.in with details about the issue you\'re experiencing.'
              },
              {
                question: 'Can I request a demo of the system?',
                answer: 'Yes! Contact us to schedule a demonstration for your organization or institution.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-background p-8"
              >
                <h3 className="font-heading text-xl text-secondary uppercase mb-4">
                  {faq.question}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
