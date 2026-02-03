import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds, but only if not shown before in this session
    const hasSeenPopup = sessionStorage.getItem("scalup_popup_shown");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("scalup_popup_shown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-background border-none shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 rounded-lg pointer-events-none" />
        
        <DialogHeader className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Book a <span className="text-primary">Free</span> Demo Class
          </DialogTitle>
          <p className="text-muted-foreground text-center text-sm mt-2">
            Experience our AI-driven digital marketing curriculum firsthand
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 relative mt-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 bg-muted/50 border-border/50 focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12 bg-muted/50 border-border/50 focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12 bg-muted/50 border-border/50 focus:border-primary"
            />
          </div>
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Demo Access"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to receive communications from SCALUP.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
