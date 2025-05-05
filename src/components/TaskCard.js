import { motion } from 'framer-motion';

function TaskCard({ id, title, description, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer relative"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(id)}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition"
      >
        Delete
      </button>
    </motion.div>
  );
}

export default TaskCard;
