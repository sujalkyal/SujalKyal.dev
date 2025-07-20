import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const FooterLinks = [
  {
    title: "X",
    url: "https://x.com/Sujal_kyal",
  },
  {
    title: "GitHub",
    url: "https://github.com/sujalkyal",
  },
  {
    title: "LinkedIn",
    url: "http://linkedin.com/in/sujal-kyal-712b9024b",
  },
  {
    title: "LeetCode",
    url: "https://leetcode.com/u/sujalkyal2704/",
  },
];

export const Footer = () => {
  return <footer className="relative z-0 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none select-none"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">&copy; 2025. All rights reserved.</div>
        <p className="text-white/40 text-center md:text-left text-xs">
          Open for freelance, internships, and collaborative projects.
        </p>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {FooterLinks.map((link) => (
            <a href={link.url} key={link.title} className="inline-flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
            <span className="font-semibold">{link.title}</span>
            <ArrowUpRightIcon className="size-4" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>;
};
