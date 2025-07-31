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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Track your portfolio performance and visitor engagement
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((item) => (
              <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Chart Placeholder */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Views Over Time</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Chart visualization would go here</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-900">{activity.action}</span>
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        ({activity.count})
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="text-center p-4 border rounded-lg">
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900">45%</div>
                <div className="text-sm text-gray-500">Direct</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900">32%</div>
                <div className="text-sm text-gray-500">Search</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <MousePointer className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900">23%</div>
                <div className="text-sm text-gray-500">Social</div>
              </div>
            </div>
          </div>

          {user?.plan === 'free' && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900">
                    Upgrade for Advanced Analytics
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
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