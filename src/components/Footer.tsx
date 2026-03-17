const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akash Shirsekar. All rights reserved.
        </p>
        <p className="text-xs font-mono text-muted-foreground">Built with passion for cloud

        </p>
      </div>
    </footer>);

};

export default Footer;