import React, { useState } from 'react';
import { ChevronDown, Calendar, Clock, Users } from 'lucide-react';
import lesson1 from "../assets/lesson1.png";
import lesson2 from "../assets/lesson2.png";
import student from "../assets/student.png";



function LessonsPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
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
            <div className="max-w-6xl  mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">
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

                    <div className="space-y-[10px]">
                        <div className="w-[574px] h-[90px] bg-[#180018] rounded-[15px] p-[10px] text-[#FBE5D8] font-afacad text-[30px] leading-[100%]">
                            <span className="text-[#532959] font-semibold">Option A:</span> Individual 30-min sessions for each group member - (every 3 months): $15/14€
                        </div>
                        <div className="w-[574px] h-[90px] bg-[#180018] rounded-[15px] p-[10px] text-[#FBE5D8] font-afacad font-bold text-[30px] leading-[100%]">
                            <span className="text-[#532959] font-semibold">Option B:</span> Group 50-min session for the entire group - $30/27€
                        </div>
                    </div>

                </div>


                {/* Lesson Options */}
                <div className="space-y-4 ml-24">
                    {/* Free Consultation */}
                    <div className="w-[643px] bg-[#7D4C70] rounded-[15px] border-r-[5px] border-[#B0859E] overflow-hidden transition-all duration-300">
                        <button
                            onClick={() => toggleSection('consultation')}
                            className="w-full px-6 py-5 text-left flex justify-between items-center bg-black transition-colors"
                        >
                            <h4 className="text-lg font-bold text-white">30’ Free Initial Consultation with Bruno</h4>
                            <ChevronDown
                                className={`w-5 h-5 text-white transform transition-transform duration-300 ${expandedSection === 'consultation' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {expandedSection === 'consultation' && (
                            <div className="px-6 pb-6 text-[#FBE5D8] text-sm space-y-4">
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
                            </div>
                        )}
                    </div>


                    {/* Private Lesson */}
                    <div className="bg-black/30 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('private')}
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-black/20 transition-colors"
                        >
                            <div>
                                <h4 className="text-xl font-bold">50/80' Private Lesson with Bruno</h4>
                            </div>
                            <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedSection === 'private' ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedSection === 'private' && (
                            <div className="px-6 pb-6 text-purple-200">
                                Take a step towards your goal: arrange a private lesson with Bruno
                            </div>
                        )}
                    </div>

                    {/* Group Lesson */}
                    <div className="bg-black/30 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('group')}
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-black/20 transition-colors"
                        >
                            <div>
                                <h4 className="text-xl font-bold">50/85' Group Lesson with Bruno</h4>
                            </div>
                            <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedSection === 'group' ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedSection === 'group' && (
                            <div className="px-6 pb-6 text-purple-200">
                                If you gathered a group of Trading learners, here's where you guys can book your progress.
                            </div>
                        )}
                    </div>

                    {/* Follow-up Sessions */}
                    <div className="bg-black/30 rounded-lg p-6">
                        <h4 className="text-xl font-bold mb-2">Follow-Up Sessions</h4>
                        <p className="text-purple-200">
                            Join a call with me to discuss your current challenges, achieved milestones, and...
                        </p>
                    </div>
                </div>
            </div>

            {/* General Follow-Up Scheduling */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <h3 className="text-4xl font-bold text-center mb-12">General Follow-Up scheduling</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                        <h4 className="text-lg font-semibold mb-2">One Saturday of each month</h4>
                        <p className="text-purple-200 text-sm">(normally, the 1st)</p>
                    </div>
                    <div>
                        <Clock className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                        <h4 className="text-lg font-semibold mb-2">8:30 AM - 1:00 PM</h4>
                    </div>
                    <div>
                        <Users className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                        <h4 className="text-lg font-semibold mb-2">Mandatory advance reservation</h4>
                        <p className="text-purple-200 text-sm">(minimum 12 hours)</p>
                    </div>
                </div>
            </div>

            {/* Key Policies */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <h3 className="text-4xl font-bold text-center mb-8">Key Policies</h3>
                <div className="bg-black/30 rounded-lg p-8">
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start">
                            <span className="text-red-400 mr-3">•</span>
                            Groups cannot combine individual + group sessions for free quarterly followups
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-400 mr-3">•</span>
                            All sessions require 12-hour advance booking minimum
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-400 mr-3">•</span>
                            Free sessions are limited to every 3 months for package holders
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LessonsPage;