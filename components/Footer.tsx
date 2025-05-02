"use client";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full bg-primary animate-pulse`} />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MJ Portfolio
          </p>
        </div>

        <p className="text-xs text-muted-foreground text-center md:text-right">
          Designed & Built with <span className="text-primary">♥</span> by MJ
          <br />
          <span className="text-foreground">
            Using React, Next.js, Tailwind CSS & Framer Motion
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
