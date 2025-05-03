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

  const handleFacilityPhotoRequest = () => {
    scrollToSection(contactRef, 'contact');
    setTimeout(() => {
      const messageInput = document.querySelector('#message');
      const messageEvent = new Event('input', { bubbles: true });
      if (messageInput) {
        messageInput.value = "Hi, I would like to request photos of your facility. Please send them to my email. Thank you!";
        messageInput.dispatchEvent(messageEvent);
      }
    }, 100);
  };

  const services = [
    {
      title: "24/8 Care",
      description: "Round-the-clock care and support for all residents, ensuring safety and comfort at all times.",
      image: "/supervision.jpeg",
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
      title: "Assistance with Daily Living (ADLs)",
      description: "Comprehensive assistance with daily living activities and personal hygiene needs.",
      image: "/pic1.jpeg",
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
      title: "Medication Management",
      description: "Professional oversight and administration of prescribed medications and treatments.",
      image: "/pic2.jpeg",
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
      title: "Dietary Support",
      description: "Nutritious, well-balanced meals tailored to individual dietary needs and preferences.",
      image: "/pic4.jpeg",
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
      title: "Behavioral Support",
      description: "Specialized assistance and positive behavioral interventions by trained professionals.",
      image: "/pic3.jpeg",
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
      title: "Transportation Services",
      description: "Safe and reliable transportation for medical appointments, shopping, and community activities.",
      image: "/last.jpeg",
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-wider text-slate-900">
                <span className="text-sky-500">LIVE</span> LIFE CARE
              </span>
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
            <div className="hidden md:flex space-x-12">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'home' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'services' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'about' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'contact' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'mission' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
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

      <div className="pt-20">
        {/* Hero Section */}
        <section ref={homeRef} className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-white">
          <div className="container mx-auto text-center px-4 max-w-4xl">
            <h1 className="text-7xl font-light mb-6 tracking-tight">
              <span className="text-sky-500">Live Life</span>
              <span className="text-slate-800"> Care Home</span>
            </h1>
            <p className="text-xl mb-12 text-slate-600 max-w-2xl mx-auto font-light tracking-wide">
              Compassionate Care, Building Independence
            </p>
            <div className="flex justify-center space-x-8">
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')} 
                className="bg-sky-500 text-white px-12 py-3 text-sm tracking-wider font-light transition-all duration-300 hover:bg-sky-600 shadow-lg shadow-sky-200"
              >
                CONTACT US
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                className="bg-white text-slate-800 px-12 py-3 text-sm tracking-wider font-light transition-all duration-300 hover:bg-sky-50 border border-slate-200 shadow-lg"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16 tracking-wide">
              <span className="text-sky-500">Our</span> Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-32 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16 tracking-wide">About Us</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-light mb-6 text-sky-500">Our Story</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Live Life Residential Care was founded with a vision to transform the lives of individuals with intellectual and developmental disabilities through personalized care and unwavering support.
                  </p>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Our team works closely with behavior specialists, service coordinators, primary care physicians, and trained Direct Support Professionals (DSPs) to create an environment that fosters growth, stability, and well-being. Whether assisting with daily activities, providing behavioral support, or managing medical needs, we ensure that every aspect of care is handled with compassion and expertise.
                  </p>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    At Live Life Care Home, we believe in treating residents with dignity and respect, allowing them to thrive in a comfortable, home-like setting.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    We take pride in our comprehensive approach to care, focusing on each resident's unique needs, preferences, and goals. Our team of dedicated professionals works collaboratively to ensure the highest standards of care and support.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-6 text-sky-500">Our Commitment</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Person-centered care approach focused on individual needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 professional support and care</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Safe and nurturing home-like environment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive care and support services</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Executive Director Box */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="md:grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-sky-500 p-8 text-white min-h-full flex items-center justify-center">
                    <div className="text-center flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-semibold mb-2">Yohannes Demssie</h3>
                      <p className="text-sky-100 text-lg mb-4">Executive Director</p>
                      <button 
                        onClick={() => scrollToSection(contactRef, 'contact')}
                        className="inline-flex items-center text-white hover:text-sky-200 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Contact Us</span>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="prose prose-lg">
                      <p className="text-slate-600 leading-relaxed mb-6">
                        With over six years of dedicated experience in developmental disability services, Yohannes Demssie brings exceptional leadership and vision to Live Life Care Home. His commitment to creating a supportive and empowering environment has been instrumental in shaping our facility's success.
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        Yohannes's expertise spans across behavioral support, medical care coordination, and mental health services. His person-centered approach ensures that each resident receives individualized attention and care that promotes their independence and well-being.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Under his leadership, Live Life Care Home has developed comprehensive programs that focus on building independence, fostering personal growth, and enhancing the quality of life for all residents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-slate-600 text-lg mb-8">
                Live Life Residential Care is located in Oregon's Clackamas county happy valley area, in a vibrant and accessible neighborhood. Our facility is just a five-minute walk from public transportation and Pioneer Park, with convenient access to Fred Meyer, Safeway, Costco, and the Clackamas Library.
              </p>
              <div className="mt-8 text-center">
                <button 
                  onClick={handleFacilityPhotoRequest}
                  className="inline-block bg-sky-500 text-white py-3 px-8 hover:bg-sky-600 transition-colors duration-300 cursor-pointer"
                >
                  Request Facility Photos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section ref={contactRef} id="contact" className="py-32 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16 text-slate-900">Our Mission</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                At Live Life Care Home, our mission is to provide exceptional, person-centered care that empowers individuals with intellectual and developmental disabilities to live their fullest lives. We believe in creating a nurturing environment where every resident can thrive, grow, and maintain their independence.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are committed to delivering comprehensive support services that address the unique needs of each resident, fostering their personal growth, and enhancing their quality of life. Our dedicated team works tirelessly to ensure that every individual receives the highest standard of care while maintaining their dignity and autonomy.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Through our holistic approach to care, professional staff training, and continuous improvement of our services, we strive to be a leading provider of residential care services in Oregon. We measure our success by the wellbeing, happiness, and achievements of our residents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
