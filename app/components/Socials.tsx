"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import Image from "next/image";

const Socials = () => {
    const statsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="socials" className="py-20 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statsVariants}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                    Connect & Code
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore my coding journey, statistics, and professional profiles.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Github Stats */}
                <motion.div
                    variants={statsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-purple-500/30 transition-all duration-300"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FiGithub className="text-2xl text-white" />
                        <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Replace 'namita-mh' with actual username if different */}
                        <Image
                            src="https://github-readme-stats.vercel.app/api?username=Namiiii-sys&show_icons=true&theme=transparent&hide_border=true&title_color=a855f7&text_color=cbd5e1&icon_color=a855f7&hide_title=false"
                            alt="Github Stats"
                            width={500}
                            height={200}
                            className="w-full h-auto"
                            unoptimized
                        />
                        <Image
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Namiiii-sys&layout=compact&theme=transparent&hide_border=true&title_color=a855f7&text_color=cbd5e1"
                            alt="Top Languages"
                            width={500}
                            height={200}
                            className="w-full h-auto"
                            unoptimized
                        />
                    </div>
                </motion.div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ProfileCard
                        name="LinkedIn"
                        icon={<FiLinkedin />}
                        username="namita-mh"
                        link="https://www.linkedin.com/in/namita-mh"
                        color="hover:bg-blue-600/20 hover:border-blue-500"
                    />
                    <ProfileCard
                        name="GitHub"
                        icon={<FiGithub />}
                        username="Namiiii-sys"
                        link="https://github.com/Namiiii-sys"
                        color="hover:bg-gray-600/20 hover:border-gray-500"
                    />
                    <ProfileCard
                        name="LeetCode"
                        icon={<SiLeetcode />}
                        username="namita_mh"
                        link="https://leetcode.com/namita_mh/" // Placeholder
                        color="hover:bg-yellow-600/20 hover:border-yellow-500"
                    />
                    <ProfileCard
                        name="GeeksforGeeks"
                        icon={<SiGeeksforgeeks />}
                        username="namita_mh"
                        link="https://auth.geeksforgeeks.org/user/namita_mh/" // Placeholder
                        color="hover:bg-green-600/20 hover:border-green-500"
                    />
                </div>
            </div>
        </section>
    );
};

const ProfileCard = ({ name, icon, username, link, color }: { name: string; icon: React.ReactNode; username: string; link: string; color: string }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ${color}`}
        >
            <div className="p-3 rounded-lg bg-white/5 text-2xl text-white group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-sm text-gray-400">{name}</h4>
                <p className="text-white font-medium group-hover:text-purple-300 transition-colors">@{username}</p>
            </div>
            <FiExternalLink className="ml-auto text-gray-500 group-hover:text-white transition-colors" />
        </a>
    );
};

export default Socials;
