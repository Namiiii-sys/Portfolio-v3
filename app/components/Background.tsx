import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#02000a]">
            {/* Deep Space & Stars */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05030a] via-[#0f0c29] to-[#02000a]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20 mixed-blend-overlay" />
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        backgroundImage:
                            'radial-gradient(1.5px 1.5px at 10% 10%, white 100%, transparent), radial-gradient(1px 1px at 20% 40%, white 100%, transparent), radial-gradient(2px 2px at 50% 50%, white 100%, transparent)',
                        backgroundSize: '400px 400px',
                    }}
                />
            </div>

            {/* Atmosphere / Fog */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/15 rounded-full blur-[100px]" />
            </div>
        </div>
    );
};

export default Background;
