import React from 'react'
import Title from "./Title"
// import HomeNav from "../homeNav/HomeNav"
import { WandSparkles } from 'lucide-react'
import ScrubBanner from './ScrubBanner'
import NinjaStarButton from './NinjaStarButton'



const Hero = () => {
    return (
        <div className="hero">
            <div className="bg-slate-900 m-3 md:m-10 bg-[url('./img/ooorganize.svg')]  h-[80vh] flex items-center rounded-2xl shadow-2xl">
                <div className="flex flex-col bg-opacity-50">
                    {/* <HomeNav /> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-5 place-items-center ">
                        <div className="flex flex-col p-5 sm:p-10 py-5 gap-5">
                            <Title title={"Explore StudySend"} icon={WandSparkles} />
                            <h1 className='text-5xl sm:text-6xl tracking-tight font-bold' ><span className='textGrad'>Revolutionizing</span> the Way Students Learn Together.</h1>
                            <p className='text-lg text-slate-300'>StudySend empowers students to share course notes, access tailored study material, and connect with peers for collaborative studying. Whether youre preparing for exams or looking to tutor others, StudySend has you covered.</p>
                            <NinjaStarButton />
                            {/* <LoginButton text={"Sign Up for Free"} /> */}
                        </div>
                        <div className="flex items-center p-5 sm:p-0">
                            <img className=' rounded-lg' src='https://cdn.dribbble.com/userupload/16831139/file/original-ca0b8dbeee8fbc2d7c940ff3165390fd.png?resize=2048x1280&vertical=center' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen overflow-x-hidden ">
                <ScrubBanner />
            </div>
        </div>
    )
}

export default Hero