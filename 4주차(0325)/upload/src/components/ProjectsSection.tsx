import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "API & AI 활용 웹 애플리케이션",
    description: "외부 API와 AI 기술을 결합하여 제작한 웹 애플리케이션입니다. 데이터를 실시간으로 처리하고 AI 기반 기능을 통해 사용자에게 스마트한 경험을 제공합니다.",
    tags: ["JavaScript", "React", "API", "AI"],
    github: "https://github.com/NojeongGyun",
  },
  {
    title: "AI 기반 웹 서비스",
    description: "AI 기술을 활용하여 제작한 웹 서비스입니다. 인공지능 모델을 연동하여 자동화된 기능과 지능형 인터페이스를 구현했습니다.",
    tags: ["JavaScript", "AI", "Web", "Python"],
    github: "https://github.com/NojeongGyun",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">03.</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-terminal-cyan">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
