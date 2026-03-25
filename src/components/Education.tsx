import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "BE in Computer Science",
    place: "Vinayaka Mission's Research Foundation",
    period: "2022 – 2026",
    description: "Pursuing Bachelor of Engineering in Computer Science with focus on software development and data structures.",
  },
  {
    icon: Briefcase,
    title: "Web Developer Intern",
    place: "Skyhigh Technologies",
    period: "July – August 2025",
    description: "Worked on real-world web projects, building frontend interfaces and backend APIs using the MERN stack.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Icon dot */}
                <div className="absolute left-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="glass rounded-xl p-6">
                  <span className="text-xs font-mono text-primary">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.place}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
