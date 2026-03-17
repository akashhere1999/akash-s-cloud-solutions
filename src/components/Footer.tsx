import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border/30 py-8"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akash Shirsekar. All rights reserved.
        </p>
        <p className="text-xs font-mono text-muted-foreground">Built with passion for cloud</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
