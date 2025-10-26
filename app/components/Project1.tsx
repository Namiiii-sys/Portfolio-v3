"use client";

import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform , MotionValue} from "framer-motion";

type Project = {
  id: number;
  title: string;
  video: string;
  desc: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "RentoAI - AI-Powered Rental Platform",
    video: "/rento.mp4",
    desc: "A platform that leverages AI to simplify property rental searches, integrating recommendation systems and smart filtering.",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Clerk"],
  },
  {
    id: 2,
    title: "Swiftpass - Event QR Check-in System",
    video: "/rento.mp4",
    desc: "A streamlined QR-based check-in solution for event organizers with CSV upload, email automation, and scanning features.",
    techStack: ["React", "Firebase", "Tailwind", "QRCode"],
  },
  {
    id: 3,
    title: "Quickfix - Local Service Finder",
    video: "/rento.mp4",
    desc: "An all-in-one platform connecting users with nearby repair and maintenance professionals in real-time.",
    techStack: ["Next.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    id: 4,
    title: "QuirkyCart - E-commerce Platform",
    video: "/quirkycart.mp4",
    desc: "A creative e-commerce web app with user-friendly UI, smooth checkout, and Django-powered backend.",
    techStack: ["Django", "PostgreSQL", "Bootstrap"],
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  total: number;
  containerProgress: MotionValue<number>;
}> = ({ project, index, total, containerProgress }) => {
  // Scale down older cards as newer cards scroll in
  const maxScale = 1; // top card scale
  const minScale = 0.8; // oldest card scale
  const scaleStep = (maxScale - minScale) / total;

  // Calculate dynamic scale based on container scroll and card index
  const scale = useTransform(
    containerProgress,
    [0, 1],
    [maxScale - (total - index - 1) * scaleStep, maxScale - (total - index - 1) * scaleStep]
  );

  return (
    <motion.section
      className={`sticky flex flex-col justify-center items-center h-screen z-[${50 - index * 5}]`}
      style={{
        top: `calc(2% + ${index * 32}px)`,
        scale,
      }}
    >
      <article className="w-full mb-10 md:w-3/6 bg-indigo-700 border border-indigo-900 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-purple-900/20 transition-all backdrop-blur-sm">
        {/* Video */}
        <div className="relative w-full rounded-lg overflow-hidden mb-6">
          <motion.video
            src={project.video}
            loop
            muted
            autoPlay
            playsInline
            className="w-full rounded-lg object-cover border border-indigo-800 z-100"
          />
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-900/40 border border-indigo-800 text-white text-[10px] px-2 py-[2px] rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-3">
          {project.title.split(" ").map((word, i) =>
            i === 2 || i === 3 ? (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
          {project.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a className="px-4 py-2 flex items-center gap-2 rounded border border-purple-600 text-white hover:bg-purple-600/20 transition-all">
            <FiExternalLink /> Github
          </a>
          <a className="px-4 py-2 flex items-center gap-2 rounded border border-purple-600 text-white hover:bg-purple-600/20 transition-all">
            <FiExternalLink /> Demo
          </a>
        </div>
      </article>
    </motion.section>
  );
};

const ProjectsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="min-h-screen bg-transparent text-white flex flex-col">
      <h1 className="text-4xl font-bold text-center pt-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        MY PROJECTS
      </h1>

      <div ref={containerRef} className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
