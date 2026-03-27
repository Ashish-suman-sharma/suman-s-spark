import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "3d02af9a-37ff-4520-9cce-5ab6793c476e");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-5"
          >
            {[
              { key: "name", label: "Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm text-muted-foreground mb-1.5 block">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"}
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm font-medium"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello!
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "9155115257", href: "tel:9155115257" },
                { icon: Mail, label: "sumanfly06@gmail.com", href: "mailto:sumanfly06@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sumanshekhar42" },
                { icon: Github, label: "GitHub", href: "https://github.com/sekhar42" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:glow transition-shadow">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
