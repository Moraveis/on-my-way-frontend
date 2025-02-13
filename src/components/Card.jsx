import { motion } from "framer-motion";

export default function Card({ type, fontSize, onYes, onNo }) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center"
    >
      {type === "valentine" ? (
        <>
          <h2
            className="text-red-500 font-bold mb-4"
            style={{ fontSize: `${fontSize}px` }}
          >
            Will you be my Valentine?
          </h2>
          <div className="flex justify-around mt-4">
            <button
              onClick={onYes}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
            >
              Yes
            </button>
            <button
              onClick={onNo}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-pink-500 font-bold text-xl mb-2">
            A Special Message for You
          </h2>
          <p className="text-gray-600 italic">
            "You make every moment special, and today is no exception. Being
            with you is my favorite place to be."
          </p>
          <p className="text-gray-600 mt-2">
            Wishing you a day filled with love, laughter, and endless joy! 💕
          </p>
        </>
      )}
    </motion.div>
  );
}
