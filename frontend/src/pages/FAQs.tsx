import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/LeadForm";
import { BookOpen, Building2 } from "lucide-react";
import faqHero from "@/assets/faq-hero.jpg";

const learningFAQs = [
  {
    question: "What should I do before each class?",
    answer:
      "Review your previous class notes and homework assignments. Clarify any doubts from the last session before attending the next class. Charge your laptop and phone fully, and test your internet connection to ensure stable WiFi or mobile data connectivity.",
  },
  {
    question:
      "What time do classes start and what is expected during live classes?",
    answer:
      "Classes start at 2:45 PM sharp. No entry is allowed for latecomers after 3:00 PM. During live classes, participate actively by asking questions freely, sharing ideas in discussions, and engaging with peers during group activities. Remember, no question is too basic.",
  },
  {
    question: "How should I take notes effectively?",
    answer:
      "Use a structured format with these components: Topic, Key Learning Points, Action Items, and Doubts. Screenshot important slides and save all class materials in a dedicated folder for revision.",
  },
  {
    question:
      "When should I submit assignments and how much time for projects?",
    answer:
      "Submit assignments before the next class session. Work on real client projects for a minimum of 6 hours weekly. Use Canva Pro for all design tasks - free access is provided to all students.",
  },
  {
    question: "What are the project quality standards?",
    answer:
      "Treat every project like a paid client assignment. Document your process with screenshots and reasoning, seek peer feedback before final submission, and revise based on mentor comments.",
  },
  {
    question: "What are the eligibility criteria for the certificate?",
    answer:
      "You must meet all requirements: Attend minimum 80% of classes, complete all projects, pass the final assessment, and clear all pending fees. The certificate provides industry-recognized credentials, portfolio showcase opportunity, and job referral support.",
  },
  {
    question: "How can I contact mentors and get support?",
    answer:
      "Email mentors for detailed project feedback, use WhatsApp for quick doubts only, and schedule phone calls by prior appointment. Response time is 24 hours. 24/7 support is available for technical issues.",
  },
];

const agencyFAQs = [
  {
    question: "What digital marketing services does SCALUP Agency offer?",
    answer:
      "We offer comprehensive digital marketing services including SEO (Search Engine Optimization), Meta Ads (Facebook & Instagram), Google Ads, Content Marketing, Social Media Marketing, and Analytics & Reporting.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "We follow a three-step process: Strategy (analyze your business, competitors, and market), Execution (implement campaigns with precision and creativity), and Growth (continuously optimize for maximum ROI).",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We serve a diverse range of industries including Tech Startups, E-commerce, Healthcare, Education, Real Estate, Hospitality, Finance, and Retail.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We use comprehensive analytics and reporting to track KPIs, conversions, and ROI. We provide monthly reports with actionable insights and recommendations for continuous improvement.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is customized based on your business needs and goals. Contact us for a free consultation where we'll discuss your requirements and provide a tailored proposal.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results timeline varies by service. SEO typically shows results in 3-6 months, while paid advertising can generate leads within weeks. We set realistic expectations and provide regular progress updates.",
  },
  {
    question: "Do you offer ongoing support and management?",
    answer:
      "Yes, we offer continuous campaign management, optimization, and support. Our team monitors performance daily and makes adjustments to maximize your results.",
  },
];

export default function FAQs() {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={faqHero}
            alt="FAQs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              FAQs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our learning programs and
              agency services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Course FAQs
                </h2>
                <p className="text-muted-foreground">
                  Questions about our digital marketing program
                </p>
              </div>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {learningFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`learning-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Agency FAQs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Digital Agency FAQs
                </h2>
                <p className="text-muted-foreground">
                  Questions about our marketing services
                </p>
              </div>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {agencyFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`agency-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
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
                Still Have <span className="text-primary">Questions</span>?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-6">
                Can't find the answer you're looking for? Our team is here to
                help. Reach out to us and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-4 text-secondary-foreground/80">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:admin@scalup.org"
                    className="text-primary hover:underline"
                  >
                    admin@scalup.org
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919797703232"
                    className="text-primary hover:underline"
                  >
                    +91 9797703232
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LeadForm
                title="Ask a Question"
                description="We'll get back to you within 24 hours"
                buttonText="Send Question"
                showMessage
                source="consultation"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
