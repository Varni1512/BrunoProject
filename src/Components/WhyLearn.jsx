import React from "react";

export default function WhyLearn() {
  return (
    <section className="w-full  md:py-16 px-4 max-w-7xl mx-auto">
      <h2 className="font-afacad text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
        Why Learn Spanish Online?
      </h2>

      <ul className="list-disc list-outside ml-8 md:mb-0 mb-8 space-y-6 text-base md:text-xl leading-relaxed text-[#FBE5D8] font-afacad">
        <li className="!list-item">
          If you're debating whether learning Spanish is worth it, consider
          this:{" "}
          <span className="font-semibold text-white">590 million people</span>{" "}
          speak it, making it the second most spoken language globally.
        </li>
        <li className="!list-item">
          Speaking Spanish can open doors to the global job market and enable
          communication with potential colleagues, clients, and customers —
          especially in{" "}
          <span className="text-white font-medium">
            North America, Latin America, and Europe
          </span>
          .
        </li>
        <li className="!list-item">
          Learning Spanish can also enrich your appreciation of diverse
          cultures, cinema, literature, and music — and help you form{" "}
          <span className="text-white font-medium">meaningful connections</span>{" "}
          while traveling.
        </li>
      </ul>
    </section>
  );
}
