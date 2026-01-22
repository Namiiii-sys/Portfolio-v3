"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import { CURATED_PROJECTS } from "./projectData";
import SectionHeading from '../components/SectionHeading';

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
};

type Product = {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    language: string;
};

const ProjectsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // 1. Fetch all repos from GitHub (up to 100 to ensure we find our 15)
                const response = await fetch('https://api.github.com/users/Namiiii-sys/repos?sort=updated&per_page=100');
                if (!response.ok) throw new Error('Failed to fetch repositories');

                const githubRepos: Repo[] = await response.json();

                // 2. Map strictly over CURATED_PROJECTS to preserve order
                const mergedProducts = CURATED_PROJECTS.map((config) => {
                    // Find matching repo (case-insensitive)
                    const repo = githubRepos.find(
                        r => r.name.toLowerCase() === config.repoName.toLowerCase()
                    );

                    // Determine primary link: LiveLink -> GitHub Repo -> Fallback
                    let primaryLink = repo ? repo.html_url : `https://github.com/Namiiii-sys/${config.repoName}`;
                    if (config.LiveLink) {
                        primaryLink = config.LiveLink.startsWith('http') ? config.LiveLink : `https://${config.LiveLink}`;
                    }

                    return {
                        title: repo ? repo.name : config.repoName,
                        thumbnail: config.thumbnail,
                        link: primaryLink,
                        description: repo ? (repo.description || "No description available.") : "Fetching details...",
                        language: repo ? repo.language : "Code",
                    };
                });

                setProducts(mergedProducts);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#020617] w-full min-h-screen">
            <HeroParallax products={products} />
        </div>
    );
};

// Reusing the same HeroParallax components
const HeroParallax = ({ products }: { products: Product[] }) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div ref={ref} className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="">
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product, idx) => (
                        <ProductCard product={product} translate={{ x: translateX }} key={idx} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row space-x-20 mb-20">
                    {secondRow.map((product, idx) => (
                        <ProductCard product={product} translate={{ x: translateXReverse }} key={idx} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product, idx) => (
                        <ProductCard product={product} translate={{ x: translateX }} key={idx} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

const Header = () => (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors z-50 relative font-medium">
            <FiArrowLeft /> Back to Home
        </Link>
        <SectionHeading
            title="Detailed Archive"
            subtitle="Everything from full stack to my experiments - whatever I've tried to get my hands dirty with."
            className="mb-8 text-left max-w-4xl"
        />
    </div>
);

const ProductCard = ({ product, translate }: { product: Product; translate: { x: MotionValue<number> } }) => (
    <motion.div
        style={{ x: translate.x }}
        whileHover={{ y: -20 }}
        className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
        <Link href={product.link} target="_blank" className="block group-hover/product:shadow-2xl">
            <div className="absolute inset-0 h-full w-full bg-black pointer-events-none opacity-0 group-hover/product:opacity-50 transition-opacity z-10" />
            <div className="object-cover object-left-top absolute h-full w-full inset-0 bg-gray-900 rounded-xl overflow-hidden border border-white/10">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity p-4"
                />
            </div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 z-20 transition-opacity p-4">
                <h2 className="text-white font-bold text-2xl mb-1">{product.title}</h2>
                {product.language && (
                    <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded mb-2 inline-block">
                        {product.language}
                    </span>
                )}
                <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
            </div>
        </Link>
    </motion.div>
);

export default ProjectsPage;
