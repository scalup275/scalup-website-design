import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Briefcase, Users, Rocket, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const roles = [
  "Digital Marketing Specialist",
  "Content Writer",
  "SEO Analyst",
  "Paid Ads Specialist",
  "Social Media Manager",
  "Graphic Designer",
  "Video Editor",
  "Sales Executive",
  "Business Development",
  "Operations",
  "Other",
];

const benefits = [
  { icon: Rocket, title: "Growth Opportunities", description: "Fast-track your career with continuous learning" },
  { icon: Users, title: "Great Team", description: "Work with passionate and talented individuals" },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible schedules and remote options" },
  { icon: Briefcase, title: "Competitive Pay", description: "Fair compensation with performance bonuses" },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
      resume: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
    }
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Work With <span className="text-primary">SCALUP</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Be part of a mission to democratize digital marketing education. 
              We're always looking for passionate individuals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-secondary-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Apply Now"
                title={
                  <>
                    Start Your <span className="text-primary">Journey</span> With Us
                  </>
                }
                description="We're looking for talented individuals who share our passion for education and digital marketing."
                align="left"
              />

              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-semibold text-foreground">Why Join SCALUP?</h3>
                <ul className="space-y-4">
                  {[
                    "Work on exciting projects with real impact",
                    "Learn from industry experts and mentors",
                    "Flexible work environment",
                    "Opportunities for growth and advancement",
                    "Be part of a supportive and collaborative team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">Apply Now</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-muted/30"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-muted/30"
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-muted/30"
                    />
                  </div>

                  <div>
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                    >
                      <SelectTrigger className="h-12 bg-muted/30">
                        <SelectValue placeholder="Select Role *" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about yourself and why you want to join SCALUP"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] bg-muted/30"
                    />
                  </div>

                  <div>
                    <label className="block">
                      <div className="flex items-center justify-center w-full h-32 px-4 transition bg-muted/30 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50">
                        <div className="flex flex-col items-center">
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {formData.resume ? formData.resume.name : "Upload your CV (PDF/DOC)"}
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </div>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
