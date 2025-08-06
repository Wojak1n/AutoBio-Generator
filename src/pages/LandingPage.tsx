import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Palette, BarChart3, Shield, Star } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">AB</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">AutoBio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105"
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
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Create your</span>{' '}
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent xl:inline">professional portfolio</span>
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
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:scale-105"
                    >
                      Start Building Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/preview/demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-blue-700 dark:text-blue-200 bg-blue-100/80 dark:bg-blue-900/50 hover:bg-blue-200/80 dark:hover:bg-blue-800/50 md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
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
          <div className="h-56 w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
            <div className="text-center text-white">
              <Globe className="w-24 h-24 mx-auto mb-4 opacity-90 drop-shadow-lg" />
              <p className="text-xl font-semibold drop-shadow-md">Beautiful Portfolio Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-4xl">
              Everything you need to shine online
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">AI-Powered Generation</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Import from LinkedIn or fill a simple form. Our AI creates compelling content for your portfolio.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <Palette className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">Beautiful Themes</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Choose from professionally designed themes. Light and dark modes with full customization.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">Custom Domains</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Get your own subdomain or connect a custom domain for maximum professionalism.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white shadow-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">Analytics & Insights</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Track visitor engagement, page views, and contact form submissions with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-950 dark:via-purple-950/30 dark:to-blue-950/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent sm:text-4xl">
              Plans that grow with you
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {/* Free Plan */}
            <div className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg divide-y divide-gray-200/50 dark:divide-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-semibold text-gray-900 dark:text-white">Free</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Perfect for getting started</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">$0</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 border border-gray-800/50 dark:border-gray-700/50 rounded-xl py-3 text-sm font-semibold text-white text-center hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-200 hover:scale-105 shadow-lg"
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
            <div className="border border-blue-200/50 dark:border-blue-700/50 rounded-xl shadow-xl divide-y divide-gray-200/50 dark:divide-gray-700/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg relative hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-blue-500/20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 shadow-lg">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl leading-6 font-semibold text-gray-900 dark:text-white">Pro</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Best for professionals</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$5</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-600/50 dark:border-blue-700/50 rounded-xl py-3 text-sm font-semibold text-white text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
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
            <div className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg divide-y divide-gray-200/50 dark:divide-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-semibold text-gray-900 dark:text-white">Premium</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">For power users</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$15</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-600/50 dark:border-purple-700/50 rounded-xl py-3 text-sm font-semibold text-white text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg"
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mb-8 border-b border-gray-700/50 dark:border-gray-800/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <span className="text-xl font-bold text-white">AutoBio</span>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700/50 dark:border-gray-800/50 pt-8">
            <p className="text-base text-gray-400 dark:text-gray-300 text-center">
              &copy; 2025 AutoBio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;