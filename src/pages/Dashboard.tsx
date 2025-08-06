import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { 
  Edit3, 
  Eye, 
  BarChart3, 
  Settings, 
  Zap, 
  Globe, 
  Users,
  TrendingUp
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Portfolio Views', value: '2,651', icon: Eye, change: '+12%' },
    { name: 'Profile Visits', value: '1,423', icon: Users, change: '+5%' },
    { name: 'Contact Forms', value: '89', icon: BarChart3, change: '+23%' },
    { name: 'Link Clicks', value: '567', icon: TrendingUp, change: '+8%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Welcome back, {user?.name}!
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Here's what's happening with your portfolio
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Link
              to="/editor"
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
            >
              <div>
                <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-600 dark:text-blue-400 ring-4 ring-white/50 dark:ring-gray-800/50">
                  <Edit3 className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Edit Portfolio
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Customize your portfolio content and design
                </p>
              </div>
            </Link>

            <Link
              to={`/preview/${user?.email?.split('@')[0]}`}
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-green-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
            >
              <div>
                <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 text-green-600 dark:text-green-400 ring-4 ring-white/50 dark:ring-gray-800/50">
                  <Eye className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  View Portfolio
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  See how your portfolio looks to visitors
                </p>
              </div>
            </Link>

            <Link
              to="/analytics"
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
            >
              <div>
                <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 text-purple-600 dark:text-purple-400 ring-4 ring-white/50 dark:ring-gray-800/50">
                  <BarChart3 className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Analytics
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Track views, clicks, and engagement
                </p>
              </div>
            </Link>

            <Link
              to="/settings"
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
            >
              <div>
                <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 text-gray-600 dark:text-gray-400 ring-4 ring-white/50 dark:ring-gray-800/50">
                  <Settings className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  Settings
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Manage account and subscription settings
                </p>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Analytics Overview</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.name} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                            {item.name}
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                              {item.value}
                            </div>
                            <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              {item.change}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Status */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl leading-6 font-semibold text-gray-900 dark:text-white">
                    Current Plan: {user?.plan?.toUpperCase()}
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                    <p>
                      {user?.plan === 'free' && 'You\'re on the free plan. Upgrade to unlock more features!'}
                      {user?.plan === 'pro' && 'You\'re on the Pro plan. Enjoy premium themes and analytics!'}
                      {user?.plan === 'premium' && 'You\'re on the Premium plan. Access all features!'}
                    </p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                  {user?.plan === 'free' && (
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm transition-all duration-200 hover:scale-105"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Upgrade Plan
                    </button>
                  )}
                  {user?.plan !== 'free' && (
                    <Link
                      to="/settings"
                      className="inline-flex items-center px-6 py-3 border border-gray-300/50 dark:border-gray-700/50 shadow-lg font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm transition-all duration-200 hover:scale-105"
                    >
                      Manage Plan
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl leading-6 font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  <li>
                    <div className="relative pb-8">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ring-4 ring-white/50 dark:ring-gray-800/50 shadow-lg">
                            <Globe className="h-4 w-4 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Portfolio viewed <span className="font-medium text-gray-900 dark:text-white">23 times</span>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-300">
                            <time>2h ago</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center ring-4 ring-white/50 dark:ring-gray-800/50 shadow-lg">
                            <Edit3 className="h-4 w-4 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Portfolio <span className="font-medium text-gray-900 dark:text-white">updated</span>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-300">
                            <time>1d ago</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;