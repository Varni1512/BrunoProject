import React from 'react';
import family from '../assets/family.png';

export default function WebinarSection() {
    return (
        <div className="bg-[#180018] text-white py-16 px-8 min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <h1 className="text-[70px] font-bold mb-8" style={{ fontFamily: 'Afacad, sans-serif' }}>Join our Webinars</h1>

                {/* Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                    <img
                        src={family}
                        alt="Bruno and community members learning Spanish together"
                        className="w-[1252px] h-[545px] rounded-[15px] object-cover"
                    />
                </div>


                {/* Subtitle */}
                <h2 className="text-[40px] font-semibold text-[#DFB6B2] mb-6" style={{ fontFamily: 'Afacad, sans-serif' }}>
                    Join our next "chocolate con Bruno"
                </h2>

                {/* Description */}
                <p className="text-[40px] mb-8 leading-relaxed text-[#FBE5D8AD]" style={{ fontFamily: 'Afacad, sans-serif' }}>
                    Learning a new language is all about connections, and sometimes it can get
                    quite hard to walk this path alone. That is why, every month, a meeting with
                    Bruno and the rest of the community will be hosted. It's included if you have
                    booked package that month. Only $5.5/$6 if you don't.
                </p>

                {/* Benefits List */}
                <div className="text-left text-[25px] text-[#FBE5D8] mb-8 space-y-3" style={{ fontFamily: 'Afacad, sans-serif' }}>
                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Practice Spanish in a friendly and easy-going environment, with no pressure.</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Meet your "compañero/a de español": your Spanish accountability partner</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Make new friends!</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Even if you are a beginner, you are welcome to our meetings as they provide the perfect environment to practice what you learned during our lessons, and improve your listening.</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Every session will be different. A specific topic will be discussed, and everyone will have the chance to participate.</span>
                    </div>

                    <div className="flex items-start">
                        <span className="text-[#FBE5D8] mr-2">•</span>
                        <span>Available on the last Friday of each month.</span>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    className="flex items-center justify-center text-white font-semibold transition-colors duration-200"
                    style={{
                        width: '1338px',
                        height: '61px',
                        borderRadius: '7px',
                        padding: '7px 16px',
                        gap: '8px',
                        background: 'linear-gradient(95.5deg, #532959 2.54%, #824D69 54.24%, #532959 105.93%)',
                    }}
                >
                    Join Now
                </button>


            </div>
        </div>
    );
}