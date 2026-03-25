import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce web app with product listings, cart management, user auth, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A real-time task manager with drag-and-drop boards, team collaboration, and deadline tracking.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern animated portfolio website built with React, Framer Motion and Tailwind CSS.",
    tech: ["React", "Framer Motion", "Tailwind"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl p-6 flex flex-col group hover:glow transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
