"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowLeft, FiGithub, FiX } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

// Detailed project data for the modal
const projects = [
    // ROW 1: Featured
    {
        title: "RentoAI",
        description: "An intelligent rental platform utilizing recommendation algorithms to match tenants with their dream properties. precise filtering and AI-driven insights.",
        tech: ["Next.js", "Tailwind", "OpenAI API", "Clerk"],
        link: "#",
        github: "#",
        thumbnail: "/project-rento.png",
    },
    {
        title: "Swiftpass",
        description: "A seamless QR-code based event entry system. Organizers can manage guest lists in real-time while attendees enjoy a paperless check-in experience.",
        tech: ["React", "Firebase", "QRCode.js"],
        link: "#",
        github: "#",
        thumbnail: "/project-swiftpass.png",
    },
    {
        title: "Quickfix",
        description: "Hyper-local service marketplace connecting homeowners with reliable plumbers, electricians, and carpenters. Features real-time scheduling.",
        tech: ["Next.js", "MongoDB", "Express"],
        link: "#",
        github: "#",
        thumbnail: "/project-quickfix.png",
    },
    {
        title: "QuirkyCart",
        description: "A niche e-commerce platform built with Django. Focuses on unique, handmade items with a custom inventory management system.",
        tech: ["Django", "PostgreSQL", "Bootstrap"],
        link: "#",
        github: "#",
        thumbnail: "/project-quirky.png",
    },
    {
        title: "Portfolio v2",
        description: "My previous portfolio iteration. Focused on minimalism and clean typography. A stepping stone to my current creative identity.",
        tech: ["HTML", "CSS", "Vanilla JS"],
        link: "#",
        github: "#",
        thumbnail: "/project-rento.png",
    },

    // ROW 2: Experiments & Demos
    {
        title: "AI Chatbot",
        description: "A conversational agent built to assist with daily scheduling and reminders. Uses NLP for intent recognition.",
        tech: ["Python", "TensorFlow", "Flask"],
        link: "#",
        github: "#",
        thumbnail: "/project-swiftpass.png",
    },
    {
        title: "Three.js Journey",
        description: "A collection of 3D experiments and interactive scenes learning the basics of WebGL and shaders.",
        tech: ["Three.js", "React Three Fiber"],
        link: "#",
        github: "#",
        thumbnail: "/project-quickfix.png",
    },
    {
        title: "Task Master",
        description: "A productivity app with drag-and-drop Kanban boards. Helps manage complex projects with simplicity.",
        tech: ["React", "Redux", "Beautiful DnD"],
        link: "#",
        github: "#",
        thumbnail: "/project-quirky.png",
    },
    {
        title: "Weather Vue",
        description: "Real-time weather application providing detailed forecasts and interactive maps using external APIs.",
        tech: ["Vue.js", "OpenWeatherMap API"],
        link: "#",
        github: "#",
        thumbnail: "/project-rento.png",
    },
    {
        title: "Crypto Tracker",
        description: "Live cryptocurrency dashboard tracing top 50 coins. Features historical price charts and market cap analysis.",
        tech: ["Next.js", "CoinGecko API", "Recharts"],
        link: "#",
        github: "#",
        thumbnail: "/project-swiftpass.png",
    },

    // ROW 3: More Works
    {
        title: "Data Dashboard",
        description: "Visualizing complex datasets for business intelligence. Included heatmap and scatter plot components.",
        tech: ["D3.js", "React"],
        link: "#",
        github: "#",
        thumbnail: "/project-quickfix.png",
    },
    {
        title: "Social API",
        description: "Backend-only social network API handling user auth, posts, comments, and friend requests.",
        tech: ["Node.js", "Express", "MongoDB"],
        link: "#",
        github: "#",
        thumbnail: "/project-quirky.png",
    },
    {
        title: "LearnPlatform",
        description: "E-learning hub with video courses and progress tracking. Custom video player implementation.",
        tech: ["Next.js", "Mux Video", "Prisma"],
        link: "#",
        github: "#",
        thumbnail: "/project-rento.png",
    },
    {
        title: "Blog CMS",
        description: "Headless CMS for managing blog content. Supports markdown editing and image uploads.",
        tech: ["Sanity.io", "Next.js"],
        link: "#",
        github: "#",
        thumbnail: "/project-swiftpass.png",
    },
    {
        title: "FitTrack",
        description: "Mobile-first fitness tracking PWA. Logs workouts and visualizes progress over time.",
        tech: ["React", "PWA", "Chart.js"],
        link: "#",
        github: "#",
        thumbnail: "/project-quickfix.png",
    },
];


const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    return (
        <div className="bg-[#020617] w-full min-h-screen">
            <HeroParallax products={projects} onProjectClick={setSelectedProject} />

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f172a] border border-white/10 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[80vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
                            >
                                <FiX size={20} />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-48 md:h-auto bg-gray-900 border-b md:border-b-0 md:border-r border-white/10">
                                <Image
                                    src={selectedProject.thumbnail}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent md:hidden" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                <p className="text-indigo-400 text-sm font-mono mb-6">Full Stack Development</p>

                                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-indigo-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-sm font-medium">
                                        <FiGithub size={18} /> Source Code
                                    </a>
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-500/20 text-sm font-medium">
                                        <FiExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const HeroParallax = ({
    products,
    onProjectClick
}: {
    products: typeof projects;
    onProjectClick: (project: typeof projects[0]) => void;
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={{ x: translateX }}
                            key={product.title}
                            onClick={() => onProjectClick(product)}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row space-x-20 mb-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={{ x: translateXReverse }}
                            key={product.title}
                            onClick={() => onProjectClick(product)}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={{ x: translateX }}
                            key={product.title}
                            onClick={() => onProjectClick(product)}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors z-50 relative">
                <FiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-2xl md:text-7xl font-bold text-white">
                My Creative Archive
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
                A collection of my work, ranging from full-stack applications to
                experimental demos. Click on any card to view details.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
    onClick
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: any;
    onClick: () => void;
}) => {
    return (
        <motion.div
            style={{
                x: translate.x,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer"
            onClick={onClick}
        >
            <div className="block group-hover/product:shadow-2xl ">
                <div className="absolute inset-0 h-full w-full bg-black pointer-events-none opacity-0 group-hover/product:opacity-50 transition-opacity z-10" />

                <div className="object-cover object-left-top absolute h-full w-full inset-0 bg-gray-900 rounded-xl overflow-hidden border border-white/10">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover object-left-top opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                </div>

                <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-2xl z-20 transition-opacity">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
