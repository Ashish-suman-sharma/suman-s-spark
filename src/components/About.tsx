import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Server, Brain, Code, Zap, Layers } from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Globe },
  { name: "MongoDB", icon: Database },
  { name: "JavaScript", icon: Code },
  { name: "SQL", icon: Database },
  { name: "DSA", icon: Brain },
  { name: "Java", icon: Code2 },
  { name: "REST API", icon: Zap },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an aspiring Software Developer currently pursuing my BE in Computer Science
              at Vinayaka Mission's Research Foundation (2022–2026). Based in Bengaluru, I'm
              passionate about building full-stack web applications using the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've gained hands-on experience as a Web Developer at crio.do under fellowship
              (May 2025–March 2026), where I worked on real-world projects and sharpened my
              software development skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus areas include Software Development, modern JavaScript frameworks,
              and solving algorithmic problems through Data Structures & Algorithms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 cursor-default group"
              >
                <skill.icon className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all" />
                <span className="text-xs font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
