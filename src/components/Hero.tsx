import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const roles = ["Software Engineer", "Frontend Developer", "MERN Stack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="relative z-10 text-center px-6 max-w-3xl mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-base md:text-lg mb-2 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-2 text-foreground"
        >
          Suman Shekhar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-10 mb-2"
        >
          <span className="text-xl md:text-2xl text-muted-foreground font-light">
            {text}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground text-base md:text-lg mb-4 max-w-xl mx-auto leading-relaxed"
        >
          Aspiring Software Developer based in Bengaluru, India.
          Passionate about building modern web applications with clean code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <button
            onClick={() => {
              window.open("/resume.pdf", "_blank");
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "suman_resume.pdf";
              link.click();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Download className="w-4 h-4" /> Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <ArrowDown className="w-8 h-8 text-primary mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
