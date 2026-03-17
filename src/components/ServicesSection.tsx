import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Shield, Server, GitBranch } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Architecting highly available SAP & Non-SAP workloads on AWS and Azure with optimal performance and scalability.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Implementing IAM policies, Security Hub, AWS WAF, and firewall configurations to meet enterprise compliance standards.",
  },
  {
    icon: Server,
    title: "Infrastructure Automation",
    description:
      "Building reusable, version-controlled infrastructure with Terraform and CloudFormation for repeatable deployments.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    description:
      "Designing end-to-end CI/CD pipelines and automating monitoring, alerting, and disaster recovery workflows.",
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="services" className="py-24 relative" ref={containerRef}>
      {/* Section gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div style={{ scale: headingScale, opacity: headingOpacity }} className="mb-16">
          <p className="section-label mb-3">02 — What I do</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Cloud Architecture <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll on desktop */}
        <div className="hidden md:block overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
          <div className="flex gap-6 w-max">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.04, y: -8 }}
                className="glass-card rounded-xl p-8 group hover:glow-border transition-all duration-500 w-[340px] flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden grid gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-xl p-8 group hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
