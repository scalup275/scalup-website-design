import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import logoagency from "@/assets/logoagency.png";

const navLinks = [
  { name: "Learning", href: "/" },
   { name: "Agency", href: "/agency" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Work with us", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAgencyPage = location.pathname.startsWith("/agency");
  const currentLogo = isAgencyPage ? logoagency : logo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + agency logo*/}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={currentLogo}
            alt="SCALUP Digital Marketing School"
            className="h-20 md:h-18 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Free Demo Class</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background p-0">
            <div className="flex flex-col h-full">
              {/* Mobile Header,included agency logo */}
              <div className="flex items-center justify-between p-4 border-b">
                <img src={currentLogo} alt="SCALUP" className="h-10 w-auto" />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-6 py-3 text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t">
                <Button variant="hero" className="w-full" asChild>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Free Demo
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
