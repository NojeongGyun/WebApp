import { motion } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">04.</span> Contact
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-sans mb-12 max-w-lg mx-auto">
            프로젝트 협업이나 궁금한 점이 있으시다면 언제든지 연락해 주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block p-8 rounded-xl bg-background border border-border text-left font-mono text-sm"
        >
          <div className="text-muted-foreground mb-1">{"// contact.json"}</div>
          <div className="text-foreground">{"{"}</div>
          <div className="ml-4 space-y-2 my-2">
            <div className="flex items-center gap-3">
              <span className="text-terminal-cyan">"name"</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-primary">"노정균"</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-muted-foreground" />
              <span className="text-terminal-cyan">"phone"</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-primary">"010-xxxx-8522"</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-muted-foreground" />
              <span className="text-terminal-cyan">"email"</span>
              <span className="text-muted-foreground">:</span>
              <a href="mailto:shwjdrbs12@naver.com" className="text-primary hover:underline">"shwjdrbs12@naver.com"</a>
            </div>
            <div className="flex items-center gap-3">
              <Github size={14} className="text-muted-foreground" />
              <span className="text-terminal-cyan">"github"</span>
              <span className="text-muted-foreground">:</span>
              <a href="https://github.com/NojeongGyun" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">"NojeongGyun"</a>
            </div>
          </div>
          <div className="text-foreground">{"}"}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
