"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-white/5 bg-[#020617] relative z-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
                <p className="text-gray-400 text-sm font-light tracking-wide">
                    Designed & Built with love by Namita Mehra
                </p>
                <p className="text-gray-600 text-xs text-center">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
