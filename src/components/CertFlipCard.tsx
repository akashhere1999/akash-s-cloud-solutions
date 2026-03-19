import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Cert {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  link: string;
  active: boolean;
  value: string;
}

const issuerColor: Record<string, string> = {
  Microsoft: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  AWS: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Google: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  HashiCorp: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Oracle: "bg-red-500/10 text-red-400 border-red-500/20",
  Wiz: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

const issuerGlow: Record<string, string> = {
  Microsoft: "shadow-blue-500/10",
  AWS: "shadow-amber-500/10",
  Google: "shadow-emerald-500/10",
  HashiCorp: "shadow-violet-500/10",
  Oracle: "shadow-red-500/10",
  Wiz: "shadow-cyan-500/10",
};

const CertFlipCard = ({ cert, index }: { cert: Cert; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="perspective-[1000px] h-[220px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl glass-card p-5 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle gradient orb */}
          <div
            className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${
              issuerColor[cert.issuer]?.includes("blue")
                ? "bg-blue-500"
                : issuerColor[cert.issuer]?.includes("amber")
                  ? "bg-amber-500"
                  : issuerColor[cert.issuer]?.includes("emerald")
                    ? "bg-emerald-500"
                    : issuerColor[cert.issuer]?.includes("violet")
                      ? "bg-violet-500"
                      : issuerColor[cert.issuer]?.includes("red")
                        ? "bg-red-500"
                        : "bg-cyan-500"
            }`}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <span
                className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                  issuerColor[cert.issuer] ?? "bg-secondary text-secondary-foreground border-border"
                }`}
              >
                {cert.issuer}
              </span>
              {!cert.active && (
                <Badge
                  variant="outline"
                  className="text-[10px] px-1.5 py-0 border-muted-foreground/30 text-muted-foreground"
                >
                  Expired
                </Badge>
              )}
            </div>
            <div className="flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">{cert.name}</h3>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {cert.issued}
            </span>
            <span className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
              Hover to flip
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-xl p-5 flex flex-col justify-between overflow-hidden border border-border/50 bg-gradient-to-br from-card via-secondary/80 to-card shadow-lg ${issuerGlow[cert.issuer] ?? ""}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-primary mb-3">
              Business Value
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">{cert.value}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                issuerColor[cert.issuer] ?? "bg-secondary text-secondary-foreground border-border"
              }`}
            >
              {cert.issuer}
            </span>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-primary font-mono flex items-center gap-1 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Verify
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertFlipCard;
