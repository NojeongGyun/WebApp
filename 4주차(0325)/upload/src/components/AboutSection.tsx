import { motion } from "framer-motion";
import { Code2, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <GraduationCap size={28} />,
              title: "Education",
              desc: "경성대학교 소프트웨어학과 3학년 재학 중. 컴퓨터 과학의 기초부터 실무 개발까지 체계적으로 학습하고 있습니다.",
            },
            {
              icon: <Code2 size={28} />,
              title: "Development",
              desc: "다양한 프로그래밍 언어와 프레임워크를 활용하여 웹, 시스템, 알고리즘 프로젝트를 진행하고 있습니다.",
            },
            {
              icon: <Target size={28} />,
              title: "Goal",
              desc: "사용자 중심의 소프트웨어를 만들고, 끊임없이 성장하는 개발자가 되는 것을 목표로 합니다.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all">
                {item.icon}
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
