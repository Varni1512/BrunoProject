import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import lesson1 from "../assets/lesson1.png";
import lesson2 from "../assets/lesson2.png";
import student from "../assets/student.png";
import clockImage from '../assets/clock.png';
import clock from '../assets/time.png';
import handImage from '../assets/hand.png';
import WebinarSection from './webinar';



function LessonsPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <>
            <div className="bg-[#180018] min-h-screen text-white pt-12">
                {/* Hero Section */}
                <div className="text-center py-16 px-6">
                    <h1
                        className="font-afacad font-bold text-[70px] leading-[75px] tracking-normal text-center text-white mb-6"
                    >
                        Lessons
                    </h1>

                    <p className="text-[25px] max-w-7xl mx-auto font-afacad leading-relaxed text-[#FBE5D8]">
                        Just like any great journey, you need more than a map; you need an experienced guide who knows the terrain, celebrates your milestones,
                        and helps you navigate the challenging paths. That's where I come in.
                    </p>
                </div>

                {/* What lessons include section */}
                <div className="w-[1485px] h-[918px] rounded-[55px] bg-[rgba(83,41,89,0.42)] mx-auto px-6 mb-16">
                    <div className="max-w-7xl mx-auto px-6 mb-16">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">

                            {/* Combined Images */}
                            <div className="flex gap-8">
                                {/* First Image */}
                                <div className="w-[282px] h-[636px] rounded-[20px] overflow-hidden mt-6">
                                    <img
                                        src={lesson1}
                                        alt="Combined image 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Second Image with margin from top */}
                                <div className="w-[282px] h-[636px] rounded-[20px] overflow-hidden mt-52">
                                    <img
                                        src={lesson2}
                                        alt="Combined image 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>


                            {/* Content Section */}
                            <div className="flex-1">
                                <h2 className="font-afacad font-bold text-[70px] leading-[75px] mb-8 whitespace-nowrap">
                                    What all lessons include:
                                </h2>

                                <ul className="font-afacad font-normal text-[30px] leading-[1] tracking-[0] text-[#FBE5D8] space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        All the elements in detail that will be covered during your path to success: your personal map.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Understanding the "pillars" of Trading. I will make sure that your bricks that make the basis of the language are set up in a solid way.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Personalized material targeting your needs and level.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Homework to practise what we cover during each lesson.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Constant reviewing and recap, to make sure you're integrating every session.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Application of everything we learn in real conversational practice.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Monthly 1hr coffee break with Bruno and the rest of the community.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FBE5D8] mr-3">•</span>
                                        Every package includes free access to our Bruno and community WhatsApp group.
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>



                {/* Two column layout */}
                <div className="max-w-7xl  mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Group Students Section */}
                    <div className="w-[652px] h-[681px] bg-black rounded-[15px] pt-[34px] pr-[39px] pb-[34px] pl-[39px]">
                        <div className="text-center mb-8">
                            <img
                                src={student}
                                alt="Students"
                                className="w-[188px] h-[188px] p-[23px] mx-auto mb-4"
                            />

                            <h3 className="font-afacad font-bold text-[50px] mb-2 text-white">Group Students</h3>
                            <p className="font-afacad text-[38px] text-[#DFB6B2]">Choose one option:</p>
                        </div>

                        <div className="space-y-[24px]">
                            <div className="w-[574px] h-[90px] bg-[#180018] rounded-[15px] p-[10px] text-[#FBE5D8] font-afacad text-[30px] leading-[100%]">
                                <span className="text-[#532959] font-semibold">Option A:</span> Individual 30-min sessions for each group member - (every 3 months): $15/14€
                            </div>
                            <div className="w-[574px] h-[90px] bg-[#180018] rounded-[15px] p-[10px] text-[#FBE5D8] font-afacad font-bold text-[30px] leading-[100%]">
                                <span className="text-[#532959] font-semibold">Option B:</span> Group 50-min session for the entire group - $30/27€
                            </div>
                        </div>

                    </div>


                    {/* Lesson Options */}
                    <div className="space-y-6 ml-8">
                        {/* === Card Template === */}
                        {[
                            {
                                id: 'consultation',
                                title: "30’ Free Initial Consultation with Bruno",
                                content: (
                                    <>
                                        <p>
                                            Join a free 30’ call with Bruno to discuss your goals and needs to succeed on your Spanish journey, and have your first experience with Bruno’s lessons. What it includes:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>General discussion of goals, reasons to learn, and previous experiences with the language, if any.</li>
                                            <li>If previous knowledge, placement test to assess strengths and weaknesses.</li>
                                            <li>Explanation of the method I follow, and general immersion in a real lesson with me.</li>
                                        </ul>
                                        <button className="mt-4 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition">
                                            Book a Free Call
                                        </button>
                                    </>
                                )
                            },
                            {
                                id: 'private',
                                title: "50/80' Private Lesson with Bruno",
                                content: (
                                    <p>
                                        Take a step towards your goal: arrange a private lesson with Bruno tailored specifically to your needs.
                                    </p>
                                )
                            },
                            {
                                id: 'group',
                                title: "50/85' Group Lesson with Bruno",
                                content: (
                                    <p>
                                        If you gathered a group of Spanish learners, here's where you guys can boost your progress together.
                                    </p>
                                )
                            },
                            {
                                id: 'followup',
                                title: "Follow-Up Sessions",
                                content: (
                                    <p>
                                        Join a call with Bruno to discuss your current challenges, achieved milestones, and next steps.
                                    </p>
                                )
                            }
                        ].map(({ id, title, content }) => (
                            <div
                                key={id}
                                className={`w-[423px] rounded-[15px] overflow-hidden transition-all duration-300 ${expandedSection === id ? 'bg-[#7D4C70] border-r-[5px] border-[#B0859E]' : 'bg-black'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleSection(id)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors"
                                >
                                    <h4 className="text-lg font-bold text-white">{title}</h4>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 ml-4 text-white transform transition-transform duration-300 ${expandedSection === id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Content visible only when expanded */}
                                {expandedSection === id && (
                                    <div className="px-6 pt-4 pb-6 text-[#FBE5D8] text-sm space-y-4 border-t border-[#B0859E]">
                                        {content}
                                    </div>
                                )}
                            </div>

                        ))}
                    </div>

                </div>

                {/* General Follow-Up Scheduling */}
                <div className="max-w-7xl mx-auto px-6 mb-16 bg-black rounded-lg p-8" style={{ width: 1385, height: 665, borderRadius: 15 }}>
                    {/* General Follow-Up scheduling */}
                    <h3 className="text-4xl font-bold text-center mb-12 text-white">
                        General Follow-Up scheduling
                    </h3>
                    <div
                        className="grid md:grid-cols-3 gap-8 text-center text-[#FBE5D8]"
                        style={{
                            fontFamily: 'Afacad, sans-serif',
                            fontWeight: 400,
                            fontSize: '22px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <img src={clockImage} alt="Clock" className="w-12 h-12 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">One Saturday of each month</h4>
                            <p className="text-lg font-semibold mb-2">(normally, the 1st)</p>
                        </div>
                        <div>
                            <img src={clock} alt="Clock" className="w-12 h-12 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">8:30 AM - 1:00 PM</h4>
                        </div>
                        <div>
                            <img src={handImage} alt="Clock" className="w-12 h-12 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Mandatory advance reservation</h4>
                            <p className="text-lg font-semibold mb-2">(minimum 12 hours)</p>
                        </div>
                    </div>

                    {/* Key Policies */}
                    <h3
                        className="text-[50px] font-bold text-center mt-16 mb-8 text-white"
                        style={{ fontFamily: 'Afacad, sans-serif' }}
                    >
                        Key Policies
                    </h3>
                    <div className="rounded-lg p-8 bg-black/30">
                        <ul className="space-y-4 text-[30px] text-[#FBE5D8] pl-12" style={{ fontFamily: 'Afacad, sans-serif' }}>
                            <li className="flex items-start">
                                <span className="text-[#FBE5D8] mr-3">•</span>
                                Groups cannot combine individual + group sessions for free quarterly followups
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#FBE5D8] mr-3">•</span>
                                All sessions require 12-hour advance booking minimum
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#FBE5D8] mr-3">•</span>
                                Free sessions are limited to every 3 months for package holders
                            </li>
                        </ul>
                    </div>
                </div>
                <WebinarSection />
            </div>

        </>
    );
}

export default LessonsPage;
