import { motion } from "framer-motion";
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
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">02 — What I do</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Cloud Architecture{" "}
            <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
