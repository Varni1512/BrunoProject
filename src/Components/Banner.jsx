import React from "react";

export default function Banner() {
  return (
    <section className="py-8 overflow-hidden bg-[#19001c]">
      <div className="marquee flex gap-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="marquee-item inline-flex items-center gap-4 min-w-max select-none"
          >
            <div className="text-white text-4xl mt-2 -ml-2">✦</div>

            <h1 className="font-afacad text-white text-7xl font-bold">
              New{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                Language
              </span>
            </h1>
            <div className="text-white text-4xl mt-2">✦</div>
            <h1 className="font-afacad text-white text-7xl font-bold">
              New{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                Opportunities
              </span>
            </h1>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 24s linear infinite;
          user-select: none;
          white-space: nowrap;
        }
        .marquee-item {
          flex-shrink: 0;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-52%));
          }
        }
      `}</style>
    </section>
  );
}