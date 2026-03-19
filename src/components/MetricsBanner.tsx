import { motion } from "framer-motion";
import { TrendingUp, Server, Shield, Clock, Zap, Globe } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const metrics = [
  {
    icon: TrendingUp,
    value: "60%",
    label: "Faster Deployments",
    description: "Infrastructure provisioning speed improvement via IaC",
  },
  {
    icon: Server,
    value: "200+",
    label: "Servers Migrated",
    description: "Enterprise workloads moved to AWS & Azure",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime Achieved",
    description: "Across mission-critical production environments",
  },
  {
    icon: Clock,
    value: "< 5min",
    label: "RPO Target",
    description: "Disaster recovery with near-zero data loss",
  },
  {
    icon: Zap,
    value: "50+",
    label: "Infra Projects",
    description: "End-to-end cloud architecture delivered",
  },
  {
    icon: Globe,
    value: "4+",
    label: "Years in Cloud",
    description: "Deep expertise across multi-cloud platforms",
  },
];

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const { ref, display } = useCountUp(metric.value);
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative group"
    >
      <div className="glass-card rounded-xl p-6 h-full border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <p ref={ref} className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            {display}
          </p>
        </div>
        <p className="text-sm font-semibold text-foreground mb-1">{metric.label}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
      </div>
    </motion.div>
  );
};

const MetricsBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3">Impact at a glance</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            Quantifiable <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default MetricsBanner;
