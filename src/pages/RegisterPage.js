import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import API from '../services/api';

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      toast.success('Registration Successful! Please Login.');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/" className="text-teal-500 font-semibold">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
