import Link from 'next/link'

const navItems = {
  '/': {
    name: 'work',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/contact': {
    name: 'contact',
  }
}

export function Navbar() {
  return (
    <aside className="tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="font-medium mb-5 flex flex-row space-x-0 font-sans text-[#1ABC9C] bg-stone-100 rounded">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="border-r-2 border-[#2C3E50] transition-all hover:bg-[#2C3E50] hover:text-[#BDC3C7] flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
