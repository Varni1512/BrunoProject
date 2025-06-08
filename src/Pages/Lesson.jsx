import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import lesson1 from "../assets/lesson1.png";
import lesson2 from "../assets/lesson2.png";
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
    title: "30’ Free Initial Consultation with Bruno",
    content: (
      <>
        <p>
          Join a free 30’ call with Bruno to discuss your goals and needs to
          succeed on your Spanish journey, and have your first experience with
          Bruno’s lessons. What it includes:
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
        <button className="mt-4 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition">
          Book a Free Call
        </button>
      </>
    ),
  },
  {
    id: "private",
    title: "50/80' Private Lesson with Bruno",
    content: (
      <p>
        Take a step towards your goal: arrange a private lesson with Bruno
        tailored specifically to your needs.
      </p>
    ),
  },
  {
    id: "group",
    title: "50/85' Group Lesson with Bruno",
    content: (
      <p>
        If you gathered a group of Spanish learners, here's where you guys can
        boost your progress together.
      </p>
    ),
  },
  {
    id: "followup",
    title: "Follow-Up Sessions",
    content: (
      <p>
        Join a call with Bruno to discuss your current challenges, achieved
        milestones, and next steps.
      </p>
    ),
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
  // Case 1: Content is just a string
  if (typeof content === 'string') return content;

  // Case 2: Content is a <p> or other element with children
  const children = content?.props?.children;

  if (typeof children === 'string') return children;

  if (Array.isArray(children)) {
    // Look for the first text inside <p> or similar
    for (let child of children) {
      if (typeof child === 'string') {
        return child;
      } else if (
        child?.props?.children &&
        typeof child.props.children === 'string'
      ) {
        return child.props.children;
      } else if (
        Array.isArray(child?.props?.children)
      ) {
        const nested = child.props.children.find(
          (c) => typeof c === 'string'
        );
        if (nested) return nested;
      }
    }
  }

  return 'Preview not available';
};


  return (
    <div
      className={`w-[423px] rounded-[15px] overflow-hidden transition-all duration-300 ${
        expanded ? "bg-[#7D4C70] border-r-[5px] border-[#B0859E]" : "bg-black"
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full px-6 py-2 text-left flex justify-between items-center transition-colors"
      >
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <ChevronDown
          className={`w-5 h-5 shrink-0 ml-4 text-white transform transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div className="px-6 pb-6 text-[#FBE5D8] text-sm">
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
      <div className="text-center py-16 px-6">
        <h1 className="font-afacad font-bold text-[70px] leading-[75px] mb-6">
          Lessons
        </h1>
        <p className="text-[25px] max-w-7xl mx-auto font-afacad leading-relaxed text-[#FBE5D8]">
          Just like any great journey, you need more than a map; you need an
          experienced guide...
        </p>
      </div>

      {/* Lesson Includes */}
      <div className="w-[1485px] h-[918px] rounded-[55px] bg-[rgba(83,41,89,0.42)] mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          <div className="flex gap-8">
            <img
              src={lesson1}
              alt="Lesson 1"
              className="w-[282px] h-[636px] rounded-[20px] object-cover mt-6"
            />
            <img
              src={lesson2}
              alt="Lesson 2"
              className="w-[282px] h-[636px] rounded-[20px] object-cover mt-52"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-afacad font-bold text-[70px] leading-[75px] mb-8 whitespace-nowrap">
              What all lessons include:
            </h2>
            <ul className="font-afacad font-normal text-[30px] text-[#FBE5D8] space-y-4">
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
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">
        {/* Group Students */}
        <div className="w-[652px] h-[681px] bg-black rounded-[15px] p-[34px_39px]">
          <div className="text-center mb-8">
            <img
              src={student}
              alt="Students"
              className="w-[188px] h-[188px] p-[23px] mx-auto mb-4"
            />
            <h3 className="font-afacad font-bold text-[50px] mb-2">
              Group Students
            </h3>
            <p className="font-afacad text-[38px] text-[#DFB6B2]">
              Choose one option:
            </p>
          </div>
          <div className="space-y-[24px]">
            {groupOptions.map((option, idx) => (
              <div
                key={idx}
                className="w-[574px] h-[90px] bg-[#180018] rounded-[15px] p-[10px] text-[#FBE5D8] font-afacad text-[30px] leading-[100%]"
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
        <div className="space-y-6 ml-8">
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
        className="max-w-7xl mx-auto px-6 mb-16 bg-black rounded-lg p-8"
        style={{ width: 1385, height: 665 }}
      >
        <h3 className="text-4xl font-bold text-center mb-12">
          General Follow-Up scheduling
        </h3>
        <div
          className="grid md:grid-cols-3 gap-8 text-center text-[#FBE5D8]"
          style={{ fontFamily: "Afacad", fontSize: "22px" }}
        >
          {followUpItems.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.img}
                alt="Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              {item.subtitle && (
                <p className="text-lg font-semibold">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-[50px] font-bold text-center mt-16 mb-8">
          Key Policies
        </h3>
        <div className="rounded-lg p-8 bg-black/30">
          <ul className="space-y-4 text-[30px] text-[#FBE5D8] pl-12">
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
