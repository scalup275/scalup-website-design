import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Target,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Download,
  Play,
  Briefcase,
  Lightbulb,
  BarChart,
  Code,
  Palette,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import classroom from "@/assets/classroom.png";

const modules = [
  {
    week: "Week 1",
    title: "Introduction to Digital Marketing",
    topics: [
      "What is Digital Marketing & How It Works",
      "Understanding Consumer Behaviour Online",
      "Difference between Organic & Paid Marketing",
      "Key Tools: Meta, Google, Canva, ChatGPT, Notion",
    ],
    outcome: "Gain foundational clarity on marketing and digital ecosystems",
    icon: BookOpen,
  },
  {
    week: "Week 2-3",
    title: "Website & Content Fundamentals",
    topics: [
      "Building a Basic Landing Page (WordPress/Notion)",
      "Copywriting and Visual Design Principles",
      "SEO Basics (Keywords, Meta Tags, SERP)",
      "Blog & Article Writing with AI Tools",
    ],
    outcome: "Create a personal website optimized for conversions",
    icon: Code,
  },
  {
    week: "Week 4-5",
    title: "Meta Ads Mastery",
    topics: [
      "Facebook & Instagram Ads Manager Setup",
      "Campaign Objectives: Traffic, Leads, Sales",
      "Audience Targeting, Pixel Setup, Lead Gen",
      "A/B Testing Creatives and Copy",
    ],
    outcome: "Launch and optimize a live Meta Ads campaign",
    icon: Target,
  },
  {
    week: "Week 6-7",
    title: "Google Ads & Analytics",
    topics: [
      "Search, Display, and YouTube Ads",
      "Keyword Planning & Ad Copywriting",
      "Conversion Tracking and Analytics",
      "Google Tag Manager and UTM Setup",
    ],
    outcome: "Run a live Google campaign with analytics tracking",
    icon: BarChart,
  },
  {
    week: "Week 8-9",
    title: "AI Tools for Marketers",
    topics: [
      "Automating Tasks with ChatGPT, Zapier",
      "AI for Ad Copy, Image & Video Creation",
      "Building Marketing Workflows with Automation",
      "Predictive Analytics & AI-Based Optimization",
    ],
    outcome: "Build an automated ad funnel using AI",
    icon: Zap,
  },
  {
    week: "Week 10-11",
    title: "Analytics, Funnels & Strategy",
    topics: [
      "Understanding Customer Journeys",
      "Sales Funnels: Awareness → Conversion",
      "Retargeting & Lookalike Audiences",
      "KPI Measurement & Reporting",
    ],
    outcome: "Create a complete marketing funnel for a real brand",
    icon: TrendingUp,
  },
  {
    week: "Week 12",
    title: "Internship & Portfolio Project",
    topics: [
      "2-Week Paid Internship with partner agencies",
      "Real client campaign optimization",
      "Portfolio Building (LinkedIn, Resume)",
      "Interview preparation & placement",
    ],
    outcome: "Job-ready portfolio with verified project experience",
    icon: Briefcase,
  },
];

const skills = [
  "SEO", "SEM", "SERPs", "On-page Optimization", "Real-time Analytics",
  "Web Analytics", "Content Marketing", "Email Marketing", "Social Media Marketing",
  "Facebook & Instagram Ads", "Video Marketing", "Marketing Analytics",
  "Google Analytics", "Product Positioning", "Pricing Strategy",
];

const tools = [
  "Google Ads", "Meta Ads Manager", "ChatGPT", "Canva", "Semrush",
  "Ahrefs", "Mailchimp", "HubSpot", "LinkedIn Ads", "YouTube Ads",
  "Google Analytics", "Google Tag Manager", "Hootsuite", "Notion",
];

const careerServices = [
  { icon: Users, title: "Career Sessions", description: "5+ career-oriented sessions by industry mentors" },
  { icon: Award, title: "Profile Building", description: "Craft a standout resume and LinkedIn profile" },
  { icon: Megaphone, title: "Mock Interviews", description: "Prepare with most asked interview questions" },
  { icon: Lightbulb, title: "1:1 Mentoring", description: "Get guidance at every step of your transition" },
];

export default function Learning() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-light">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🎓 Executive Post Graduate Certification
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI-Driven <span className="text-primary">Digital Marketing</span> Bootcamp
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Gain the most relevant skills in digital marketing and make a successful 
                career transition with guaranteed paid internships.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">12 Weeks</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Online + Offline</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Certification</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg">
                  <Download className="mr-2 h-5 w-5" /> Download Curriculum
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={classroom}
                alt="SCALUP Classroom"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { label: "Live Sessions", value: "20+" },
              { label: "Industry Projects", value: "5+" },
              { label: "Months Learning", value: "3" },
              { label: "Mock Interviews", value: "1:1" },
              { label: "Mentorship", value: "24/7" },
              { label: "Job Assistance", value: "100%" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center py-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{item.value}</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Curriculum"
            title={
              <>
                12-Week <span className="text-primary">Learning Journey</span>
              </>
            }
            description="A structured, industry-focused curriculum designed for real-world success"
          />

          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-4 gap-6 p-6">
                    {/* Week Badge */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <module.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">{module.week}</span>
                        <h3 className="text-lg font-bold text-foreground">{module.title}</h3>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="md:col-span-2">
                      <ul className="space-y-2">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-xs text-primary font-medium mb-1">🎯 Outcome</p>
                      <p className="text-sm text-foreground">{module.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-primary" />
                Skills to Master
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card rounded-full text-sm border border-border/50 hover:border-primary/30 hover:bg-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Palette className="h-7 w-7 text-primary" />
                Tools to Master
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Career Services"
            title={
              <>
                Launch Your <span className="text-primary">Dream Career</span>
              </>
            }
            description="Comprehensive support to help you land your ideal role in digital marketing"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Eligibility"
            title={
              <>
                Who Can <span className="text-primary">Apply</span>?
              </>
            }
          />

          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              "Marketing Managers",
              "Entrepreneurs",
              "Sales Professionals",
              "Freshers",
              "Career Changers",
            ].map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card rounded-xl p-4 text-center border border-border/50"
              >
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{role}</p>
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
                Start Your <span className="text-primary">Transformation</span> Today
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Join the next batch and become a certified digital marketing professional
                with hands-on experience and guaranteed placement assistance.
              </p>
              <Button variant="hero" size="lg">
                <Download className="mr-2 h-5 w-5" /> Download Full Curriculum
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LeadForm
                title="Enroll Now"
                description="Secure your spot in the next batch"
                buttonText="Request Callback"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
