import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "QTrip - Travel Website",
    description: "A dynamic travel website with multi-select filters, image carousels, and localStorage for user preferences. Built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST"],
    live: "https://qtripdynamic-lake.vercel.app/",
    github: "https://github.com/sekhar42/sumanfly06-ME_QTRIPDYNAMIC",
  },
  {
    title: "XBoard - News Feed",
    description: "A news feed website that fetches latest news from Flipboard's RSS feed. Features accordions and image carousels for improved UI.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "REST API"],
    live: "https://xboard-criofrontend.netlify.app/",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description: "A full-featured e-commerce application with authentication, shopping cart, checkout, and REST API integration for dynamic data loading.",
    tech: ["React", "REST API", "React Router", "Material UI", "localStorage"],
    live: "https://sumancrioqkartfrontend.vercel.app/",
    github: "https://github.com/sekhar42/sumanfly06-ME_QKART_FRONTEND_V2",
  },
  {
    title: "Medify - Medical Center Finder",
    description: "A React app to search medical centers by state/city, view hospitals, and book appointments with date/time selection and booking history.",
    tech: ["React", "JavaScript", "API Integration", "React Router", "localStorage"],
    live: "https://medify-pi-lemon.vercel.app/",
    github: "https://github.com/sekhar42/medify",
  },
  {
    title: "Expense Tracker",
    description: "A responsive expense tracking application with CRUD operations, wallet balance control, visual analytics, and localStorage persistence.",
    tech: ["React", "JavaScript", "State Management", "Charts", "localStorage"],
    live: "https://expense-tracker-rho-pink.vercel.app/",
    github: "https://github.com/sekhar42/expense-tracker",
  },
  {
    title: "Spotify Clone",
    description: "A music browsing application with React, Material UI, and Swiper carousel. Browse songs by albums and genres with a seamless UI.",
    tech: ["React", "Material UI", "Swiper Library", "CSS Modules", "Flexbox"],
    live: "https://qtify-nine-flame.vercel.app/",
    github: "https://github.com/sekhar42/qtify-project",
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
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
