import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { name: "Learning", href: "/" },
   { name: "Agency", href: "/agency" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Work with us", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const programs = [
  { name: "Digital Marketing Bootcamp", href: "/learning" },
  { name: "SEO Mastery", href: "/learning" },
  { name: "Meta Ads Training", href: "/learning" },
  { name: "Google Ads Certification", href: "/learning" },
];

const socialLinks = [
  {
    name: "Instagram (Learning)",
    href: "https://instagram.com/scalup.learning",
    icon: Instagram,
  },
  {
    name: "Instagram (Agency)",
    href: "https://instagram.com/scalup.agency",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/scalup",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="SCALUP Digital Marketing School"
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              SCALUP is one of the leading training providers with 1000+
              learners across 5 countries. We democratize education because
              everyone deserves quality learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70 text-sm">
                  Bypass, Hyderpora, Srinagar,
                  <br />
                  Jammu and Kashmir 190014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-secondary-foreground/70 text-sm">
                  <a
                    href="tel:+919797703232"
                    className="hover:text-primary transition-colors block"
                  >
                    +91 9797703232
                  </a>
                  <a
                    href="tel:+919596019337"
                    className="hover:text-primary transition-colors block"
                  >
                    +91 9596019337
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:admin@scalup.org"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  admin@scalup.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SCALUP Digital Marketing School. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://scalup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm flex items-center gap-1"
            >
              scalup.org <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
