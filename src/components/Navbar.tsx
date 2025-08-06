import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut, Settings, BarChart3, Edit3, Moon, Sun, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">AutoBio</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200 hover:scale-105"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/editor"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200 hover:scale-105"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Editor
            </Link>

            <Link
              to="/analytics"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200 hover:scale-105"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Link>

            <Link
              to="/settings"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200 hover:scale-105"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Link>

            {user?.isAdmin && (
              <Link
                to="/admin"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 hover:bg-purple-50/80 dark:hover:bg-purple-900/20 transition-all duration-200 hover:scale-105"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Link>
            )}

            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none px-3 py-2 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                <div className="px-4 py-3 text-xs text-gray-500 dark:text-gray-300 border-b border-gray-200/50 dark:border-gray-700/50">
                  {user?.email}
                  <div className="mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      user?.plan === 'premium' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      user?.plan === 'pro' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`}>
                      {user?.plan.toUpperCase()} Plan
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;