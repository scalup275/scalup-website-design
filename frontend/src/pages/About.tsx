import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  Linkedin,
  Heart,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import founder from "@/assets/founder.png";
import cto from "@/assets/cto.png";

const values = [
  {
    icon: Heart,
    title: "Quality Education for All",
    description: "We believe everyone has the right to quality education, regardless of their background.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description: "Our courses focus on real-world skills that employers actually need.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly update our curriculum with the latest industry trends and tools.",
  },
  {
    icon: Rocket,
    title: "Career Success",
    description: "Your success is our mission. We're dedicated to helping you achieve your career goals.",
  },
];

const stats = [
  { end: 1000, suffix: "+", label: "Learners Trained" },
  { end: 5, suffix: "+", label: "Countries Reached" },
  { end: 50, suffix: "+", label: "Corporates Upskilled" },
  { end: 400, suffix: "+", label: "Hiring Partners" },
];

const team = [
  {
    name: "Founder & CEO",
    role: "Founder & CEO",
    image: founder,
    bio: "A visionary leader with a passion for democratizing digital marketing education. With extensive experience in the industry, our founder established SCALUP to bridge the gap between traditional education and industry needs.",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "CTO",
    role: "Chief Technology Officer",
    image: cto,
    bio: "Leading our technology initiatives and ensuring our learning platform delivers the best experience. Our CTO brings years of expertise in building scalable educational technology solutions.",
    linkedin: "https://linkedin.com/",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-light">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About SCALUP
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Democratizing <span className="text-primary">Digital Marketing</span> Education
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SCALUP is one of the leading training providers with 1000+ learners across 5 countries. 
              We're on a mission to make quality education accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building the Future of <span className="text-primary">Digital Marketing</span> Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SCALUP was founded with a simple yet powerful vision: to democratize 
                  digital marketing education and make it accessible to everyone who 
                  wants to build a career in this exciting field.
                </p>
                <p>
                  We create courses in collaboration with top universities and industry 
                  leaders, focusing on employability and real-world skills. Our curriculum 
                  is constantly updated to reflect the latest trends, tools, and best 
                  practices in digital marketing.
                </p>
                <p>
                  With 24/7 support and courses taught by Subject Matter Experts (SMEs), 
                  we help learners increase their employability. Our outstanding career 
                  services have helped hundreds of students launch their dream careers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-5 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals with industry-ready digital marketing skills, 
                enabling them to build successful careers and contribute to the 
                growth of businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the world's most trusted platform for digital marketing 
                education, creating opportunities for learners from all backgrounds 
                to achieve their professional goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Leadership"
            title={
              <>
                Meet Our <span className="text-primary">Team</span>
              </>
            }
            description="The passionate individuals driving SCALUP's mission forward"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.role}</h3>
                  <p className="text-primary font-medium mb-4">{member.name}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Join the <span className="text-primary">SCALUP</span> Community
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Start your journey towards becoming a digital marketing professional today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/learning">
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
