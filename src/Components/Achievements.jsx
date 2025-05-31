import React from 'react'
import main_image from '../assets/achievement/main.svg'
export default function Achievements() {
  return (
    <section className="main-container max-w-7xl md:px-6 mx-auto py-12">
                <h2 className="text-3xl md:text-5xl font-afacad font-bold text-white text-center mb-8">
                   My Achievements
                </h2>
             
            <div className='w-full px-2 '>
                <div className='h-full md:h-[380px] lg:h-[500px] w-full min-w-full overflow-hidden rounded-lg relative mb-8'>
                    <img src={main_image} className='h-full w-full object-cover object-bottom' />
                </div>
                <p className="text-[#FBE5D8]  md:text-xl tracking-wider font-afacad text-center max-w-full mx-auto mb-8 leading-relaxed">
                “ I have spent five years teaching hundreds of international students from all over the world with different levels of skill; helping them to, overall, improve their conversational level, whether they were starting from scratch, or they already had some knowledge of the target language. Besides, I have also had the opportunity
                to help with writing or listening skills, and with more specific goals, such as preparation for a DELE official exam, or GCSE and A levels, for students in the UK; always with great success. “
                 </p>
            </div>



        </section>
  )
}
