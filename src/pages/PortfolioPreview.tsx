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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium text-gray-900">Portfolio Preview</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">
                  {portfolioData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{portfolioData.name}</h1>
                <p className="text-xl opacity-90">{portfolioData.title}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{portfolioData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{portfolioData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{portfolioData.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href={portfolioData.github} className="text-gray-400 hover:text-gray-600">
                  <Github className="w-4 h-4" />
                </a>
                <a href={portfolioData.linkedin} className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={portfolioData.website} className="text-gray-400 hover:text-gray-600">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{portfolioData.bio}</p>
          </div>

          {/* Skills */}
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="px-8 py-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Project →
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
