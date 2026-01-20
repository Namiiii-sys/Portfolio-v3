"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiFirebase, SiTensorflow, SiPytorch, SiKubernetes } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        description: "Building beautiful, responsive user interfaces.",
        skills: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Backend",
        description: "Robust scalable server-side systems.",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Django", icon: SiDjango, color: "#092E20" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Machine Learning",
        description: "Training models and integrating AI.",
        skills: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        ],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "DevOps & Tools",
        description: "Deployment, CI/CD, and version control.",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
        ],
        className: "md:col-span-2 md:row-span-1",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    Tech Stack
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    My technical toolkit, categorized by domain.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6 h-auto md:h-[600px]">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between group overflow-hidden relative ${category.className}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-2 relative z-10">{category.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 relative z-10">{category.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 relative z-10">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                                    <skill.icon style={{ color: skill.color }} />
                                    <span className="text-sm text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
