import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };
  const services = [
    {
      title: "Firewatch",
      description: "Comprehensive fire monitoring and prevention services to keep your property safe.",
      path: "/services/firewatch",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    },
    {
      title: "Business Security",
      description: "Enterprise-grade solutions designed to protect your business assets seamlessly.",
      path: "/services/business",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    },
    {
      title: "Mobile Patrol",
      description: "On-the-go security services to ensure safety and surveillance across various locations.",
      path: "/services/mobile-patrol",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    },
    {
      title: "Apartment/Neighborhood Security",
      description: "Tailored security solutions for residential communities and apartment complexes.",
      path: "/services/neighborhood",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    },
    {
      title: "Event Security",
      description: "Professional security services for events, ensuring safety and smooth operations.",
      path: "/services/event",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    },
    {
      title: "SecureAI Platform",
      description: "Revolutionary security management software for complete control and visibility of your security operations.",
      path: "/services/additional",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.PNG" alt="SecureAI Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">SECUREAI</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'home' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'services' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'about' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'contact' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'mission' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                <button
                  onClick={() => {
                    scrollToSection(homeRef, 'home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef, 'services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(missionRef, 'mission');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Our Mission
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section ref={homeRef} className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          <div className="container mx-auto text-center relative z-10 px-4 max-w-4xl">
            <img 
              src="/logo.PNG" 
              alt="Security Shield Logo" 
              className="mx-auto mb--4 w-44 md:w-80 lg:w-96"
            />
            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              SECUREAI
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Intelligent protection for what matters most, designed with you in mind.
            </p>
            <button 
              onClick={() => scrollToSection(contactRef, 'contact')} 
              className="bg-blue-600 hover:bg-blue-500 py-3 px-8 rounded-full text-white font-medium transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">About Us</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                SecureAI was founded by two security professionals who saw gaps in the industry and set out to redefine private security. With years of hands-on experience, they combined their expertise in AI technology, data analysis, and security operations to create a smarter, more reliable solution.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800 p-8 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Bereket Kibret</h3>
                    <a 
                      href="https://www.linkedin.com/in/bereketkibret" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">Microsoft Software Engineer</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    A graduate of the University of Southern California, where he worked as a security specialist during his time there. Bringing his unique combination of security operations experience and software engineering expertise to revolutionize the security industry.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Samuel Tigistu</h3>
                    <a 
                      href="https://www.linkedin.com/in/samuel-tigistu-3060971a3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">Microsoft Software Engineer</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    A Yale University graduate bringing advanced technical expertise to our security solutions. His innovative approach to software engineering helps drive our AI-powered security systems forward.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Maher Dedgeba</h3>
                    <a 
                      href="https://www.linkedin.com/in/maher-dedgeba-18893a2bb/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300">Target HQ Data Analyst</p>
                  <p className="text-gray-400 mt-2">A San Jose State graduate ensuring seamless operations and data-driven solutions</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                By merging technology with in-person security, SecureAI is setting a new standard in safety and transparency—because security should evolve with the world around it. Our platform provides real-time monitoring, enhanced accountability, and faster response times, delivering a comprehensive security solution for the modern era.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section ref={contactRef} id="contact" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Mission Section - Moved to end */}
        <section ref={missionRef} className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">Our Mission</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At SecureAI, we are revolutionizing private security by integrating cutting-edge AI technology with professional, in-person security services. Our mission is to provide businesses, communities, and individuals with the highest level of safety, reliability, and transparency.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Through our AI-powered solutions, we enhance accountability, optimize response times, and ensure real-time monitoring, giving our clients complete peace of mind. We believe that security should be proactive, not reactive, and that technology should empower, not replace, human expertise.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                At SecureAI, we don't just provide security—we redefine it. Our commitment to innovation, excellence, and customer service drives us to continuously improve and adapt our solutions to meet the evolving security challenges of today's world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
