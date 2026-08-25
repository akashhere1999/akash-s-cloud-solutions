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
  Network,
  Lock,
  Bell,
  Workflow,
  GitBranch,
  Cloud,
  Globe,
  Activity,
  Plane,
} from "lucide-react";

const skills = [
  { category: "Cloud Governance & Identity", items: ["AWS Organizations", "Control Tower", "IAM (SCPs, Roles, Boundaries)", "AWS Config", "Okta SSO"] },
  { category: "Networking", items: ["VPC", "Transit Gateway", "Direct Connect", "VPC/VNet Peering", "Route 53", "Network Firewall"] },
  { category: "IaC & Automation", items: ["Terraform", "CloudFormation", "Ansible", "Python (Boto3)", "AWS Systems Manager"] },
  { category: "DevSecOps & CI/CD", items: ["GitHub Actions", "Azure DevOps", "Jenkins", "Checkov", "Gitleaks"] },
  { category: "Security & Compliance", items: ["Zero Trust", "Azure Sentinel", "Microsoft Defender", "NIST", "ISO"] },
  { category: "Observability", items: ["CloudWatch", "CloudTrail", "Prometheus", "Grafana", "ELK Stack"] },
  { category: "Containers", items: ["Kubernetes (K8s)", "Docker"] },
  { category: "Architecture & DR", items: ["High Availability", "AWS Elastic Disaster Recovery", "RTO/RPO Planning"] },
];

const experience = [
  {
    role: "Assistant Manager",
    company: "Deloitte, Mumbai (On-site)",
    period: "Aug 2025 – Present",
    details: [
      { title: "Network Security Architecture", description: "Design and validate secure hybrid cloud networking across AWS and Azure for enterprise clients, applying strict segmentation and VPC/VNet peering to minimize attack surface.", icon: Network },
      { title: "Infrastructure as Code", description: "Develop standardized, reusable Terraform modules for core infrastructure (VPCs, Transit Gateways, Route53), enabling consistent, repeatable deployments across a global cloud environment.", icon: Code2 },
      { title: "Threat Detection & Monitoring", description: "Deploy Azure Sentinel and Microsoft Defender to monitor network traffic, configuring automated alerts for anomalous ingress/egress activity and potential port scans to strengthen SOC visibility.", icon: Bell },
      { title: "Security Automation", description: "Built an automated incident response pipeline integrating Microsoft Sentinel with ServiceNow via Azure Logic Apps, enabling real-time ticket generation for security alerts and reducing manual triage.", icon: Workflow },
      { title: "IaC Security Scanning", description: "Conducted Checkov static analysis on Terraform code for Azure infrastructure and authored custom Checkov policies per business requirements to catch misconfigurations pre-deployment.", icon: Shield },
      { title: "CI/CD Security", description: "Implemented GitHub Actions with Gitleaks for secrets detection and created CI/CD pipeline rules in GitHub to enforce security gates before merge and deployment.", icon: GitBranch },
    ],
  },
  {
    role: "Senior Cloud Engineer",
    company: "Sapphire Infotech Ventures, Mumbai (Hybrid)",
    period: "Oct 2021 – Jul 2025",
    details: [
      { title: "Multi-Account AWS Governance", description: "Deployed and managed multi-account AWS environments using AWS Organizations and Control Tower, enforcing governance via SCPs and Permission Boundaries; architected network security behind AWS Network Firewall with centralized inspection.", icon: Cloud },
      { title: "IAM & Identity Governance", description: "Implemented Okta-based Single Sign-On across 30+ AWS accounts, centralizing user lifecycle management and streamlining IAM permission controls enterprise-wide.", icon: Users },
      { title: "Hybrid Enterprise Networking", description: "Engineered secure, scalable hybrid connectivity using AWS Transit Gateway, Direct Connect, Fortinet firewalls, and OpenVPN for on-premises-to-AWS integration.", icon: Globe },
      { title: "Automation & Tooling", description: "Built Python (Boto3) automation for infrastructure provisioning and patching; automated AMI builds and patch pipelines with AWS Patch Manager.", icon: Server },
      { title: "Disaster Recovery", description: "Designed disaster recovery solutions with AWS Elastic Disaster Recovery, running biannual DR drills to validate RTO/RPO targets.", icon: Database },
      { title: "Performance Monitoring", description: "Built cross-cloud (AWS/Azure) Grafana dashboards with automated alerting for system performance and reliability.", icon: Activity },
      { title: "Cloud Migration", description: "Led migration of on-premises VMware workloads (SAP and non-SAP) to AWS, including AMI creation and HA re-architecture with minimal RTO/RPO.", icon: Plane },
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
