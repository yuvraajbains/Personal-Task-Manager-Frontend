import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-xl mb-8">
      <h1 className="text-2xl font-bold text-pink-500 cursor-pointer" onClick={() => navigate('/dashboard')}>
        Task Manager
      </h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/profile')}
          className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
