import React from 'react'
import main_image from '../assets/community/main_image.jpg'
import meet_talk from '../assets/community/meet_talk.svg'
import calender_tick from '../assets/community/calender_tick.svg'
export default function Commmunity() {
    return (
        <section className="main-container my-12">
            <>
                <h2 className="text-3xl md:text-5xl font-afacad font-bold text-white text-center mb-4">
                    Introducing our community
                </h2>
                <p className="text-[#FBE5D8]  md:text-xl font-afacad text-center max-w-5xl mx-auto mb-12">
                    By purchasing one of the courses, or buying one of the lesson packages, be part of our WhatsApp group: a worldwide community of eager-to-learn Spanish learners that you can join for free, not to sail alone in Spanish waters.
                </p>
            </>
            <div className='w-full px-2'>
                <div className='h-full md:h-[380px] lg:h-[500px] w-full min-w-full overflow-hidden rounded-lg relative'>
                    <img src={main_image} className='h-full w-full object-cover object-top' />
                </div>
                <>
                    <h2 className="text-2xl text-center md:text-4xl font-afacad font-bold text-white  my-6">
                        Benefits:
                    </h2>
                    <div className='text-base lg:text-xl flex gap-4 mb-12 mt-6'>
                        <span ><img src={calender_tick} className='h-9 w-9 min-w-9 object-contain' /></span>
                        <span>Free activities and materials, related to the current global or national events, as well as to Spanish and Hispanic music and culture.</span>
                    </div>
                    <div className='text-base lg:text-xl flex gap-4 '>
                        <span><img src={meet_talk} className='h-9 w-9 min-w-9 object-contain' /></span>
                        <span>Monthly coffee meetings with Bruno, and the rest of the community, where you will have the chance to meet your “compañero/a de español”: your Spanish accountability partner that you can join forces with to keep your and their motivation and progress on track.</span>
                    </div>

                </>
            </div>



        </section>
    )
}
