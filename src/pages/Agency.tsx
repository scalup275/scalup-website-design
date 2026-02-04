import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart,
  Zap,
  Users,
  Award,
  CheckCircle,
  Megaphone,
  Globe,
  Search,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import agencyHero from "@/assets/agency-hero.jpg";
import marketingTools from "@/assets/marketing-tools.jpg";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your organic visibility with keyword optimization, on-page SEO, technical SEO, and link building strategies.",
    features: ["Keyword Research", "On-page SEO", "Technical Audits", "Link Building"],
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Drive targeted traffic and conversions with strategic ad campaigns on Meta platforms.",
    features: ["Campaign Strategy", "Audience Targeting", "Creative Design", "Performance Optimization"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description: "Maximize your ROI with expertly managed search, display, and YouTube ad campaigns.",
    features: ["Search Campaigns", "Display Ads", "YouTube Ads", "Conversion Tracking"],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that drives traffic and builds authority.",
    features: ["Blog Writing", "Social Media Content", "Video Scripts", "Email Campaigns"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience across all social platforms.",
    features: ["Strategy Development", "Content Creation", "Community Management", "Influencer Outreach"],
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and performance reports.",
    features: ["Google Analytics Setup", "Custom Dashboards", "Monthly Reports", "ROI Analysis"],
  },
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description: "We analyze your business, competitors, and market to develop a winning digital strategy.",
  },
  {
    step: "02",
    title: "Execution",
    description: "Our team implements campaigns with precision, creativity, and attention to detail.",
  },
  {
    step: "03",
    title: "Growth",
    description: "We continuously optimize and scale your campaigns for maximum ROI and sustainable growth.",
  },
];

const clients = [
  "Tech Startups", "E-commerce Brands", "Healthcare", "Education",
  "Real Estate", "Hospitality", "Finance", "Retail"
];

export default function Agency() {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={agencyHero} 
            alt="SCALUP Agency" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🚀 SCALUP Agency
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scale Your Business with{" "}
              <span className="text-primary">Data-Driven</span> Marketing
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We help businesses grow with strategic digital marketing solutions. 
              From SEO to paid ads, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title={
              <>
                Digital Marketing <span className="text-primary">Solutions</span>
              </>
            }
            description="Comprehensive services to fuel your business growth"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process with Image */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                How We <span className="text-primary">Work</span>
              </h2>

              <div className="space-y-6">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={marketingTools} 
                alt="Digital Marketing Tools" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Industries"
            title={
              <>
                Industries We <span className="text-primary">Serve</span>
              </>
            }
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-card rounded-full border border-border/50 hover:border-primary/30 hover:bg-accent transition-all"
              >
                <span className="text-foreground font-medium">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                Ready to <span className="text-primary">Grow</span> Your Business?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Let's discuss how our digital marketing expertise can help you 
                achieve your business goals. Get a free consultation today.
              </p>
              <ul className="space-y-4">
                {[
                  "Free initial consultation",
                  "Custom strategy tailored to your business",
                  "Transparent pricing & reporting",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground/90">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LeadForm
                title="Work With SCALUP"
                description="Tell us about your project"
                buttonText="Get Started"
                showMessage
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
