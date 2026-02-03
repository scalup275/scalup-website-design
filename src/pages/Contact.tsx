import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Bypass, Hyderpora, Srinagar", "Jammu and Kashmir 190014"],
    link: "https://maps.app.goo.gl/ZMcju5X7doYM8Dzs8",
    linkText: "View on Maps",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9797703232", "+91 9596019337"],
    link: "tel:+919797703232",
    linkText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["admin@scalup.org", "contact@scalup.org"],
    link: "mailto:admin@scalup.org",
    linkText: "Send Email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "10:00 AM - 7:00 PM"],
  },
];

const socialLinks = [
  {
    name: "Instagram (Learning)",
    icon: Instagram,
    href: "https://instagram.com/scalup.learning",
    handle: "@scalup.learning",
  },
  {
    name: "Instagram (Agency)",
    icon: Instagram,
    href: "https://instagram.com/scalup.agency",
    handle: "@scalup.agency",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/scalup",
    handle: "SCALUP",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-light">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our programs or services? We'd love to hear from you. 
              Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary mt-2 hover:underline"
                  >
                    {info.linkText} <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <LeadForm
                title="Book a Free Consultation"
                description="Tell us about your goals and we'll help you get started"
                buttonText="Send Message"
                showMessage
              />
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.509774498869!2d74.79!3d34.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHyderpora%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCALUP Location"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <social.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Ready to Start Your <span className="text-primary">Digital Marketing</span> Journey?
            </h2>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              Book a free demo class and experience our teaching methodology firsthand. 
              No commitment required.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
