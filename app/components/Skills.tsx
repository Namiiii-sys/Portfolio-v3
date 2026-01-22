"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiFirebase, SiTensorflow, SiPytorch, SiCplusplus, SiStreamlit, SiFastapi, SiGreensock, SiFramer, SiVercel, SiPostman } from "react-icons/si";
import SectionHeading from "./SectionHeading";

type Category = "Frontend" | "Backend" | "ML" | "Tools";

const skillCategories: Record<Category, { name: string; icon: any; color: string }[]> = {
    Frontend: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
    Backend: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "FastAPI", icon: SiFastapi, color: "#35af96ff" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    ML: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
    Tools: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState<Category>("Frontend");

    return (
        <section id="skills" className="py-6 px-6 relative z-10 w-full max-w-4xl mx-auto">
            <SectionHeading
                title="Expertise"
                subtitle="My technical toolkit. Switch tabs to explore."
                className="text-center"
            />

            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white/5 p-1.5 rounded-full border border-white/10">
                    {(Object.keys(skillCategories) as Category[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="w-full pt-5 min-h-[180px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
                        >
                            {skillCategories[activeTab].map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-white/5 border border-white/5 px-5 py-3 rounded-xl w-full max-w-[200px] hover:bg-white/10 hover:border-white/10 transition-all group"
                                >
                                    <skill.icon style={{ color: skill.color }} className="text-xl flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;
