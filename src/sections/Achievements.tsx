"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Trophy, BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    {
      title: "Amazon ML Summer School 2024",
      description:
        "Selected among top students across India for exclusive ML & AI training by Amazon Scientists",
      icon: <BadgeCheck className="size-5 text-yellow-400" />,
    },
    {
      title: "Winner - Capital Clash",
      description:
        "Won The Equity Research Challenge • Built a balance sheet & gained financial analysis skills",
      icon: <Trophy className="size-5 text-amber-400" />,
    },
    {
        title: "Competitive Programming",
        description:
          "Knight @LeetCode(1860+) • 3★ @CodeChef(1787) • Pupil @Codeforces • Global Ranks in contests",
        icon: <Sparkles className="size-5 text-orange-400" />,
      },
      {
        title: "1000+ Problems Solved",
        description:
          "Solved 1000+ problems across LeetCode, CodeChef, Codeforces, and GFG • Consistent CP practice",
        icon: <BadgeCheck className="size-5 text-green-400" />,
      },
  ];
  

export const AchievementsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements That Define Me"
          description="From competitive programming to industry recognition, here are some highlights of my journey."
        />

        <div className="mt-20 relative">
          <div className="border-l-[2px] border-white/10 pl-6 space-y-12 relative">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-emerald-400 rounded-full border-4 border-black shadow-md group-hover:scale-110 transition-transform" />

                <Card className="bg-white/5 p-5 hover:shadow-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-white/80 mt-2 leading-snug">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
