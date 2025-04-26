import paySwiftImage from "@/assets/images/paySwiftImage.jpg";
import fundSparkImage from "@/assets/images/fundSparkImage.png";
import kharidLoImage from "@/assets/images/kharidLoImage.png";
import campusFlowImage from "@/assets/images/campusFlowImage.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { FaGithub } from "react-icons/fa";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "CampusFlow - Management System",
    description: "Full-stack management system for educational institutions.",
    github: "https://github.com/sujalkyal/CampusFlow.git",
    liveLinks: [
      { label: "Teacher App", url: "https://campusflow-teacher.vercel.app/" },
      { label: "Student App", url: "https://campusflow-student.vercel.app/" },
    ],
    results: [
      {
        title:
          "Built role-based college system with teacher/student modules using Turborepo",
      },
      {
        title:
          "Designed PostgreSQL/Prisma database relationships for academic data management",
      },
      {
        title:
          "Created interactive UI with Framer Motion for file sharing and real-time updates",
      },
    ],
    image: campusFlowImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "KharidLo – E-commerce Platform",
    description: "Full-stack e-commerce app with user and admin panels.",
    github: "https://github.com/sujalkyal/KharidLo",
    liveLinks: [
      { label: "User App", url: "https://ecomm-user-app.vercel.app/" },
      { label: "Admin App", url: "https://ecomm-admin-app.vercel.app/" },
    ],
    results: [
      {
        title:
          "Built full-stack e-commerce system with Next.js, Prisma, PostgreSQL",
      },
      {
        title:
          "Separate user/admin portals with secure NextAuth authentication",
      },
      { title: "Includes cart, checkout, product CRUD & order tracking" },
    ],
    image: kharidLoImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Fund Spark – Crowdfunding Platform",
    github: "https://github.com/sujalkyal/FundSpark",
    liveLinks: [
      { label: "Live App", url: "https://fund-spark-jade.vercel.app/" },
    ],
    results: [
      {
        title: "Integrated Razorpay for secure payments with real-time updates",
      },
      { title: "Dashboard for managing campaigns and donations" },
      { title: "Auth via Google & GitHub using NextAuth" },
    ],
    image: fundSparkImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "PaySwift – UPI-like Payment System",
    github: "https://github.com/sujalkyal/PaySwift",
    liveLinks: [],
    results: [
      { title: "Real-time P2P transfers with Express, Webhooks & PostgreSQL" },
      {
        title:
          "Supports merchant payouts, QR, phone transfers, and bank integration",
      },
      { title: "Separate user/merchant apps with Google login" },
    ],
    image: paySwiftImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="h-[1px]" data-sentinel />
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experience."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-6 pb-0 md:pt-10 md:px-10 lg:pt-14 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold inline-flex uppercase 
                tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 mt-4 border-white/5 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3">
                    {/* Row 1: Live links */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 min-w-[150px] flex-1 md:flex-none bg-white text-gray-950 rounded-xl px-6 font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/80 transition"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                      ))}
                    </div>

                    {/* Row 2: GitHub button (centered on mobile, inline on large) */}
                    {project.github && (
                      <div className="pt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 min-w-[150px] inline-flex items-center justify-center gap-2 px-6 font-semibold rounded-xl border border-white/70 text-white hover:bg-white/10 hover:border-emerald-300/50 transition duration-200"
                        >
                          <FaGithub className="size-5" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg border-2 border-black/50 shadow-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
