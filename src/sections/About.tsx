"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import mapImage from "@/assets/images/map2.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import aws from "@/assets/icons/aws.svg";
import vercel from "@/assets/icons/vercel.svg";
import mongodb from "@/assets/icons/mongodb.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import prisma from "@/assets/icons/prisma.svg";
import typescript from "@/assets/icons/typescript.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import nodejs from "@/assets/icons/nodejs.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import LeetCodeIcon from "@/assets/icons/leetcode.svg";
import CodeforcesIcon from "@/assets/icons/codeforces.svg";
import CodeChefIcon from "@/assets/icons/codechef.svg";

const ToolboxIcons = [
  { title: "Next.js", iconType: nextjs },
  { title: "TypeScript", iconType: typescript },
  { title: "PostgreSQL", iconType: postgresql },
  { title: "Prisma", iconType: prisma },
  { title: "Vercel", iconType: vercel },
  { title: "Node.js", iconType: nodejs },
  { title: "MongoDB", iconType: mongodb },
  { title: "AWS", iconType: aws },
  {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: "65%",
    top: "30%",
  },
  {
    title: "Sports",
    emoji: "🏸",
    left: "5%",
    top: "65%",
  },
  {
    title: "Anime",
    emoji: "🎌",
    left: "45%",
    top: "65%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "70%",
  },
  {
    title: "Stocks",
    emoji: "📈",
    left: "30%",
    top: "0%",
  },
];

const platforms = [
  { icon: LeetCodeIcon, title: "LeetCode", rating: "(1750)" },
  { icon: CodeforcesIcon, title: "Codeforces", rating: "Pupil (1218)" },
  { icon: CodeChefIcon, title: "CodeChef", rating: "3★ (1787)" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-20 lg:py-28" id="about">
      <div data-sentinel className="h-[1px]" />
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Code & Rankings"
                description="Where consistency meets curiosity."
                className="lg:py-6"
              />

              <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                {platforms.map(({ icon: Icon, title, rating }, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-md px-2 py-3 flex items-center gap-2 text-white/80 backdrop-blur"
                  >
                    <Icon className="size-4 shrink-0 mr-2" />
                    <div className="text-[10px] leading-tight">
                      <div className="font-medium text-white text-xs">
                        {title}
                      </div>
                      <div>{rating}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                ToolboxIcons={ToolboxIcons}
                className=""
                itemWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                ToolboxIcons={ToolboxIcons}
                className="mt-6"
                itemWrapperClassname="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital world."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
            after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 
            after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
