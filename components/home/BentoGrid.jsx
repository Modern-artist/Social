import React from 'react'
import Title from './Title'
import { GraduationCap, HeartHandshake } from 'lucide-react'
import NinjaStarButton from './NinjaStarButton'

const BentoGrid = () => {
    return (
        <div className='flex flex-col items-center mt-10 mx-5 sm:mx-10'>
            <div className="flex flex-col gap-5 items-center max-w-3xl text-center">
                <Title title={"Why StudySend"} icon={HeartHandshake} />
                <h1 className='text-3xl sm:text-5xl tracking-tight font-bold' >Why Choose <span className='textGrad'>StudySend</span>?</h1>
                <p className='text-lg text-slate-300 '>Join StudySend today and experience a smarter, more collaborative way to learn.</p>
                <NinjaStarButton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 text-lg my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-1 sm:col-span-2 rounded-2xl p-5 sm:p-10 shadow-md bg-slate-900 border border-slate-800">
                    <div className=" flex flex-col gap-3">
                        <div className="flex p-3 border border-slate-700 rounded-lg bg-slate-800 aspect-square w-fit">
                            <GraduationCap />
                        </div>
                        <h2 className='text-xl font-bold'>Earn as a Tutor</h2>
                        <p className='text-slate-400'>Turn your expertise into income by tutoring peers on StudySend. Create virtual sessions, share study materials, and get paid quickly—all within a streamlined, user-friendly platform.</p>
                    </div>
                    <img className='rounded-lg' src="https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="bg-slate-900 rounded-2xl p-5 shadow-md flex flex-col gap-3 row-span-1 sm:row-span-2 border border-slate-800">
                    <div className="flex p-3 border border-slate-700 rounded-lg bg-slate-800 aspect-square w-fit">
                        <GraduationCap />
                    </div>
                    <h2 className='text-xl font-bold'>Personalized Support</h2>
                    <p className='text-slate-400'>Tutor peers, host virtual sessions, share materials, and get paid effortlessly.</p>
                    <img className='rounded-lg' src="https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="bg-slate-900 rounded-2xl p-5 shadow-md flex flex-col gap-3 row-span-1 sm:row-span-2 border border-slate-800">
                    <div className="flex p-3 border border-slate-700 rounded-lg bg-slate-800 aspect-square w-fit">
                        <GraduationCap />
                    </div>
                    <h2 className='text-xl font-bold'>Personalized Support</h2>
                    <p className='text-slate-400'>Tutor peers, host virtual sessions, share materials, and get paid effortlessly.</p>
                    <img className='rounded-lg' src="https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                {/* <img className='rounded-lg' src="https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                <div className="hidden lg:flex justify-center">
                    <img src="/images/BentoCentre.svg" alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-1 sm:col-span-2 rounded-2xl p-5 shadow-md bg-slate-900 border border-slate-800">
                    <div className=" flex flex-col  gap-3">
                        <div className="flex p-3 border border-slate-700 rounded-lg bg-slate-800 aspect-square w-fit">
                            <GraduationCap />
                        </div>
                        <h2 className='text-xl font-bold'>Collaborate with Classmates</h2>
                        <p className='text-slate-400'>Stay connected with peers enrolled in the same classes, even with busy schedules. StudySend allows you to participate in discussions and share insights anytime, anywhere.</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

        </div>
    )
}

export default BentoGrid