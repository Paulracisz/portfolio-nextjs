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
          className="flex flex-row items-start relative px-0 mb-0 pb-5 fade scroll-pr-6"
          id="nav"
        >
          <div className="font-medium flex flex-row md-0 space-x-0 font-sans text-[#129490] bg-white rounded">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:bg-[#FFFDD0] hover:text-[#00674F] flex align-middle relative py-1 px-2 m-0"
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
