import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import config from "../../mock/config.json";

export const Footer = () => {
  console.log("Footer component rendering...");
  console.log("Link component:", Link);
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      href: config.info.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: config.info.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/khoa.tri.365.org",
      label: "Facebook",
    },
    {
      icon: Mail,
      href: `mailto:${config.info.mail}`,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">
              {t("hero.name")}
            </h3>
            <p className="text-muted-foreground max-w-sm">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/demos"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.demos")}
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="hover-lift focus-ring"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 {t("hero.name")}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
