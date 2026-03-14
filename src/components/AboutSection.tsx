import { motion } from "framer-motion";
import { GraduationCap, Building2, Calendar } from "lucide-react";

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
  },
  {
    role: "Sr Cloud Engineer",
    company: "Sapphire Infotech Ventures",
    period: "Oct 2021 – Jul 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 — Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience that shapes{" "}
            <span className="text-gradient">meaningful infrastructure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            With deep expertise in cloud architecture and security, I've led
            enterprise-grade deployments for organizations seeking robust,
            scalable, and compliant infrastructure across AWS and Azure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Education & Experience */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <p className="text-foreground font-medium">BSc IT</p>
              <p className="text-muted-foreground text-sm">
                Jai Hind College, Mumbai University
              </p>
            </motion.div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Experience
              </h3>
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="glass-card rounded-xl p-6 mb-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{exp.role}</p>
                      <p className="text-muted-foreground text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-primary flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <p className="text-sm font-mono text-primary mb-2">
                    {skill.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {item}
                      </span>
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
