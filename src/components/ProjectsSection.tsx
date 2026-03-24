import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, RefreshCcw } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const projects = [
  {
    icon: Database,
    title: "AWS Lambda-based Backup Monitoring Dashboard",
    description:
      "Automated monitoring solution validating daily S3 backups, logging missing backups to CloudWatch, and sending real-time SNS email alerts. Improved visibility and compliance across the organization.",
    tags: ["Lambda", "S3", "CloudWatch", "SNS", "EventBridge"],
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
    tags: ["RDS", "DMS", "DR"],
    metrics: [
      { label: "RTO", value: "Near-Zero" },
      { label: "RPO", value: "< 5 min" },
    ],
  },
];

const CountUpMetric = ({ value, label }: { value: string; label: string }) => {
  const { ref, display } = useCountUp(value);
  return (
    <div className="text-center">
      <p ref={ref} className="text-2xl font-bold text-primary">{display}</p>
      <p className="text-xs text-muted-foreground font-mono">{label}</p>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div style={{ scale: headingScale, opacity: headingOpacity }} className="mb-16">
          <p className="section-label mb-3">03 — Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01 }}
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
                  <p className="text-muted-foreground leading-relaxed mb-5">{project.description}</p>
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
                    <CountUpMetric key={metric.label} value={metric.value} label={metric.label} />
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
