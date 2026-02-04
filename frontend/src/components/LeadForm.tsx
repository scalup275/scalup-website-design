import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendLead } from "@/lib/bot";
export type LeadSource = "consultation" | "demo" | "popup";

interface LeadFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showMessage?: boolean;
  source: LeadSource;
}

export function LeadForm({
  title,
  description,
  buttonText = "Submit",
  showMessage = false,
  source,
}: LeadFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    classPreference: "online", // default
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      source,
    };

    try {
      await sendLead(payload);

      toast({
        title: "Thank you!",
        description: "Our team will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        classPreference: "online",
      });
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error?.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
      {(title || description) && (
        <div className="text-center mb-6">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        {/* Class Preference (ONLY for Demo / Popup) */}
        {source !== "consultation" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Class Preference <span className="text-red-500">*</span>
            </label>

            <Select
              value={formData.classPreference}
              onValueChange={(value) =>
                setFormData({ ...formData, classPreference: value })
              }
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select class preference" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="online">Online Class</SelectItem>
                <SelectItem value="offline">Offline Class</SelectItem>
              </SelectContent>
            </Select>

            <p className="text-xs text-muted-foreground">
              Choose how you’d like to attend the classes
            </p>
          </div>
        )}

        {showMessage && (
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
