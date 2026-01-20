"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import Image from "next/image";

const Socials = () => {
    return (
        <section id="socials" className="py-32 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
                    Command Center
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Tracking activity, contributions, and network.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Visual "Holographic" Column */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                    {/* GitHub Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center gap-3">
                                <FiGithub className="text-3xl text-white" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
                                    <p className="text-xs text-gray-500 font-mono">LIVE FEED</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-green-500 font-mono">ONLINE</span>
                            </div>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <Image
                                src="https://github-readme-stats.vercel.app/api?username=Namiiii-sys&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=a1a1aa&icon_color=3b82f6"
                                alt="Github Stats"
                                width={500}
                                height={200}
                                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                unoptimized
                            />
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Namiiii-sys&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=a1a1aa"
                                alt="Top Languages"
                                width={500}
                                height={200}
                                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                unoptimized
                            />
                        </div>

                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    </motion.div>
                </div>

                {/* Profile "Badges" Column */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    <ProfileBadge
                        name="LinkedIn"
                        handle="@namita-mh"
                        icon={<FiLinkedin />}
                        link="https://www.linkedin.com/in/namita-mh"
                        color="text-blue-400"
                        borderColor="hover:border-blue-500/50"
                    />
                    <ProfileBadge
                        name="GitHub"
                        handle="@Namiiii-sys"
                        icon={<FiGithub />}
                        link="https://github.com/Namiiii-sys"
                        color="text-purple-400"
                        borderColor="hover:border-purple-500/50"
                    />
                    <ProfileBadge
                        name="LeetCode"
                        handle="@namita_mh"
                        icon={<SiLeetcode />}
                        link="https://leetcode.com/namita_mh/"
                        color="text-yellow-400"
                        borderColor="hover:border-yellow-500/50"
                    />
                    <ProfileBadge
                        name="GeeksforGeeks"
                        handle="@namita_mh"
                        icon={<SiGeeksforgeeks />}
                        link="https://auth.geeksforgeeks.org/user/namita_mh/"
                        color="text-green-400"
                        borderColor="hover:border-green-500/50"
                    />
                </div>
            </div>
        </section>
    );
};

const ProfileBadge = ({ name, handle, icon, link, color, borderColor }: { name: string, handle: string, icon: React.ReactNode, link: string, color: string, borderColor: string }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:bg-white/10 ${borderColor}`}
    >
        <div className={`p-3 rounded-xl bg-black/40 ${color} text-2xl group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <div className="flex-grow">
            <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{name}</h4>
            <div className="flex items-center gap-2">
                <p className="text-white font-medium">{handle}</p>
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
            </div>
        </div>
        <div className="h-8 w-[1px] bg-white/10" />
        <div className="text-xs text-gray-500 font-mono">
            LINK
        </div>
    </a>
)

export default Socials;
