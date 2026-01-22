"use client";

import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FEATURED_PROJECTS } from "./featuredData";
import SectionHeading from "./SectionHeading";

type Project = {
  id: number;
  title: string;
  video: string;
  desc: string;
  techStack: string[];
};

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
      <article className="w-[90%] md:w-2/3 max-w-4xl bg-gradient-to-br from-indigo-950/90 to-purple-950/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-4 flex flex-col items-center shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500 relative overflow-hidden group">

        {/* Glow Effects */}
        <div className="absolute top-0 -left-1/2 w-full h-full bg-blue-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-all duration-500" />
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-purple-500/20 blur-[120px] pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />

        {/* Video Container */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black mb-6 border border-white/5">
          <div className="absolute inset-0 z-10 border border-white/5 rounded-2xl pointer-events-none" />
          <motion.video
            src={project.video}
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />

          {/* Tech Stack Overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-center mb-3 leading-tight z-20 relative">
          {project.title.split(" - ")[0]} <span className="text-gray-400 font-normal text-lg block md:inline"> {project.title.split(" - ")[1] ? `- ${project.title.split(" - ")[1]}` : ""}</span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base text-center mb-8 leading-relaxed max-w-2xl px-4 z-20 relative">
          {project.desc}
        </p>

        <div className="flex gap-3 mb-2 z-20 relative">
          <button className="px-6 py-2.5 flex items-center gap-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm">
            Code <FiExternalLink />
          </button>
          <button className="px-6 py-2.5 flex items-center gap-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium shadow-lg hover:shadow-white/20 text-sm">
            Live Demo <FiExternalLink />
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
      <SectionHeading
        title="Featured Work"
        subtitle="A selection of projects that showcase my passion for building."
        className="px-4 mb-16 text-center md:text-left max-w-4xl mx-auto"
      />

      <div ref={containerRef} className="relative z-10 w-full" style={{ height: `calc(${FEATURED_PROJECTS.length * 60}vh + 50vh)` }}>
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={FEATURED_PROJECTS.length}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>

      <div className="h-20" />

      <div className="flex justify-center pb-10 relative z-20">
        <a
          href="/projects"
          className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white rounded-full transition-all duration-300 flex items-center gap-2 group font-medium"
        >
          View Full Archive
          <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
