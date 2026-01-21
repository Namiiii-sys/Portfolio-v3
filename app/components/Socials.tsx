"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import Image from "next/image";

const Socials = () => {
    return (
        <section id="socials" className="py-20 px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                    Command Center
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm">
                    Tracking activity, contributions, and network.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#040a16ff] border border-white/5 rounded-2xl overflow-hidden relative"
            >
                {/* Top Section: Activity Graph */}
                <div className="p-6 md:p-8 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <FiGithub className="text-2xl text-white/80" />
                            <h3 className="text-lg font-semibold text-white/90">Contribution Graph</h3>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            <span className="text-xs font-medium text-violet-500">LIVE</span>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-black/40 p-4 flex justify-center">
                        <Image
                            src="https://ghchart.rshah.org/8b5cf6/Namiiii-sys"
                            alt="Github Contribution Graph"
                            width={1000}
                            height={300}
                            className="w-full h-auto object-cover opacity-90 invert hue-rotate-180 brightness-110 contrast-75"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Bottom Section: Stats & Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

                    {/* Column 1: Github Stats */}
                    <div className="p-6 flex flex-col items-center justify-start h-full hover:bg-white/[0.02] transition-colors">
                        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Github Overview</h4>
                        <div className="w-full max-w-[300px]">
                            <Image
                                src="https://github-readme-stats.vercel.app/api?username=Namiiii-sys&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&text_color=9ca3af&icon_color=8b5cf6&count_private=true&hide_rank=true"
                                alt="Github Stats"
                                width={320}
                                height={150}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Column 2: LeetCode Stats */}
                    <div className="p-6 flex flex-col items-center justify-start h-full hover:bg-white/[0.02] transition-colors">
                        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">LeetCode Analysis</h4>
                        <div className="w-full max-w-[300px]">
                            <Image
                                src="https://leetcard.jacoblin.cool/Namiiii-sys?theme=dark&font=geist-sans"
                                alt="LeetCode Stats"
                                width={320}
                                height={150}
                                className="w-full h-auto rounded-lg opacity-90"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Column 3: Social Profiles */}
                    <div className="p-6 flex flex-col items-center justify-start h-full hover:bg-white/[0.02] transition-colors">
                        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Network</h4>
                        <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                            <SocialButton
                                icon={<FiLinkedin />}
                                label="LinkedIn"
                                href="https://www.linkedin.com/in/namita-mh"
                                color="text-blue-400"
                            />
                            <SocialButton
                                icon={<FiGithub />}
                                label="GitHub"
                                href="https://github.com/Namiiii-sys"
                                color="text-white"
                            />
                            <SocialButton
                                icon={<SiLeetcode />}
                                label="LeetCode"
                                href="https://leetcode.com/u/Namiiii-sys/"
                                color="text-yellow-400"
                            />
                            <SocialButton
                                icon={<SiGeeksforgeeks />}
                                label="GFG"
                                href="https://auth.geeksforgeeks.org/user/namita_mh/"
                                color="text-green-400"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const SocialButton = ({ icon, label, href, color }: { icon: React.ReactNode, label: string, href: string, color: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
    >
        <div className={`text-lg mb-1.5 ${color} opacity-80 group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <span className="text-[10px] text-gray-400 font-medium group-hover:text-white transition-colors">
            {label}
        </span>
    </a>
)

export default Socials;
