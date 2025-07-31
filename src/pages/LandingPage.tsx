import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Palette, BarChart3, Shield, Star } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AB</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">AutoBio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Create your</span>{' '}
                  <span className="block text-blue-600 dark:text-blue-400 xl:inline">professional portfolio</span>
                  <span className="block xl:inline"> in minutes</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Generate beautiful, AI-powered portfolio websites from your LinkedIn profile or manual input. 
                  Perfect for freelancers, students, and job seekers.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Start Building Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/preview/demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-900 dark:to-purple-900 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-center text-white">
              <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-medium">Beautiful Portfolio Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to shine online
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">AI-Powered Generation</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Import from LinkedIn or fill a simple form. Our AI creates compelling content for your portfolio.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Palette className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Beautiful Themes</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Choose from professionally designed themes. Light and dark modes with full customization.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Custom Domains</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Get your own subdomain or connect a custom domain for maximum professionalism.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Analytics & Insights</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Track visitor engagement, page views, and contact form submissions with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Plans that grow with you
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {/* Free Plan */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Free</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Perfect for getting started</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$0</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-gray-800 dark:bg-gray-700 border border-gray-800 dark:border-gray-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 dark:hover:bg-gray-900 transition-colors"
                >
                  Start free
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Basic portfolio site</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">AI content generation</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">AutoBio subdomain</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border border-blue-200 dark:border-blue-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Pro</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Best for professionals</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$5</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-blue-600 dark:bg-blue-700 border border-blue-600 dark:border-blue-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                  Start pro trial
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">Everything in Free, plus</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Premium themes</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Custom subdomain</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Basic analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Premium</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">For power users</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$15</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-gray-800 dark:bg-gray-700 border border-gray-800 dark:border-gray-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 dark:hover:bg-gray-900 transition-colors"
                >
                  Start premium trial
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">Everything in Pro, plus</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Custom domain support</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex space-x-3">
                    <Shield className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-300">AI contact form</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mb-8 border-b border-gray-700 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <span className="text-xl font-bold text-white">AutoBio</span>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 dark:border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2025 AutoBio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;