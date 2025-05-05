import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import API from '../services/api';

function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await API.get('/profile');
      setProfile(res.data);
    } catch (error) {
      toast.error('Failed to fetch profile.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await API.delete('/profile');
      toast.success('Account deleted!');
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete account.');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 p-8 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Your Profile</h1>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Total Tasks:</strong> {profile.tasks.length}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Tasks</h2>
        <ul className="list-disc pl-6">
          {profile.tasks.map((task) => (
            <li key={task._id} className="mb-2">
              {task.title} - <span className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Delete My Account
            </button>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-red-600 font-semibold">Are you sure you want to delete your account?</p>
              <div className="flex space-x-4">
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProfilePage;
