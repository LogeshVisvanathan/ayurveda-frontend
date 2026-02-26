import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-2xl uppercase mb-6 text-highlightyellow">
              ABOUT THE SYSTEM
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              A Ministry of AYUSH initiative to ensure transparency, authenticity, and quality in the Ayurvedic medicinal plant supply chain.
            </p>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-2xl uppercase mb-6 text-highlightyellow">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/farmer-portal', label: 'Farmer Portal' },
                { path: '/processing-unit', label: 'Processing Unit' },
                { path: '/laboratory-testing', label: 'Laboratory Testing' },
                { path: '/consumer-portal', label: 'Consumer Portal' },
                { path: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-secondary-foreground/80 hover:text-highlightyellow transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-2xl uppercase mb-6 text-highlightyellow">
              CONTACT INFO
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">
                  Ministry of AYUSH, Ayush Bhawan, B Block, GPO Complex, INA, New Delhi - 110023
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">
                  +91-11-24651950
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">
                  info@ayush.gov.in
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-2xl uppercase mb-6 text-highlightyellow">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Ministry of AYUSH', external: true },
                { label: 'Quality Standards', external: false },
                { label: 'User Guidelines', external: false },
                { label: 'FAQs', external: false },
                { label: 'Privacy Policy', external: false },
                { label: 'Terms of Service', external: false }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-paragraph text-sm text-secondary-foreground/80 hover:text-highlightyellow transition-colors inline-flex items-center gap-2"
                  >
                    {item.external ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <span className="w-1.5 h-1.5 bg-primary"></span>
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/70 text-center md:text-left">
              © 2026 Ministry of AYUSH, Government of India. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-paragraph text-sm text-secondary-foreground/70 hover:text-highlightyellow transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-secondary-foreground/70 hover:text-highlightyellow transition-colors"
              >
                Disclaimer
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-secondary-foreground/70 hover:text-highlightyellow transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Government Disclaimer */}
      <div className="bg-primary py-4">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <p className="font-paragraph text-xs text-primary-foreground text-center">
            This is an official website of the Government of India. Content owned and maintained by Ministry of AYUSH.
          </p>
        </div>
      </div>
    </footer>
  );
}
