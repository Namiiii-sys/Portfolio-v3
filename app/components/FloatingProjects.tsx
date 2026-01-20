"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "RentoAI",
        description: "AI-Powered Rental Platform leveraging recommendation systems.",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Clerk"],
        link: "#",
        github: "#",
        color: "from-blue-400 to-cyan-300",
    },
    {
        title: "Swiftpass",
        description: "QR-based check-in solution for event organizers.",
        tech: ["React", "Firebase", "Tailwind", "QRCode"],
        link: "#",
        github: "#",
        color: "from-purple-400 to-pink-300",
    },
    {
        title: "Quickfix",
        description: "Local Service Finder connecting users with professionals.",
        tech: ["Next.js", "MongoDB", "Express", "Tailwind"],
        link: "#",
        github: "#",
        color: "from-green-400 to-emerald-300",
    },
    {
        title: "QuirkyCart",
        description: "E-commerce platform with Django backend.",
        tech: ["Django", "PostgreSQL", "Bootstrap"],
        link: "#",
        github: "#",
        color: "from-orange-400 to-red-300",
    },
];

const FloatingProjects = () => {
    return (
        <div className="min-h-screen py-20 px-6 relative z-10">
            <h1 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                Selected Works
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <FloatingCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    ← Back to Home
                </a>
            </div>
        </div>
    );
};

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    color: string;
}

const FloatingCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                }
            }}
            className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
        >
            {/* Abstract Background Gradient */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.color} blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

            <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-4">
                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><FiGithub size={20} /></a>
                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors"><FiExternalLink size={20} /></a>
                    </div>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Placeholder for Image/Video Area - Removed specific image paths to prevent broken images */}
                <div className="w-full h-48 bg-black/20 rounded-xl border border-white/5 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                        Project Preview (Video/Image)
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
            </div>
        </motion.div>
    );
};

export default FloatingProjects;
