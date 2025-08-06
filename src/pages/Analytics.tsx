import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { 
  BarChart3, 
  Eye, 
  Users, 
  MousePointer, 
  TrendingUp,
  Calendar,
  Globe,
  Clock
} from 'lucide-react';

const Analytics: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Views', value: '12,543', change: '+12%', icon: Eye },
    { name: 'Unique Visitors', value: '8,921', change: '+8%', icon: Users },
    { name: 'Page Views', value: '24,567', change: '+15%', icon: BarChart3 },
    { name: 'Avg. Session', value: '2m 34s', change: '+5%', icon: Clock },
  ];

  const recentActivity = [
    { action: 'Portfolio viewed', count: 23, time: '2 hours ago' },
    { action: 'Contact form submitted', count: 3, time: '4 hours ago' },
    { action: 'Resume downloaded', count: 12, time: '6 hours ago' },
    { action: 'LinkedIn clicked', count: 8, time: '8 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Analytics Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Track your portfolio performance and visitor engagement
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Chart Placeholder */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Views Over Time</h3>
              <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl flex items-center justify-center border border-gray-200/50 dark:border-gray-600/50">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-blue-400 dark:text-blue-300 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-300">Chart visualization would go here</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 shadow-sm"></div>
                      <span className="text-sm text-gray-900 dark:text-white">{activity.action}</span>
                      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                        ({activity.count})
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="mt-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="text-center p-4 border border-gray-200/50 dark:border-gray-700/50 rounded-xl bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-lg transition-all duration-300">
                <Globe className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">45%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Direct</div>
              </div>
              <div className="text-center p-4 border border-gray-200/50 dark:border-gray-700/50 rounded-xl bg-gradient-to-br from-green-50/50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 hover:shadow-lg transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-green-500 dark:text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">32%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Search</div>
              </div>
              <div className="text-center p-4 border border-gray-200/50 dark:border-gray-700/50 rounded-xl bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 hover:shadow-lg transition-all duration-300">
                <MousePointer className="w-8 h-8 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">23%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Social</div>
              </div>
            </div>
          </div>

          {user?.plan === 'free' && (
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Upgrade for Advanced Analytics
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200 mt-1">
                    Get detailed insights, custom date ranges, and export capabilities with Pro or Premium plans.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;