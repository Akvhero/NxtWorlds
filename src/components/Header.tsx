import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold">
              Next World
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Enterprises
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/nextworld.enterprises?utm_source=qr&igsh=cHB6a3kxM3JueW5j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground/80 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="https://www.instagram.com/nextworld.enterprises?utm_source=qr&igsh=cHB6a3kxM3JueW5j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                  <span>Follow Us</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
