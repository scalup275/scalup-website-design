import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center mb-4">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Book a <span className="text-primary">Free</span> Demo Class
          </DialogTitle>
        </DialogHeader>

        <LeadForm buttonText="Get Free Demo Access" source="popup" />
      </DialogContent>
    </Dialog>
  );
}
