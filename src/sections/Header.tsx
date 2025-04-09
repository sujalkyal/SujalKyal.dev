'use client';

import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection'; // Adjust path accordingly

export const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => handleClick(id)}
            className={`nav-item ${
              activeSection === id
                ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
                : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
