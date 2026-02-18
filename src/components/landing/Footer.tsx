import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["About Us", "Certification", "Blog", "Contact"];
const modules = ["SEO", "Google Ads", "Social Media", "Content Marketing", "AI Marketing", "Analytics"];

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Dizi <span className="text-primary">Global</span> Solution
            </h3>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Empowering careers through industry-ready AI-powered digital marketing education.
            </p>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> info@diziglobalsolution.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" /> Noida, Uttar Pradesh, India
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Modules */}
          <div>
            <h4 className="font-bold mb-4">Modules Offered</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              {modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10 pt-6 text-center text-sm text-navy-foreground/50">
          © {new Date().getFullYear()} Dizi Global Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
