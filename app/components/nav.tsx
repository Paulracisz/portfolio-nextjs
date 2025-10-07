'use client';                  

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': { name: 'work' },
  '/about': { name: 'about' },
  '/blog': { name: 'blog' },
  '/contact': { name: 'contact' },
};

export function Navbar() {
  const pathname = usePathname(); 
  console.log("pathname", pathname)

  return (
    <aside className="tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 mb-0 pb-5 fade scroll-pr-6"
          id="nav"
        >
          <div className="font-medium flex flex-row md-0 space-x-0 font-sans bg-white rounded">
            {Object.entries(navItems).map(([path, { name }]) => {
              let isActive = pathname === path;  
              if (pathname.includes("blog")) {
                // handle subdomains (/blog/BBB)
                if (path.includes("blog")) {
                  isActive = true;
                }
              }
              
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    transition-all
                    hover:bg-[#FFFDD0] hover:text-[#D4AF37]
                    flex items-center
                    py-1 px-2 m-0
                    rounded-sm
                    text-[#00674F]
                    ${isActive ? 'bg-[#FFFDD0]' : 'bg-white'}
                  `}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}