export const Footer = () => {
  return (
    <footer className="footer-panel mt-10 relative px-6 md:px-8 py-10 text-center overflow-hidden section-bridge">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <p className="text-sm md:text-base tracking-wide text-foreground/80 dark:text-foreground/70">
          <span className="footer-accent">&copy; {new Date().getFullYear()}</span>{' '}
          <span className="footer-owner">Vikrant Kawadkar</span>.{' '}
          <span className="footer-rights font-medium">All rights reserved.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-foreground/60 dark:text-foreground/50">
          <span>Crafted with React & Tailwind</span>
          <span className="hidden sm:inline">•</span>
          <span>Theme aware design</span>
          <span className="hidden sm:inline">•</span>
          <span>Deployed on modern edge platforms</span>
        </div>
      </div>
    </footer>
  );
};
