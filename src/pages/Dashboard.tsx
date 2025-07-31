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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user?.name}!
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Here's what's happening with your portfolio
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Link
              to="/editor"
              className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow hover:shadow-lg dark:hover:shadow-blue-900 transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <Edit3 className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Edit Portfolio
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Customize your portfolio content and design
                </p>
              </div>
            </Link>

            <Link
              to={`/preview/${user?.email?.split('@')[0]}`}
              className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-lg shadow hover:shadow-lg dark:hover:shadow-green-900 transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-600 ring-4 ring-white">
                  <Eye className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  View Portfolio
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  See how your portfolio looks to visitors
                </p>
              </div>
            </Link>

            <Link
              to="/analytics"
              className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-lg shadow hover:shadow-lg dark:hover:shadow-purple-900 transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-600 ring-4 ring-white">
                  <BarChart3 className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Analytics
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Track views, clicks, and engagement
                </p>
              </div>
            </Link>

            <Link
              to="/settings"
              className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500 rounded-lg shadow hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-600 ring-4 ring-white">
                  <Settings className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
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
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Analytics Overview</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.name} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-gray-400 dark:text-gray-300" />
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
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
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
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm transition-colors"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Upgrade Plan
                    </button>
                  )}
                  {user?.plan !== 'free' && (
                    <Link
                      to="/settings"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm transition-colors"
                    >
                      Manage Plan
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  <li>
                    <div className="relative pb-8">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white dark:ring-gray-900">
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
                          <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white dark:ring-gray-900">
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