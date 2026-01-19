"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiFirebase } from "react-icons/si";

const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden z-10">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    Tech Stack
                </h2>
                <p className="text-gray-400">Tools & Technologies I work with</p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[--background] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[--background] to-transparent z-10" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:pause"
                        >
                            <skill.icon className="text-2xl" style={{ color: skill.color }} />
                            <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
