import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import API from '../services/api';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';

function DashboardPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      toast.error('Failed to fetch tasks.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', form);
      toast.success('Task created!');
      setForm({ title: '', description: '' });
      setRefresh(!refresh);
    } catch (error) {
      toast.error('Failed to create task.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await API.delete(`/tasks/${taskId}`);
      toast.success('Task deleted!');
      setRefresh(!refresh);
    } catch (error) {
      toast.error('Failed to delete task.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-yellow-300 p-8">
      {/* Navbar */}
      <Navbar />

      {/* Create Task Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto mb-8"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Create a New Task</h2>
        <form onSubmit={handleCreateTask} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Task Description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition"
          >
            Create Task
          </button>
        </form>
      </motion.div>

      {/* Tasks List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
