import { motion } from "framer-motion";
import { ExternalLink, Database, RefreshCcw } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "AWS Lambda-based Backup Monitoring Dashboard",
    description:
      "Automated monitoring solution validating daily S3 backups, logging missing backups to CloudWatch, and sending real-time SNS email alerts. Improved visibility and compliance across the organization.",
    tags: ["Lambda", "S3", "CloudWatch", "SNS"],
    metrics: [
      { label: "Compliance", value: "99.9%" },
      { label: "Alert Latency", value: "< 30s" },
    ],
  },
  {
    icon: RefreshCcw,
    title: "Cross-Region RDS DR using AWS DMS",
    description:
      "Custom disaster recovery setup for Amazon RDS with continuous replication to secondary region, achieving near-zero RTO and reducing data loss to under 5 minutes.",
    tags: ["RDS", "DMS", "DR", "Multi-Region"],
    metrics: [
      { label: "RTO", value: "Near-Zero" },
      { label: "RPO", value: "< 5 min" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">03 — Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass-card rounded-xl p-8 group hover:glow-border transition-all duration-500"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
