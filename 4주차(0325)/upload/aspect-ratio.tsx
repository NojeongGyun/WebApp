import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 60 },
      { name: "C++", level: 55 },
      { name: "Java", level: 50 },
      { name: "Python", level: 45 },
      { name: "JavaScript", level: 50 },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", level: 60 },
      { name: "CSS", level: 55 },
      { name: "React", level: 40 },
      { name: "Node.js", level: 35 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 55 },
      { name: "VS Code", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">02.</span> Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <h3 className="font-mono text-sm text-primary mb-6 tracking-wider uppercase">
                {"// "}{cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
