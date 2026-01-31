import React from "react";
import { motion } from "framer-motion";

export default function Loader({ progress = 0 }) {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-2xl font-semibold tracking-widest"
                >
                    Loading<span className="text-blue-400">...</span>
                </motion.div>

                {/* Progress Bar / Text */}
                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                    />
                </div>
                <div className="text-sm text-gray-400 font-mono">
                    {progress.toFixed(0)}%
                </div>
            </div>
        </motion.div>
    );
}
