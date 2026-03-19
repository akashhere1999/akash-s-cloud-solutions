import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CertFlipCard from "@/components/CertFlipCard";

const certifications = [
  {
    name: "Azure Security Engineer Associate",
    issuer: "Microsoft",
    issued: "Feb 2026",
    expires: "Feb 2027",
    link: "https://learn.microsoft.com/en-us/users/akashshirsekar-2206/credentials/5824404bf829de9",
    active: true,
    value: "Architects enterprise-grade security postures across hybrid cloud environments, ensuring compliance and zero-trust implementation.",
  },
  {
    name: "Onboarding & Operationalizing Wiz Cloud",
    issuer: "Wiz",
    issued: "Nov 2025",
    link: "https://certified.training.wiz.io/1fbbaf76-08ec-4b5b-aad9-564e898e2c47#acc.oAmudh3J",
    active: true,
    value: "Deploys cloud-native security platforms to achieve full-stack visibility and risk prioritization across multi-cloud estates.",
  },
  {
    name: "Generative AI Leader Certification",
    issuer: "Google",
    issued: "Oct 2025",
    expires: "Oct 2028",
    link: "https://www.credly.com/badges/12994470-12d7-49c2-a313-0ae737ec6ad0/linked_in_profile",
    active: true,
    value: "Drives AI-powered transformation strategies, integrating large language models into enterprise workflows for measurable ROI.",
  },
  {
    name: "Terraform Associate (003)",
    issuer: "HashiCorp",
    issued: "May 2025",
    expires: "May 2027",
    link: "https://www.credly.com/badges/8bf21e7d-2be7-450a-b299-b503c687d3b9/linked_in_profile",
    active: true,
    value: "Automates infrastructure provisioning with Infrastructure-as-Code, cutting deployment times by 60% and eliminating configuration drift.",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "AWS",
    issued: "May 2025",
    expires: "May 2028",
    link: "https://www.credly.com/badges/e1c2e38e-d73c-4ccb-858e-230e8ecad9e3/linked_in_profile",
    active: true,
    value: "Designs and deploys scalable AI/ML solutions on AWS, enabling data-driven decision making for enterprise applications.",
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    issued: "Oct 2023",
    expires: "Oct 2024",
    link: "https://learn.microsoft.com/en-us/users/akashshirsekar-2206/credentials/f34abeac3ca7bcb7",
    active: false,
    value: "Managed enterprise Azure environments at scale — identity, networking, compute, and storage for production workloads.",
  },
  {
    name: "OCI 2023 Foundations Associate",
    issuer: "Oracle",
    issued: "Jul 2023",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=85861E029F6473C85B4B5B2D772251A2246B810C07A09EF91A28CC265F30EC9D",
    active: true,
    value: "Extends multi-cloud strategy with Oracle Cloud expertise, enabling seamless database and application migration.",
  },
  {
    name: "Solutions Architect – Professional",
    issuer: "AWS",
    issued: "Feb 2023",
    expires: "Feb 2026",
    link: "https://www.credly.com/badges/96a9d5fa-a37f-43fc-a6c4-ab6eb9926bea/linked_in_profile",
    active: false,
    value: "Designed complex, highly-available distributed systems on AWS handling millions of requests with cost-optimized architectures.",
  },
  {
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    issued: "Apr 2022",
    link: "https://www.credly.com/badges/30f22425-6bce-409b-b1ab-61300e4f07f9",
    active: true,
    value: "Builds modern data platforms on Azure, enabling analytics pipelines and data governance for enterprise intelligence.",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "Mar 2022",
    link: "https://www.credly.com/badges/0a368690-8386-4566-88ac-e855421699c6",
    active: true,
    value: "Applies Azure AI services — vision, NLP, and decision models — to solve real-world business challenges at scale.",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    issued: "Feb 2022",
    link: "https://www.credly.com/badges/ee437d58-13f6-490c-9d1e-82c9ae299d55",
    active: true,
    value: "Foundation for building secure, scalable cloud solutions on Microsoft Azure for enterprise digital transformation.",
  },
  {
    name: "Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    issued: "Jan 2022",
    link: "https://www.credly.com/badges/b9132831-ede3-4c63-9536-3b26933b6f64",
    active: true,
    value: "Implements identity-driven security and compliance frameworks to protect enterprise data across cloud boundaries.",
  },
  {
    name: "Solutions Architect – Associate",
    issuer: "AWS",
    issued: "Nov 2021",
    expires: "Jan 2026",
    link: "https://www.credly.com/badges/dc8e0157-1410-48fe-bf06-a94d5263f632/linked_in_profile",
    active: false,
    value: "Designs resilient, high-performance AWS architectures balancing cost, security, and scalability for production systems.",
  },
];

const CertificationsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="certifications" className="py-24 relative" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div style={{ scale: headingScale, opacity: headingOpacity }} className="mb-16">
          <p className="section-label mb-3">05 — Credentials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Industry-recognized certifications across AWS, Azure, Google Cloud, and more — hover to
            discover how each translates to real enterprise impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertFlipCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
