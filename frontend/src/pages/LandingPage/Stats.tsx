import React from "react";
import { motion } from "framer-motion";
import { Description, TrendingUp, AccessTime } from "@mui/icons-material";

const stats = [
    {
        icon: <Description fontSize="large" className="text-blue-600" />,
        value: "15",
        label: "Resumes Created",
    },
    {
        icon: <TrendingUp fontSize="large" className="text-green-600" />,
        value: "29%",
        label: "Success Rate",
    },
    {
        icon: <AccessTime fontSize="large" className="text-purple-600" />,
        value: "5",
        label: "Avg. Search Time",
    },
];

const Stats = () => {
    return (
        <div className="  flex items-center justify-center px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-4xl w-full">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="mb-4">{stat.icon}</div>
                        <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
