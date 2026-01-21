"use client";

import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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

  const cardsBelow = total - index - 1;
  const startScale = 1;
  const endScale = 1 - (cardsBelow * 0.08);

  const scale = useTransform(
    containerProgress,
    [index / total, 1],
    [startScale, endScale]
  );

  const topPosition = `calc(5vh + ${index * 60}px)`;

  return (
    <motion.section
      className="sticky top-0 flex flex-col justify-start items-center h-[70vh] w-full mb-10 md:mb-0"
      style={{
        top: topPosition,
        scale,
        zIndex: index + 1,
      }}
    >
      <article className="w-[90%] md:w-2/3 max-w-4xl bg-gradient-to-br from-indigo-950/90 to-purple-950/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col items-center shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500 relative overflow-hidden group">
        <div className="absolute top-0 -left-1/2 w-full h-full bg-blue-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-all duration-500" />
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-purple-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 shadow-xl border border-white/5">
          <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />
          <motion.video
            src={project.video}
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-20">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] px-2 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-center mb-2 leading-tight">
          {project.title.split(" ").map((word, i) =>
            i === 2 || i === 3 ? (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {word}{" "}
              </span>
            ) : (
              <span key={i} className="text-white">{word} </span>
            )
          )}
        </h2>

        <p className="text-gray-300 text-sm md:text-base text-center mb-6 leading-relaxed max-w-2xl px-4 line-clamp-3 md:line-clamp-none">
          {project.desc}
        </p>

        <div className="flex gap-3">
          <button className="px-5 py-2.5 flex items-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all duration-300 font-medium group/btn text-sm">
            <FiExternalLink className="group-hover/btn:rotate-45 transition-transform" /> Code
          </button>
          <button className="px-5 py-2.5 flex items-center gap-2 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium shadow-lg hover:shawdow-white/20 text-sm">
            <FiExternalLink /> Live Demo
          </button>
        </div>
      </article>
    </motion.section>
  );
};

const ProjectSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative text-white py-20" id="projects">
      <div className="text-center mb-10 z-0">
        <h1 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-500 mb-4">
          MY PROJECTS
        </h1>
        <p className="text-gray-400">Scroll to explore my work</p>
      </div>

      <div ref={containerRef} className="relative z-10" style={{ height: `calc(${projects.length * 60}vh + 50vh)` }}>
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

      <div className="h-20" />

      <div className="flex justify-center pb-10 relative z-20">
        <a
          href="/projects"
          className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white rounded-full transition-all duration-300 flex items-center gap-2 group"
        >
          View Full Archive
          <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
