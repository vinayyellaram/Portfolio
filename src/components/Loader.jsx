import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-2xl font-semibold tracking-widest"
            >
                Loading<span className="text-blue-400">...</span>
            </motion.div>
        </motion.div>
    );
}
