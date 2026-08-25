import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, BookOpen, Linkedin, Youtube, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: "akashshirsekar19@gmail.com", href: "mailto:akashshirsekar19@gmail.com" },
  { icon: BookOpen, label: "Medium", value: "akzee1917", href: "https://medium.com/@akzee1917" },
  { icon: Linkedin, label: "LinkedIn", value: "Akash Shirsekar", href: "https://www.linkedin.com/in/akash-shirsekar" },
  { icon: Youtube, label: "YouTube", value: "Akash Shirsekar", href: "https://www.youtube.com/@akashshirsekar" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_7nzh5tg", "template_42d9pc2", { from_name: form.name, from_email: form.email, message: form.message }, "unIadKTxHEH5yDd-y");
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div style={{ scale: headingScale, opacity: headingOpacity }} className="mb-16">
          <p className="section-label mb-3">04 — Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Interested in working together or have a question about cloud architecture? Feel free to reach out — I'd love to connect.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 glass-card rounded-lg p-4 hover:glow-border transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{info.label}</p>
                    <p className="text-sm text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={5} required className="bg-secondary border-border" />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
