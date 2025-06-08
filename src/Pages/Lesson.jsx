import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import lesson1 from "../assets/lesson1.png";
import lesson2 from "../assets/lesson2.png";
import lesson3 from "../assets/lesson3.png";
import lesson4 from "../assets/lesson4.png";
import student from "../assets/student.png";
import clockImage from "../assets/clock.png";
import clock from "../assets/time.png";
import handImage from "../assets/hand.png";
import WebinarSection from "./webinar";

const lessonFeatures = [
  "All the elements in detail that will be covered during your path to success: your personal map.",
  'Understanding the "pillars" of Trading. I will make sure that your bricks that make the basis of the language are set up in a solid way.',
  "Personalized material targeting your needs and level.",
  "Homework to practise what we cover during each lesson.",
  "Constant reviewing and recap, to make sure you're integrating every session.",
  "Application of everything we learn in real conversational practice.",
  "Monthly 1hr coffee break with Bruno and the rest of the community.",
  "Every package includes free access to our Bruno and community WhatsApp group.",
];

const groupOptions = [
  {
    label: "Option A:",
    description:
      "Individual 30-min sessions for each group member - (every 3 months): $15/14€",
  },
  {
    label: "Option B:",
    description: "Group 50-min session for the entire group - $30/27€",
  },
];

const lessonCards = [
  {
    id: "consultation",
    title: "30' Free Initial Consultation with Bruno",
    content: (
      <>
        <p>
          Join a free 30' call with Bruno to discuss your goals and needs to
          succeed on your Spanish journey, and have your first experience with
          Bruno's lessons. What it includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            General discussion of goals, reasons to learn, and previous
            experiences with the language, if any.
          </li>
          <li>
            If previous knowledge, placement test to assess strengths and
            weaknesses.
          </li>
          <li>
            Explanation of the method I follow, and general immersion in a real
            lesson with me.
          </li>
        </ul>
        <button className="mt-4 w-full text-white py-2 rounded-md font-semibold animate-border">
          <span>Book a Free Call</span>
        </button>
      </>
    ),
  },
  {
    id: "private",
    title: "50/80' Private Lesson with Bruno",
    content: (
      <>
        <p>
          Take a step towards your goal: arrange a private lesson with Bruno tailored specifically to your needs.
        </p>

        <div className="mt-6 mb-8 rounded-lg overflow-hidden">
          <img
            src={lesson3}
            alt="Bruno video call lesson"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">50' lesson: $30/27€ per individual session</h3>

          <div>
            <p><strong>4-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $120/108€ —→ Package: $110/99€</li>
              <li>Discount: 8% (save $10/9€)</li>
            </ul>
          </div>

          <div>
            <p><strong>8-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $240/216€ —→ Package: $216/195€</li>
              <li>Discount: 10% (save $24/21€)</li>
            </ul>
          </div>

          <div>
            <p><strong>12-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $360/324€ —→ Package: $315/284€</li>
              <li>Discount: 12.5% (save $45/41€)</li>
            </ul>
          </div>

          <div>
            <p><strong>20-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $600/540€ —→ Package: $510/459€</li>
              <li>Discount: 15% (save $90/81€)</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-6">80' lesson: $45/40€ per individual session</h3>

          <div>
            <p><strong>4-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $180/160€ —→ Package: $166/149€</li>
              <li>Discount: 8% (save $14/13€)</li>
            </ul>
          </div>

          <div>
            <p><strong>8-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $360/320€ —→ Package: $324/292€</li>
              <li>Discount: 10% (save $36/28€)</li>
            </ul>
          </div>

          <div>
            <p><strong>12-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $540/480€ —→ Package: $473/426€</li>
              <li>Discount: 12.5% (save $67/60€)</li>
            </ul>
          </div>

          <div>
            <p><strong>20-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $900/800€ —→ Package: $765/689€</li>
              <li>Discount: 15% (save $135/122€)</li>
            </ul>
          </div>
        </div>
        <button className="mt-4 w-full text-white py-2 rounded-md font-semibold animate-border">
          <span>Book a Free Call</span>
        </button>
      </>
    )
  },
  {
    id: "group",
    title: "50/85' Group Lesson with Bruno",
    content: (
      <>
        <p>
          If you gathered a group of Spanish learners, here's where you guys can boost your progress:
        </p>

        <div className="mt-6 mb-8 rounded-lg overflow-hidden">
          <img
            src={lesson4}
            alt="Bruno video call lesson"
            className="w-full h-auto object-cover rounded-lg"
          />

        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">50' lesson: $30/27€ per individual session</h3>

          <div>
            <p><strong>4-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $120/108€ —→ Package: $110/99€</li>
              <li>Discount: 8% (save $10/9€)</li>
            </ul>
          </div>

          <div>
            <p><strong>8-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $240/216€ —→ Package: $216/195€</li>
              <li>Discount: 10% (save $24/21€)</li>
            </ul>
          </div>

          <div>
            <p><strong>12-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $360/324€ —→ Package: $315/284€</li>
              <li>Discount: 12.5% (save $45/41€)</li>
            </ul>
          </div>

          <div>
            <p><strong>20-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $600/540€ —→ Package: $510/459€</li>
              <li>Discount: 15% (save $90/81€)</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-6">80' lesson: $45/40€ per individual session</h3>

          <div>
            <p><strong>4-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $180/160€ —→ Package: $166/149€</li>
              <li>Discount: 8% (save $14/13€)</li>
            </ul>
          </div>

          <div>
            <p><strong>8-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $360/320€ —→ Package: $324/292€</li>
              <li>Discount: 10% (save $36/28€)</li>
            </ul>
          </div>

          <div>
            <p><strong>12-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $540/480€ —→ Package: $473/426€</li>
              <li>Discount: 12.5% (save $67/60€)</li>
            </ul>
          </div>

          <div>
            <p><strong>20-Lesson Package</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular: $900/800€ —→ Package: $765/689€</li>
              <li>Discount: 15% (save $135/122€)</li>
            </ul>
          </div>
        </div>
        <button className="mt-4 w-full text-white py-2 rounded-md font-semibold animate-border">
          <span>Book a Free Call</span>
        </button>
      </>
    )
  },
  {
    id: "followup",
    title: "Follow-Up Sessions",
    content: (
      <>
        <p>
          Join a call with Bruno to discuss your current challenges, achieved milestones, and future goals with the language, and receive personalized recommendations. These sessions include:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Advanced NLP and coaching techniques to let go of any blockages that are impeding your progress.
          </li>
          <li>
            Targetting any element that needs a boost and further revision.
          </li>
          <li>
            General assessment of how far you are from your language goal.
          </li>
        </ul>

        <h3 className="mt-6 font-semibold">Session Types & Pricing</h3>

        <h4 className="mt-2 font-medium text-gray-300">Individual Students</h4>

        <p className="mt-1">• 30-min Follow-Up Individual Session: $15/14€</p>

        <button className="mt-4 w-full text-white py-2 rounded-md font-semibold animate-border">
          <span>Book a Free Call</span>
        </button>
      </>
    )

  },
];

const followUpItems = [
  {
    img: clockImage,
    title: "One Saturday of each month",
    subtitle: "(normally, the 1st)",
  },
  { img: clock, title: "8:30 AM - 1:00 PM" },
  {
    img: handImage,
    title: "Mandatory advance reservation",
    subtitle: "(minimum 12 hours)",
  },
];

const policies = [
  "Groups cannot combine individual + group sessions for free quarterly followups",
  "All sessions require 12-hour advance booking minimum",
  "Free sessions are limited to every 3 months for package holders",
];

const LessonCard = ({ id, title, content, expanded, onToggle }) => {
  const getPlainPreview = () => {
    if (typeof content === "string") return content;

    const children = content?.props?.children;
    if (typeof children === "string") return children;

    if (Array.isArray(children)) {
      for (let child of children) {
        if (typeof child === "string") return child;
        if (
          child?.props?.children &&
          typeof child.props.children === "string"
        ) {
          return child.props.children;
        }
        if (Array.isArray(child?.props?.children)) {
          const nested = child.props.children.find(
            (c) => typeof c === "string"
          );
          if (nested) return nested;
        }
      }
    }

    return "Preview not available";
  };

  return (
    <div
      className={`rounded-[15px] overflow-hidden transition-all duration-300  flex flex-col justify-start  ${expanded ? "bg-[#7D4C70] border-r-[5px] border-[#B0859E]" : "bg-black"
        }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center transition-colors "
      >
        <h4 className="text-lg sm:text-2xl font-bold text-white">{title}</h4>
        <ChevronDown
          className={`w-6 h-6 shrink-0 ml-4 text-white transform transition-transform duration-300 ${expanded ? "rotate-180" : ""
            }`}
        />
      </button>

      <div className="px-4 sm:px-8 pb-8 text-[#FBE5D8] text-sm sm:text-[18px] leading-relaxed flex-1">
        {expanded ? (
          <div className="border-t border-[#B0859E] pt-4 space-y-4">
            {content}
          </div>
        ) : (
          <div className="truncate text-ellipsis overflow-hidden whitespace-nowrap">
            {getPlainPreview()}
          </div>
        )}
      </div>
    </div>
  );
};

function LessonsPage() {
  const [expandedSection, setExpandedSection] = useState(null);
  const toggleSection = (section) =>
    setExpandedSection(expandedSection === section ? null : section);

  return (
    <div className="bg-[#180018] min-h-screen text-white pt-12">
      {/* Hero */}
      <div className="text-center py-8 sm:py-16 px-6">
        <h1 className="font-afacad font-bold text-[40px] sm:text-[70px] leading-[45px] sm:leading-[75px] mb-6">
          Lessons
        </h1>
        <p className="text-[18px] sm:text-[25px] max-w-7xl mx-auto font-afacad leading-relaxed text-[#FBE5D8]">
          Just like any great journey, you need more than a map: you need an experienced guide who knows the terrain, celebrates your milestones, and helps you navigate the challenging paths. That's where I come in.
        </p>
      </div>

      {/* Lesson Includes */}
      <div className="w-full max-w-[1485px] min-h-[400px] sm:h-[918px] rounded-[25px] sm:rounded-[55px] bg-[rgba(83,41,89,0.42)] mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center max-w-7xl mx-auto pt-6">
          <div className="flex gap-4 sm:gap-8 order-2 lg:order-1">
            <img
              src={lesson1}
              alt="Lesson 1"
              className="w-[140px] sm:w-[282px] h-[300px] sm:h-[636px] rounded-[20px] object-cover mt-3 sm:mt-6"
            />
            <img
              src={lesson2}
              alt="Lesson 2"
              className="w-[140px] sm:w-[282px] h-[300px] sm:h-[636px] rounded-[20px] object-cover mt-16 sm:mt-52"
            />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="font-afacad font-bold text-2xl sm:text-5xl leading-[30px] sm:leading-[75px] mb-4 sm:mb-8 lg:whitespace-nowrap">
              What all lessons include:
            </h2>
            <ul className="font-afacad font-normal text-sm sm:text-2xl text-[#FBE5D8] space-y-2 sm:space-y-4">
              {lessonFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Group Students & Lesson Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16">
        {/* Group Students */}
        <div className="bg-black rounded-[15px] p-4 sm:p-8 flex flex-col justify-start order-1 lg:order-1">
          <div className="text-center mb-4">
            <img
              src={student}
              alt="Students"
              className="w-20 sm:w-24 lg:w-40 h-20 sm:h-24 lg:h-40 p-2 sm:p-3 lg:p-6 mx-auto"
            />
            <h3 className="font-afacad font-bold text-xl sm:text-2xl lg:text-5xl">Group Students</h3>
            <p className="font-afacad text-lg sm:text-xl lg:text-4xl text-[#DFB6B2]">
              Choose one option:
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {groupOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-[#180018] rounded-[15px] p-3 sm:p-4 text-[#FBE5D8] font-afacad text-xs sm:text-sm lg:text-[30px] leading-[120%] sm:leading-[100%]"
              >
                <span className="text-[#532959] font-semibold">
                  {option.label}
                </span>{" "}
                {option.description}
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
          {lessonCards.map((card) => (
            <LessonCard
              key={card.id}
              {...card}
              expanded={expandedSection === card.id}
              onToggle={toggleSection}
            />
          ))}
        </div>
      </div>

      {/* General Follow-Up Section */}
      <div
        className="max-w-7xl mx-auto px-6 mb-16 bg-black rounded-lg p-4 sm:p-8"
        style={{ maxWidth: 1385, minHeight: 400 }}
      >
        <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          General Follow-Up scheduling
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center text-[#FBE5D8]"
          style={{ fontFamily: "Afacad", fontSize: "16px" }}
        >
          {followUpItems.map((item, idx) => (
            <div key={idx} className="sm:text-[22px]">
              <img
                src={item.img}
                alt="Icon"
                className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-4"
              />
              <h4 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h4>
              {item.subtitle && (
                <p className="text-base sm:text-lg font-semibold">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-2xl sm:text-[50px] font-bold text-center mt-8 sm:mt-16 mb-4 sm:mb-8">
          Key Policies
        </h3>
        <div className="rounded-lg p-4 sm:p-8 bg-black/30">
          <ul className="space-y-2 sm:space-y-4 text-sm sm:text-[30px] text-[#FBE5D8] pl-6 sm:pl-12">
            {policies.map((policy, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-3">•</span>
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <WebinarSection />
    </div>
  );
}

export default LessonsPage;
