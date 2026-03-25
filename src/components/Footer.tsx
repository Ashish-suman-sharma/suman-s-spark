import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumanshekhar42" },
  { icon: Github, href: "#" },
  { icon: Mail, href: "mailto:sumanshekhar.office@gmail.com" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Suman Shekhar. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
