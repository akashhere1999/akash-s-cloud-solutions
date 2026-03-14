import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Azure Security Engineer Associate",
    issuer: "Microsoft",
    issued: "Feb 2026",
    expires: "Feb 2027",
    link: "https://learn.microsoft.com/en-us/users/akashshirsekar-2206/credentials/5824404bf829de9",
    active: true,
  },
  {
    name: "Onboarding & Operationalizing Wiz Cloud",
    issuer: "Wiz",
    issued: "Nov 2025",
    link: "https://certified.training.wiz.io/1fbbaf76-08ec-4b5b-aad9-564e898e2c47#acc.oAmudh3J",
    active: true,
  },
  {
    name: "Generative AI Leader Certification",
    issuer: "Google",
    issued: "Oct 2025",
    expires: "Oct 2028",
    link: "https://www.credly.com/badges/12994470-12d7-49c2-a313-0ae737ec6ad0/linked_in_profile",
    active: true,
  },
  {
    name: "Terraform Associate (003)",
    issuer: "HashiCorp",
    issued: "May 2025",
    expires: "May 2027",
    link: "https://www.credly.com/badges/8bf21e7d-2be7-450a-b299-b503c687d3b9/linked_in_profile",
    active: true,
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "AWS",
    issued: "May 2025",
    expires: "May 2028",
    link: "https://www.credly.com/badges/e1c2e38e-d73c-4ccb-858e-230e8ecad9e3/linked_in_profile",
    active: true,
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    issued: "Oct 2023",
    expires: "Oct 2024",
    link: "https://learn.microsoft.com/en-us/users/akashshirsekar-2206/credentials/f34abeac3ca7bcb7",
    active: false,
  },
  {
    name: "OCI 2023 Foundations Associate",
    issuer: "Oracle",
    issued: "Jul 2023",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=85861E029F6473C85B4B5B2D772251A2246B810C07A09EF91A28CC265F30EC9D",
    active: true,
  },
  {
    name: "Solutions Architect – Professional",
    issuer: "AWS",
    issued: "Feb 2023",
    expires: "Feb 2026",
    link: "https://www.credly.com/badges/96a9d5fa-a37f-43fc-a6c4-ab6eb9926bea/linked_in_profile",
    active: false,
  },
  {
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    issued: "Apr 2022",
    link: "https://www.credly.com/badges/30f22425-6bce-409b-b1ab-61300e4f07f9",
    active: true,
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "Mar 2022",
    link: "https://www.credly.com/badges/0a368690-8386-4566-88ac-e855421699c6",
    active: true,
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    issued: "Feb 2022",
    link: "https://www.credly.com/badges/ee437d58-13f6-490c-9d1e-82c9ae299d55",
    active: true,
  },
  {
    name: "Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    issued: "Jan 2022",
    link: "https://www.credly.com/badges/b9132831-ede3-4c63-9536-3b26933b6f64",
    active: true,
  },
  {
    name: "Solutions Architect – Associate",
    issuer: "AWS",
    issued: "Nov 2021",
    expires: "Jan 2026",
    link: "https://www.credly.com/badges/dc8e0157-1410-48fe-bf06-a94d5263f632/linked_in_profile",
    active: false,
  },
];

const issuerColor: Record<string, string> = {
  Microsoft: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  AWS: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Google: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  HashiCorp: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Oracle: "bg-red-500/10 text-red-400 border-red-500/20",
  Wiz: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5 },
  }),
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">05 — Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Industry-recognized certifications across AWS, Azure, Google Cloud,
            and more — validating deep expertise in cloud architecture, security,
            and AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glass-card rounded-xl p-5 group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      issuerColor[cert.issuer] ?? "bg-secondary text-secondary-foreground border-border"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {cert.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {cert.issued}
                </span>
                {!cert.active && (
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-muted-foreground/30 text-muted-foreground">
                    Expired
                  </Badge>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
