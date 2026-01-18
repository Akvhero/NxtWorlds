import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold text-gradient-gold">
                Next World
              </span>
              <span className="block text-xs tracking-[0.3em] text-muted-foreground uppercase mt-1">
                Enterprises
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting timeless jewelry pieces that celebrate your unique style
              and life's precious moments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Collections", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/nextworld.enterprises?utm_source=qr&igsh=cHB6a3kxM3JueW5j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <span>@nextworld.enterprises</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>info@nextworldenterprises.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span>India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Next World Enterprises. All rights
              reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs">
              Crafted with ♥ in India
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
