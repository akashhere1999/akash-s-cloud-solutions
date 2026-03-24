import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Briefcase, Mail, Shield, Cloud, Server, Lock, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "200+", label: "Servers Migrated" },
];

const orbitIcons = [
  { icon: Shield, delay: 0, label: "Security" },
  { icon: Cloud, delay: 1.2, label: "Cloud" },
  { icon: Server, delay: 2.4, label: "Infra" },
  { icon: Lock, delay: 3.6, label: "IAM" },
  { icon: GitBranch, delay: 4.8, label: "DevOps" },
];

const titleWords = "Akash Shirsekar".split(" ");

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 12}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}

      <motion.div
        className="container mx-auto px-6 relative z-10 pt-28 pb-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">
                Currently at{" "}
                <span className="text-foreground font-medium">Deloitte</span> · Open to
                collaborations
              </span>
            </motion.div>

            {/* Heading — staggered word reveal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="block">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block text-gradient relative"
              >
                Cloud Engineer
                {/* Gradient sweep line */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-medium mt-2"
              >
                & Security Specialist
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            >
              From initial architecture and IaC-led deployments to large-scale migrations and
              disaster recovery, I build resilient cloud ecosystems. Expert in AWS and Azure,
              ensuring every workload is secure, automated, and ready for the next chapter
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border px-8 h-12 text-sm font-semibold"
              >
                <a href="#projects">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Portfolio
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary hover:border-primary/30 h-12 px-8 text-sm transition-all duration-300"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-8 md:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile with orbit ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2 flex justify-center lg:justify-center"
          >
            <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 md:-inset-10 rounded-full border border-dashed border-primary/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 md:-inset-20 rounded-full border border-primary/[0.07]"
              />

              {/* Orbiting icons */}
              {orbitIcons.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="absolute -inset-8 md:-inset-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -item.delay }}
                >
                  <motion.div
                    className="absolute glass-card rounded-xl p-2.5 flex items-center gap-2"
                    style={{
                      top: i % 2 === 0 ? "-8px" : "auto",
                      bottom: i % 2 === 1 ? "-8px" : "auto",
                      left: i < 2 ? (i === 0 ? "50%" : "auto") : i === 2 ? "50%" : "auto",
                      right: i === 1 || i === 3 ? "0" : "auto",
                      transform: i === 0 || i === 2 ? "translateX(-50%)" : "none",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -item.delay }}
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-mono text-muted-foreground hidden md:inline">
                      {item.label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Profile image */}
              <div className="absolute inset-3 md:inset-4 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
                <img src={profilePhoto} alt="Akash Shirsekar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator with glow pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors relative"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
            <motion.span
              className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
