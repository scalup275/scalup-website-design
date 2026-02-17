import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import { useLocation } from "react-router-dom";
export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isAgency = location.pathname === "/agency";

  useEffect(() => {
    const allowedRoutes = ["/", "/agency"];
    if (!allowedRoutes.includes(location.pathname)) return;

    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center mb-4">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>

          <DialogTitle className="text-2xl font-bold text-center w-full">
            {isAgency ? (
              <>
                Book a <span className="text-primary">Free</span> Consultation
              </>
            ) : (
              <>
                Book a <span className="text-primary">Free</span> Demo Class
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        <LeadForm
          buttonText={
            isAgency ? "Book Free Consultation" : "Get Free Demo Access"
          }
          source={isAgency ? "agency" : "popup"}
        />
      </DialogContent>
    </Dialog>
  );
}
