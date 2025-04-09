import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import SparkleIcon from "../assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">
    <div data-sentinel className="h-[1px]" />
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div 
      className="absolute inset-0 -z-30 opacity-5" 
      style={{backgroundImage:`url(${grainImage.src})`}}>
      </div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      <HeroOrbit size={430} rotation={-15} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="4s">
        <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s">
        <SparkleIcon className="size-5 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
        <div className="size-2 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="4s">
        <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
        <StarIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
        <StarIcon className="size-8 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
        <div className="size-2 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="4s">
        <SparkleIcon className="size-50 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
    </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="person behind a computer" />
        <div className="inline-flex bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Available for new Projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-center text-3xl md:text-5xl mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="text-center mt-4 text-white/60 md:text-lg">
          I specialize in transforming designs into functional, high-performing web applications.
          Let's discuss your next project and how I can help bring your vision to life.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white px-6 h-12 bg-white rounded-xl text-gray-900">
            <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </div>
  </section>;
};
