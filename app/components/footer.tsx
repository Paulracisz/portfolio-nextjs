import ScrollTopButton from "./ScrollTopButton"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-[#1ABC9C] md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-[#D4AF37]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/paul-racisz-745b11196/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-[#D4AF37]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Paulracisz"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>        
                <li>
          <a
            className="flex items-center transition-all hover:text-[#D4AF37]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/e/2PACX-1vS8ZW48dOMonFySjtV7msteRsCeBmps_mVs5LrtEcoWb9pRKSzuM_IFKTM8Nuq3YCgvWlLVRAc5Fj1y/pub"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Resume</p>
          </a>
        </li>
                <li>
          <a
            className="flex items-center transition-all hover:text-[#D4AF37]"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">RSS</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-[#2C3E50]">
        © {new Date().getFullYear()} Paul Racisz
      </p>
    </footer>
  )

  // current resume link: https://docs.google.com/document/d/e/2PACX-1vS8ZW48dOMonFySjtV7msteRsCeBmps_mVs5LrtEcoWb9pRKSzuM_IFKTM8Nuq3YCgvWlLVRAc5Fj1y/pub
}