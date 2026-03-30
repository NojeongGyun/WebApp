import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Phone, ChevronDown } from "lucide-react";

const roles = [
  "Software Developer",
  "Problem Solver",
  "Full-Stack Enthusiast",
  "Code Craftsman",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary mb-4 text-sm tracking-widest uppercase">
            {"// Welcome to my portfolio"}
          </p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-foreground mb-4">
            노정균
          </h1>
          <p className="text-muted-foreground text-lg mb-2 font-sans">Jeonggyun No</p>
          <div className="h-12 flex items-center justify-center mb-8">
            <span className="font-mono text-xl md:text-2xl text-terminal-cyan">
              {">"} {displayText}
              <span className="animate-pulse text-primary">▊</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/NojeongGyun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground hover:border-primary hover:text-primary transition-all font-mono text-sm"
          >
            <Github size={18} /> NojeongGyun
          </a>
          <a
            href="mailto:shwjdrbs12@naver.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground hover:border-primary hover:text-primary transition-all font-mono text-sm"
          >
            <Mail size={18} /> Email
          </a>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground font-mono text-sm">
            <Phone size={18} /> 010-xxxx-8522
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
