import Hero from "@/components/home/Hero"
import BentoGrid from "@/components/home/BentoGrid"
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 bg-no-repeat bg-[url('/images/BgGrad.svg')] text-slate-50">
      <Hero />
      <BentoGrid />
    </div>
  )
}
