"use client";

import { useCallback } from "react";

export default function ScrollTopButton() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="flex content-center justify-center">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
        flex items-center justify-center
        w-10 h-10 rounded-full
        bg-[#FFFFFF]              
        border-1
        border-black
        text-[#00674F]
        m-5
        hover:bg-[#D4AF37]         
        transition-colors
        group                     
        hover:cursor-pointer
      "
      >
        <svg
          width="125px"
          height="125px"
          viewBox="-4.8 -4.8 33.60 33.60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#00674F"
          stroke-width="0.24000000000000005"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </section>
  );
}
