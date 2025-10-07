import Image from "next/image";
import { ReactNode } from "react";

export interface TimelineItem {
  /** Organization name – shown next to the icon */
  organization: string;
  /** Optional icon – can be an <Image>, <svg>, or any React node */
  icon?: ReactNode;
  /** Job title */
  title: string;
  /** Time period, e.g. “Jan 2022 – Present” */
  dates: string;
  /** Short description or bullet list */
  description: string | string[];
}

/**
 * Props
 *   items – array of timeline entries
 *   lineColor – Tailwind colour class for the vertical line
 */
export default function Timeline({
  items,
}: {
  items: TimelineItem[];
  lineColor?: string;
}) {
  return (
    <div className="relative pl-8 mb-[30%]">
      {/* Vertical line */}
      <div
        className={`absolute left-4 top-0 h-full w-0.5 bg-[#D4AF37]`}
        aria-hidden="true"
      />

      {/* Items */}
      <ul className="space-y-10">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            {/* Dot + optional icon */}
            <div className="relative flex flex-col items-center mr-6 flex-shrink-0">
              {/* Dot */}
              <span className="block w-4 h-4 rounded-full bg-white border-2" />
              {/* Icon container (optional) */}
              {item.icon && (
                <div className="-mt-2 mb-2 flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  {item.icon}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-0.5">
              <h3 className="text-lg text-black font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-black font-semibold">{item.dates}</p>
              <p className="mt-1 font-medium text-black">{item.organization}</p>

              {/* Description – support string or array of bullets */}
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside mt-2 space-y-1 text-black font-medium">
                  {item.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}