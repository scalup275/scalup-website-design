import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface LeadFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showMessage?: boolean;
}

export function LeadForm({
  title = "Book a Free Consultation",
  description = "Get personalized guidance from our experts",
  buttonText = "Submit",
  showMessage = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for reaching out!",
      description: "We'll contact you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-12 bg-muted/30"
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12 bg-muted/30"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="h-12 bg-muted/30"
        />
        {showMessage && (
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[100px] bg-muted/30"
          />
        )}
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              {buttonText} <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
