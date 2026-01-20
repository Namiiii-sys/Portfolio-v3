"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    link?: string;
}

const certificates: Certificate[] = [
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2024",
        link: "#"
    },
    {
        title: "Machine Learning A-Z",
        issuer: "Coursera",
        date: "2023",
        link: "#"
    },
    {
        title: "React Native Specialist",
        issuer: "Meta",
        date: "2023",
        link: "#"
    },
    {
        title: "Cloud Computing Fundamentals",
        issuer: "AWS",
        date: "2024",
        link: "#"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                    Certifications
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Continuous learning and professional development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-start gap-4 group"
                    >
                        <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
                            <FaAward className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">{cert.title}</h3>
                            <p className="text-gray-400 mt-1">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm mt-2">{cert.date}</p>
                        </div>
                        {cert.link && (
                            <a href={cert.link} className="ml-auto text-gray-500 hover:text-white transition-colors">
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// Helper component for link icon if needed, or import from react-icons
const FaExternalLinkAlt = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export default Certificates;
