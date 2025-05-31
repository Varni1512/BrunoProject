import React from "react";
export default function FAQ() {
  return (
    <section className="py-8 md:py-16">
      <div className="main-container">
        <h2 className=" text-3xl md:text-5xl font-bold text-white font-afacad text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              question: "Why should I learn Spanish?",
              answer:
                "Spanish is the second most spoken language in the world and can open up opportunities for travel, work, and cultural understanding.",
            },
            {
              question: "How do I start learning Spanish on this platform?",
              answer:
                "Simply create an account, choose your level, and begin with our introductory lessons.",
            },
            {
              question: "How long does it take to become fluent in Spanish?",
              answer:
                "With regular practice, most students reach conversational fluency in 6-12 months.",
            },
            {
              question: "What resources are available for free?",
              answer:
                "We offer free introductory lessons, vocabulary builders, and cultural guides.",
            },
            {
              question: "Do I need any prior knowledge of Spanish to enroll?",
              answer:
                "No, we offer courses for complete beginners through advanced learners.",
            },
          ].map((item, index) => (
            <details key={index} className="bg-[#391e3c61] rounded-lg group">
              <summary className="px-6 py-4 text-white/60 list-none cursor-pointer flex justify-between items-center">
                <span className="font-afacad text-base md:text-lg primary-txt-color">{item.question}</span>
                <div className="relative w-3 h-3 ml-2">
                  {/* Plus/Minus icon */}
                  <div className="absolute inset-0 primary-txt-color">
                    {/* Horizontal line */}
                    <div className="absolute top-1/2 left-0 w-3 h-px bg-white transform -translate-y-1/2"></div>
                    {/* Vertical line - disappears when open */}
                    <div className="absolute left-1/2 top-0 h-3 w-px bg-white transform -translate-x-1/2 transition-all duration-200 group-open:opacity-0"></div>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-4 pt-0 primary-txt-color text-base md:text-lg font-afacad">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
