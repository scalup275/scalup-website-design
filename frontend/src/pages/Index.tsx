import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  Zap,
  Target,
  CheckCircle,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import classroom from "@/assets/classroom.png";
import ahrefs from "@/assets/ahrefs.png";
import canva from "@/assets/canva.png";
import chatgpt from "@/assets/chatgpt.svg";
import meta from "@/assets/meta.svg";
import notion from "@/assets/Notion-logo.svg.png";
import semrush from "@/assets/Semrush_logo.svg.png";
import tagManager from "@/assets/Tag_manager_logo.png";
import youtube from "@/assets/youtube.jpg";
import hubspot from "@/assets/HubSpot_Logo.png";
import linkedin from "@/assets/LinkedIn_icon.svg.png";
import analytics from "@/assets/Logo_Google_Analytics.svg.png";
import hootsuite from "@/assets/Hootsuite_logo.png";
import mailchimp from "@/assets/mailchimp.png";
import mink from "@/assets/mink-arora.jpeg";
import shahid from "@/assets/Shahid-Sultan.jpeg";
import uzma from "@/assets/Uzma-Hassan.jpeg";
import imran from "@/assets/Imran-Shaban.jpeg";

const stats = [
  { end: 100, suffix: "+", label: "Active Learners" },
  { end: 55, suffix: "%", label: "Avg. Salary Hike" },
  { end: 20, suffix: "+", label: "Hiring Partners" },
  { end: 150, suffix: "+", label: "Countries' Learners" },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Industry Practitioners",
    description: "Learn from top digital marketing experts",
  },
  {
    icon: TrendingUp,
    title: "Self-paced Learning",
    description: "Flexible schedule that fits your life",
  },
  {
    icon: Target,
    title: "5+ Industry Projects",
    description: "Hands-on case studies & real clients",
  },
  {
    icon: Zap,
    title: "AI-Powered Curriculum",
    description: "Latest tools including ChatGPT & automation",
  },
  {
    icon: Briefcase,
    title: "Paid Internship",
    description: "Guaranteed remote internship with stipend",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized credential",
  },
];

const testimonials = [
  {
    name: "Mink Arora",
    role: "SEO Specialist",
    image: mink,
    content:
      "Thanks to Scalup for such a wonderful Digital Marketing course. Good trainers and rich content along with real-world assignments & projects.",
    rating: 5,
  },
  {
    name: "Shahid Sultan",
    role: "Performance Marketer",
    image: shahid,
    content:
      "The case studies, projects, and mentorship helped me gain real confidence. Highly recommended for anyone serious about digital marketing.",
    rating: 5,
  },
  {
    name: "Uzma Hassan",
    role: "Marketing Executive",
    image: uzma,
    content:
      "Even as a fresher, I could follow everything easily. The trainers were extremely supportive throughout the journey.",
    rating: 5,
  },
  {
    name: "Imran Shaban",
    role: "Content Strategist",
    image: imran,
    content:
      "The practical approach and real-world assignments made all the difference in my career transition.",
    rating: 5,
  },
];

const partnerLogos = [
  { name: "Meta Ads", src: meta },
  { name: "ChatGPT", src: chatgpt },
  { name: "Canva", src: canva },
  { name: "Semrush", src: semrush },
  { name: "Ahrefs", src: ahrefs },
  { name: "Mailchimp", src: mailchimp },
  { name: "HubSpot", src: hubspot },
  { name: "LinkedIn", src: linkedin },
  { name: "YouTube", src: youtube },
  { name: "Google Analytics", src: analytics },
  { name: "Tag Manager", src: tagManager },
  { name: "Hootsuite", src: hootsuite },
  { name: "Notion", src: notion },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-light">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🚀 AI-Driven Digital Marketing Bootcamp
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Scale Your Career with{" "}
                <span className="text-primary">Job-Ready</span> Digital
                Marketing Skills
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Master the hottest skills of the 21st century with AI-driven
                learning, real projects, and guaranteed paid internships.
                Transform your career in just 12 weeks.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book Free Consultation{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="/Scalupmain.pdf" download>
                    <Play className="mr-2 h-5 w-5" />
                    Download Program Brochure
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1:1 Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>100% Job Assistance</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={classroom}
                  alt="SCALUP Digital Marketing Training Session"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Program Duration
                      </p>
                      <p className="text-xl font-bold text-foreground">
                        12 Weeks
                      </p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-sm text-muted-foreground">Format</p>
                      <p className="text-xl font-bold text-foreground">
                        Live + Projects
                      </p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Internship
                      </p>
                      <p className="text-xl font-bold text-primary">Paid ✓</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
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

      {/* Why SCALUP Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title={
              <>
                What Makes <span className="text-primary">SCALUP</span>{" "}
                Different
              </>
            }
            description="We don't just teach marketing—we build careers with hands-on experience and industry connections"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Programs"
            title={
              <>
                Kickstart Your{" "}
                <span className="text-primary">Digital Marketing</span> Career
              </>
            }
            description="Our comprehensive curriculum covers everything from SEO to AI-powered marketing automation"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Bootcamp Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  12 Weeks
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                AI-Driven Digital Marketing Bootcamp
              </h3>
              <p className="text-muted-foreground mb-6">
                Master Meta Ads, Google Ads, SEO, AI Tools, and get a guaranteed
                paid internship with our flagship program.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live Classes + Self-paced Learning",
                  "1:1 Mentorship Sessions",
                  "Real Client Projects",
                  "Paid Internship (Stipend up to ₹10k)",
                  "100% Job Assistance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/scalupsyallbus.pdf" download>
                  View Full Curriculum
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Modules Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "SEO Mastery", icon: TrendingUp, weeks: "Week 2-3" },
                { title: "Meta Ads", icon: Target, weeks: "Week 4-5" },
                { title: "Google Ads", icon: Zap, weeks: "Week 6-7" },
                { title: "AI Tools", icon: Briefcase, weeks: "Week 8-9" },
              ].map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <module.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {module.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {module.weeks}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Skills & Tools Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
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
                {[
                  "SEO",
                  "SEM",
                  "SERPs",
                  "On-page Optimization",
                  "Real-time Analytics",
                  "Web Analytics",
                  "Content Marketing",
                  "Email Marketing",
                  "Social Media Marketing",
                  "Facebook & Instagram Ads",
                  "Video Marketing",
                  "Marketing Analytics",
                  "Google Analytics",
                  "Product Positioning",
                  "Pricing Strategy",
                  "Performance Marketing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card rounded-full text-sm border border-border/50 hover:border-primary/30 hover:bg-accent transition"
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
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Zap className="h-7 w-7 text-primary" />
                Tools to Master
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Google Ads",
                  "Meta Ads Manager",
                  "ChatGPT",
                  "Canva",
                  "Semrush",
                  "Ahrefs",
                  "Mailchimp",
                  "HubSpot",
                  "LinkedIn Ads",
                  "YouTube Ads",
                  "Google Analytics",
                  "Google Tag Manager",
                  "Hootsuite",
                  "Notion",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium hover:bg-primary hover:text-primary-foreground transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Testimonials"
            title={
              <>
                What Our <span className="text-primary">Learners</span> Say
              </>
            }
            description="Real stories from real students who transformed their careers"
          />

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-md"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-muted-foreground font-medium">
            Tools & Platforms You'll Master
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-10 py-4 mx-4 bg-background rounded-lg border border-border/50 min-w-[150px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-auto object-contain transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Ready to <span className="text-primary">Scale Up</span> Your
                Career?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Join 1000+ learners who have transformed their careers with our
                industry-focused digital marketing program. Start your journey
                today.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free career consultation",
                  "Personalized learning path",
                  "Placement assistance included",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-secondary-foreground/90"
                  >
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
                title="Book Your Free Consultation"
                description="Get personalized career guidance"
                buttonText="Get Started"
                source="consultation"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
