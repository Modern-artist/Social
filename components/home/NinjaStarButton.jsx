import { Sparkle, WandSparkles } from 'lucide-react';
import Link from 'next/link';

const NinjaStarButton = ({ text, icon }) => {
    return (
        <Link href="/analize" className="relative inline-block group w-fit">
            {/* <button className="text-primary bg-gradient-to-br from-[#EE0979] to-[#FF6A00] transition-all duration-500 ease-in-out rounded-md bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] px-6 py-3 font-medium">
                AI Enhancer
            </button> */}
            <button className="relative w-[180px] h-[48px] hover:rounded-2xl text-primary bg-foreground text-black font-bold transition-all duration-500 ease-in-out rounded-md bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] px-6 py-3  overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 transform">
                    Analize <WandSparkles className='ml-4' size={20} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 transform translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    {text} {icon}
                </span>
            </button>

            {/* Top Right Stars */}
            <Sparkle size={24} className="absolute top-0 left-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:-translate-x-10 group-hover:-translate-y-10 group-hover:opacity-100" />
            <Sparkle size={20} className="absolute top-0 left-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100 delay-100" />
            <Sparkle size={16} className="absolute top-0 left-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:-translate-x-12 group-hover:-translate-y-4 group-hover:opacity-100 delay-200" />

            {/* Bottom Left Stars */}
            <Sparkle size={24} className="absolute bottom-0 right-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:translate-x-10 group-hover:translate-y-10 group-hover:opacity-100" />
            <Sparkle size={20} className="absolute bottom-0 right-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-100 delay-100" />
            <Sparkle size={16} className="absolute bottom-0 right-0 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:translate-x-12 group-hover:translate-y-4 group-hover:opacity-100 delay-200" />
        </Link>
    );
};

export default NinjaStarButton;
