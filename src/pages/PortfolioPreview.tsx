import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from 'lucide-react';

const PortfolioPreview: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  // Mock data - in a real app, this would be fetched based on the username
  const portfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
    skills: ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL"],
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description: "Lead development of microservices architecture serving 1M+ users. Built React applications with Node.js backends."
      },
      {
        title: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        description: "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL."
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-featured e-commerce platform with React, Node.js, and Stripe integration.",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        link: "https://github.com/johndoe/ecommerce"
      },
      {
        title: "Task Management App",
        description: "Real-time collaborative task management application with WebSocket integration.",
        tech: ["React", "Socket.io", "Express", "MongoDB"],
        link: "https://github.com/johndoe/taskapp"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Portfolio Preview</h1>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center shadow-lg">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-8 py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl relative z-10">
                <span className="text-3xl font-bold text-blue-600">
                  {portfolioData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-2">{portfolioData.name}</h1>
                <p className="text-xl text-white/90">{portfolioData.title}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{portfolioData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500 dark:text-green-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{portfolioData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500 dark:text-red-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{portfolioData.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href={portfolioData.github} className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href={portfolioData.linkedin} className="text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={portfolioData.website} className="text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{portfolioData.bio}</p>
          </div>

          {/* Skills */}
          <div className="px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-gradient-to-b from-blue-400 to-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center transition-colors"
                  >
                    View Project 
                    <span className="ml-1">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;
