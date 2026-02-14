import { motion } from 'framer-motion';

const Card = ({ title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
        >
            <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    );
};

export default Card;
