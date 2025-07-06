"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Clerk"],
  },
  {
    id: 2,
    title: "Swiftpass - Event QR Check-in System",
    video: "/rento.mp4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    techStack: ["React", "Firebase", "Tailwind", "QRCode"],
  },
  {
    id: 3,
    title: "Quickfix - Local Service Finder",
    video: "/rento.mp4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["Next.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    id: 4,
    title: "QuirkyCart - E-commerce Platform",
    video: "/quirkycart.mp4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["Django", "PostgreSQL", "Bootstrap"],
  },
];

const groupProjects = (projects: Project[]): Project[][] => {
  const grouped: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    grouped.push([projects[i], projects[i + 1]].filter(Boolean) as Project[]);
  }
  return grouped;
};

const ProjectSection: React.FC = () => {
  const groupedProjects = groupProjects(projects);
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = groupRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveGroupIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    groupRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      groupRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section className="py-20 mt-10 px-6 md:px-12 bg-transparent border border-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        MY PROJECTS
      </h1>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {groupedProjects.map((group, groupIndex) => (
          <div
            key={groupIndex}
            ref={(el) => {
              groupRefs.current[groupIndex] = el;
            }}
            className={`flex flex-col md:flex-row gap-10 transition-all duration-700 ${
              activeGroupIndex === groupIndex
                ? "scale-100 opacity-100 z-10"
                : "scale-[0.96] opacity-60 blur-[3px] z-0"
            }`}
          >
            {group.map((project: Project, i: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col items-center bg-transparent rounded-xl overflow-hidden p-4"
              >
                <div className="relative w-4/6 rounded-xl overflow-hidden">
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 z-20 py-2">
                    {project.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-900/40 border-2 text-white text-[10px] px-2 py-[2px] rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <video
                    src={project.video}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-transparent border-3 border-indigo-900 transition-all" />
                </div>

                <h2 className="text-xl font-bold mt-10 text-center">
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

                <p className="text-gray-300 text-sm mt-2 text-center">
                  {project.desc}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-2 flex items-center gap-2 rounded border border-purple-600 text-white hover:bg-purple-600/20 transition-all">
                    <FiExternalLink /> Github
                  </button>
                  <button className="px-4 py-2 flex items-center gap-2 rounded border border-purple-600 text-white hover:bg-purple-600/20 transition-all">
                    <FiExternalLink /> Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
