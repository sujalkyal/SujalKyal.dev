import { useEffect, useState } from "react";

const sectionIds = ["home", "projects", "about", "contact"];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.closest("section")?.id)
        .filter(Boolean) as string[];

        if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0]); // You can prioritize first visible
        } else {
        setActiveSection(null); // No section in view — reset highlight
        }
      },
      {threshold: 0.1}
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      const sentinel = section?.querySelector("[data-sentinel]");
      if (sentinel) {
        observer.observe(sentinel);
      }
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, setActiveSection };
};
