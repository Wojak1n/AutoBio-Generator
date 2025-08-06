import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { 
  Save, 
  Eye, 
  Wand2, 
  Upload, 
  Linkedin, 
  Link as LinkIcon,
  Palette
} from 'lucide-react';

const PortfolioEditor: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('content');
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 5+ years of experience in web development.',
    location: 'San Francisco, CA',
    email: user?.email || '',
    phone: '',
    website: '',
    linkedin: '',
    github: '',
    twitter: '',
    skills: ['React', 'Node.js', 'TypeScript', 'Python'],
    experience: '',
    education: '',
    projects: ''
  });
  
  const [theme, setTheme] = useState('modern');
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillsChange = (skills: string) => {
    setProfileData(prev => ({ 
      ...prev, 
      skills: skills.split(',').map(s => s.trim()).filter(s => s) 
    }));
  };

  const generateFromLinkedIn = () => {
    // Simulate LinkedIn parsing
    setProfileData(prev => ({
      ...prev,
      bio: 'AI-generated bio based on LinkedIn profile analysis. Experienced professional with expertise in modern web technologies.',
      title: 'Senior Software Engineer',
      experience: 'Software Engineer at TechCorp (2020-Present)\nJunior Developer at StartupXYZ (2018-2020)',
      education: 'Bachelor of Science in Computer Science\nUniversity of Technology (2014-2018)'
    }));
  };

  const enhanceWithAI = () => {
    // Simulate AI enhancement
    setProfileData(prev => ({
      ...prev,
      bio: prev.bio + ' Known for delivering high-quality solutions and collaborating effectively with cross-functional teams.',
      projects: 'E-commerce Platform - Built a scalable e-commerce solution serving 10k+ users\nTask Management App - Developed a productivity app with real-time collaboration features'
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Portfolio Editor</h1>
            <p className="text-gray-600 dark:text-gray-300">Customize your portfolio content and design</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={enhanceWithAI}
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Enhance with AI
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300/50 dark:border-gray-700/50 shadow-lg text-sm font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 backdrop-blur-lg">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          {/* Tabs */}
          <div className="border-b border-gray-200/50 dark:border-gray-700/50">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'content', name: 'Content', icon: Wand2 },
                { id: 'design', name: 'Design', icon: Palette },
                { id: 'import', name: 'Import', icon: Linkedin }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`$
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-800/50'
                  } whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm flex items-center transition-all duration-200 rounded-t-lg`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Professional Title</label>
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="Tell visitors about yourself..."
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Location</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Skills</label>
                  <input
                    type="text"
                    value={profileData.skills.join(', ')}
                    onChange={(e) => handleSkillsChange(e.target.value)}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="React, Node.js, TypeScript (comma separated)"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">LinkedIn</label>
                    <input
                      type="url"
                      value={profileData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">GitHub</label>
                    <input
                      type="url"
                      value={profileData.github}
                      onChange={(e) => handleInputChange('github', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                      placeholder="https://github.com/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Website</label>
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Experience</label>
                  <textarea
                    rows={4}
                    value={profileData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="List your work experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Projects</label>
                  <textarea
                    rows={4}
                    value={profileData.projects}
                    onChange={(e) => handleInputChange('projects', e.target.value)}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="Describe your key projects..."
                  />
                </div>
              </div>
            )}

            {/* Design Tab */}
            {activeTab === 'design' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Choose a Theme</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {['modern', 'classic', 'minimal'].map((themeOption) => (
                      <div
                        key={themeOption}
                        onClick={() => setTheme(themeOption)}
                        className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all duration-200 hover:scale-105 ${
                          theme === themeOption
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                            {themeOption}
                          </h4>
                          {theme === themeOption && (
                            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                          )}
                        </div>
                        <div className="mt-2">
                          <div className={`h-16 rounded-lg shadow-inner ${
                            themeOption === 'modern' ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                            themeOption === 'classic' ? 'bg-gradient-to-r from-gray-600 to-gray-800' :
                            'bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-600'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Image</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center shadow-inner">
                      <Upload className="w-8 h-8 text-gray-400 dark:text-gray-300" />
                    </div>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Image
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Custom Domain</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-300">Your portfolio URL:</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {user?.email?.split('@')[0]}.autobio.me
                    </span>
                  </div>
                  {user?.plan === 'premium' && (
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="yourdomain.com"
                        className="block w-full max-w-xs border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                      />
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Connect your custom domain (Premium feature)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Import Tab */}
            {activeTab === 'import' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Import from LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Paste your LinkedIn profile URL to automatically generate content using AI.
                  </p>
                  <div className="flex space-x-3">
                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/your-profile"
                      className="flex-1 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    />
                    <button
                      onClick={generateFromLinkedIn}
                      className="inline-flex items-center px-6 py-2 border border-transparent shadow-lg text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Import & Generate
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Manual Import</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Upload your resume or paste content to extract information.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
                    <div className="mt-4">
                      <button className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Resume (PDF/DOC)
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Or drag and drop your file here
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditor;