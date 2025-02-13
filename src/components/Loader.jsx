import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-pink-200">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="text-4xl font-bold text-red-600"
      >
        Happy Valentine's Day!
      </motion.div>
    </div>
  );
}
