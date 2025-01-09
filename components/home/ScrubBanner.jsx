import React from 'react'
import { Flame, Flower, Heart, StarsIcon, Globe, Feather, User, Sun, Moon, Book } from 'lucide-react'

const ScrubBanner = () => {

    const keyWordLogo = [
        { word: "Collaborate", icon: <StarsIcon key={1} size={32} /> },
        { word: "Community-Driven", icon: <Heart key={2} size={32} /> },
        { word: "Empower", icon: <Flame key={3} size={32} /> },
        { word: "Personalized", icon: <Flower key={4} size={32} /> },
        { word: "Accessible", icon: <Globe key={5} size={32} /> },
        { word: "Innovative", icon: <Feather key={6} size={32} /> },
        { word: "Effortless", icon: <Sun key={7} size={32} /> },
        { word: "Curated", icon: <Book key={8} size={32} /> },
        { word: "Connected", icon: <User key={9} size={32} /> },
        { word: "Streamlined", icon: <Moon key={10} size={32} /> },
    ]

    return (
        <div className="subject-container border-2 border-slate-700 border-dashed">
            {/* scrubAnimation */}
            <div className="text-5xl flex space-x-8 bg-slate-900 p-5 subject animate-scroll ">
                {Array.from({ length: 50 }).map((_, index) => (
                    <span
                        key={index}
                        className="text-4xl text-gray-500 flex justify-center items-center shrink-0 gap-5"
                    >
                        {keyWordLogo[index % keyWordLogo.length].word}
                        {keyWordLogo[index % keyWordLogo.length].icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ScrubBanner
