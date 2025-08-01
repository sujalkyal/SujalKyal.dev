import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/MovingBorders";
import Image from "next/image";

type WorkCard = {
  id: number;
  title: string;
  desc: string;
  className?: string;
  thumbnail: string;
};

const workExperience: WorkCard[] = [
  {
    id: 1,
    title: "Generate AI | Full Stack Intern @NinjaHire",
    desc: "Developed a GPT-4 powered microservice for recruiter query handling with SQL generation, real-time responses, 3x latency reduction, and automated Railway deployment.",
    thumbnail: "/exp1.svg",
  },
];

export const ExperienceSection = () => {
  if (workExperience.length === 0) return null;

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Crafting Solutions, Building Impact"
          description="With every role, I've focused on creating clean, efficient, and impactful code — 
                contributing to products that users love."
        />
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={128}
                  height={128}
                  className="lg:w-32 md:w-20 w-16 object-contain"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
