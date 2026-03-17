import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Calendar,
  ChevronRight,
  Shield,
  Server,
  Code2,
  Users,
  Database,
} from "lucide-react";

const skills = [
  { category: "Cloud Platforms", items: ["AWS", "Azure"] },
  { category: "Networking & Security", items: ["VPC", "Transit Gateway", "VPN", "Direct Connect", "NLB/ALB"] },
  { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation"] },
  { category: "Migration & DR", items: ["AWS MGN", "DRS"] },
  { category: "Monitoring", items: ["CloudWatch", "Systems Manager", "AWS Config"] },
  { category: "Security & Compliance", items: ["IAM", "Security Hub", "AWS WAF", "Firewall"] },
];

const experience = [
  {
    role: "Assistant Manager",
    company: "Deloitte",
    period: "Aug 2025 – Present",
    details: [
      { title: "Security Architecture & Compliance", description: "Architected enterprise-grade Azure solutions tailored for application teams, ensuring strict adherence to ISO 27001 and NIST frameworks to achieve \"Audit-Ready\" status prior to production launch.", icon: Shield },
      { title: "Automated Incident Response", description: "Engineered a seamless security orchestration pipeline by deploying Microsoft Defender for Cloud (MDC) and Azure Sentinel, utilizing Logic Apps to automate ticket creation in ServiceNow for real-time alert remediation.", icon: Server },
      { title: "SOC Optimization", description: "Developed custom KQL analytics rules and interactive dashboards within Sentinel to enhance visibility and streamline threat detection for complex cloud environments.", icon: Code2 },
      { title: "Governance & Gap Analysis", description: "Conducted comprehensive security audits on existing applications and platforms, identifying architectural vulnerabilities and redesigning infrastructure to eliminate compliance gaps and improve overall system reliability.", icon: Shield },
    ],
  },
  {
    role: "Sr Cloud Engineer",
    company: "Sapphire Infotech Ventures",
    period: "Oct 2021 – Jul 2025",
    details: [
      { title: "Disaster Recovery Leadership", description: "Spearheaded multiple production-level failover and failback operations, consistently meeting aggressive RPO and RTO targets to ensure business continuity for mission-critical workloads.", icon: Server },
      { title: "Large-Scale Migration", description: "Executed complex \"lift-and-shift\" migrations from on-premises data centers to AWS using the AWS Application Migration Service (MGN), minimizing downtime and technical debt.", icon: Code2 },
      { title: "Infrastructure as Code (IaC)", description: "Automated the deployment of global cloud infrastructure from the ground up using Terraform, integrating CI/CD workflows via GitHub for version-controlled, repeatable environments.", icon: Code2 },
      { title: "Identity & Access Management", description: "Enhanced enterprise security by implementing Okta SSO integration across a multi-account AWS Organization, streamlining user access and centralized identity governance.", icon: Users },
      { title: "Database Resiliency", description: "Orchestrated cross-region and cross-account disaster recovery strategies for Amazon RDS using AWS Database Migration Service (DMS) to ensure data integrity and high availability.", icon: Database },
    ],
  },
];

const AboutSection = () => {
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div style={{ scale: headingScale, opacity: headingOpacity }} className="mb-16">
          <p className="section-label mb-3">01 — Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience that shapes{" "}
            <span className="text-gradient">meaningful infrastructure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            With deep expertise in cloud architecture and security, I've led enterprise-grade
            deployments for organizations seeking robust, scalable, and compliant infrastructure
            across AWS and Azure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Education & Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground font-medium">BSc IT</p>
                  <p className="text-muted-foreground text-sm">Jai Hind College, Churchgate</p>
                </div>
                <div className="border-t border-border/50 pt-3">
                  <p className="text-foreground font-medium">HSC</p>
                  <p className="text-muted-foreground text-sm">Elphinstone College, Fort</p>
                </div>
                <div className="border-t border-border/50 pt-3">
                  <p className="text-foreground font-medium">SSC</p>
                  <p className="text-muted-foreground text-sm">OLCG High School, Sion</p>
                </div>
              </div>
            </motion.div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Experience
              </h3>
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setActiveExp(activeExp === i ? null : i)}
                    className={`w-full glass-card rounded-xl p-6 text-left transition-all duration-300 group cursor-pointer ${
                      activeExp === i ? "glow-border ring-1 ring-primary/30" : "hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: activeExp === i ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </motion.div>
                        <div>
                          <p className="font-semibold text-foreground">{exp.role}</p>
                          <p className="text-muted-foreground text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-primary flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeExp === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pl-4 space-y-3">
                          {exp.details.map((detail, j) => {
                            const Icon = detail.icon;
                            return (
                              <motion.div
                                key={detail.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.08, duration: 0.4 }}
                                className="glass-card rounded-lg p-4 border-l-2 border-primary/40 hover:border-primary transition-colors duration-300 group/item"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary/20 transition-colors duration-300">
                                    <Icon className="h-3.5 w-3.5" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-foreground mb-1">
                                      {detail.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {detail.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Skills with spring animation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <p className="text-sm font-mono text-primary mb-2">{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.08 + j * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50 cursor-default shimmer-hover"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
