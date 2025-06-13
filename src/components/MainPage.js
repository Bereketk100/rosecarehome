import React from 'react';

const MainPage = () => {
  return (
    <div className="bg-green-50 text-green-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white py-20 md:py-36">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/whiteroselogo.png"
              alt="Whiterose Care Homes Logo"
              className="h-24 md:h-36 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight">
            Welcome to Whiterose Care Homes
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 md:mb-10">
            Compassionate, person-centered care for individuals with intellectual and developmental disabilities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-rose-300 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-medium shadow-lg hover:bg-rose-400 transition-all transform hover:scale-105 border border-rose-400"
          >
            Get in Touch
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 md:h-20 bg-green-50 rounded-t-full"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-10 text-green-800">
            Our Mission & Vision
            <span className="block h-1 w-20 md:w-24 bg-rose-300 mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-lg md:text-xl font-light mb-4 md:mb-6 leading-relaxed">
                <strong className="text-rose-500">Mission:</strong> To provide quality, person-centered care that promotes independence, dignity, and self-confidence. We strive to create a nurturing environment where every individual feels valued and supported.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                <strong className="text-rose-500">Vision:</strong> To be a leading provider of residential care services, recognized for our commitment to excellence, individualized support, and community integration. We aim to empower individuals to achieve their fullest potential and lead fulfilling lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section - Changed to Our Facility */}
      <section className="bg-green-100 py-16 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 md:mb-12 text-green-800">
            Our Facility
            <span className="block h-1 w-20 md:w-24 bg-rose-300 mx-auto mt-4"></span>
          </h2>
          <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rose-300">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
              <img
                src="/dd.png"
                alt="Whiterose Care Home Facility"
                className="w-3/5 max-w-xs mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-12">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-green-800">Whiterose Care Home</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Our facility is designed to provide a safe, comfortable, and nurturing environment for our residents. We're located in a peaceful neighborhood with easy access to community resources, medical facilities, and recreational opportunities.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Led by Joyce Maina, RN/BSN, with over 13 years of experience in long-term care and group home management, our team is dedicated to providing exceptional care services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-green-800">
            Our Core Values
            <span className="block h-1 w-20 md:w-24 bg-rose-300 mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: "Respect & Dignity",
                description: "We honor the individuality and choices of every resident, ensuring they are treated with kindness and compassion.",
                emoji: "👐"
              },
              {
                title: "Quality & Excellence",
                description: "We maintain the highest standards of care, adhering to state regulations and industry best practices.",
                emoji: "⭐"
              },
              {
                title: "Community & Inclusion",
                description: "We foster an environment where residents actively participate in society, enhancing their social and vocational skills.",
                emoji: "🌱"
              },
              {
                title: "Safety & Well-being",
                description: "We ensure a secure and structured environment, prioritizing health, safety, and emotional stability.",
                emoji: "🛡️"
              },
              {
                title: "Growth & Empowerment",
                description: "We provide life skills training, educational programs, and vocational opportunities to help residents achieve greater independence.",
                emoji: "🚀"
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left border-t-2 border-rose-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <span className="text-2xl md:text-3xl" role="img" aria-label={value.title}>{value.emoji}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 text-green-800">{value.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-green-100 py-16 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 md:mb-14 text-green-800">
            Our Services
            <span className="block h-1 w-20 md:w-24 bg-rose-300 mx-auto mt-4"></span>
          </h2>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-12 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whiterose Care Homes LLC is a 24-hr residential facility dedicated to offering person centered care. We are open for clients with intellectual and developmental disabilities (IDD), complex behavioral and/or medical issues such as tracheostomy, peg-tubes, urostomy, colostomy, j-pegs, diabetes management (non-insulin and insulin dependents), wound care and mental health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: "24/7 Care and Supervision",
                description: "Our licensed nurses provide round-the-clock care, ensuring residents' safety and comfort at all times.",
                emoji: "⏰"
              },
              {
                title: "Medication Management",
                description: "We oversee medication schedules and administration to ensure residents receive proper treatment.",
                emoji: "💊"
              },
              {
                title: "Community Integration",
                description: "We organize social activities and outings to help residents build meaningful connections and engage with their community.",
                emoji: "🤝"
              },
              {
                title: "Behavioral Support",
                description: "Our trained staff use evidence-based approaches to provide emotional support and manage behavioral challenges.",
                emoji: "🧠"
              },
              {
                title: "Life Skills Training",
                description: "We teach essential skills like cooking, budgeting, and personal hygiene to promote independence.",
                emoji: "🧩"
              },
              {
                title: "Transportation Services",
                description: "We offer safe and reliable transportation for medical appointments, shopping, and community events.",
                emoji: "🚐"
              },
              {
                title: "Mental Health Support",
                description: "Specialized mental health services including counseling, therapy coordination, and emotional well-being support for our residents.",
                emoji: "🫂"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left border-t-2 border-rose-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <span className="text-2xl md:text-3xl" role="img" aria-label={service.title}>{service.emoji}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 text-green-800">{service.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with contact info instead of form */}
      <section id="contact" className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-10">
            Contact Us
            <span className="block h-1 w-20 md:w-24 bg-rose-300 mx-auto mt-4"></span>
          </h2>
          
          <div className="bg-white text-green-900 p-8 md:p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Address Section */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-800">Our Location</h3>
                <address className="text-base md:text-lg text-gray-600 not-italic text-center md:text-left">
                  2206 NE Kelly Avenue<br />
                  Gresham, OR 97030
                </address>
              </div>
              
              {/* Contact Details Section - Updated for better visibility */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-800">Contact Details</h3>
                <div className="text-base md:text-lg text-green-700 font-medium text-center md:text-left">
                  <p className="mb-1">
                    <a href="tel:7742532755" className="text-green-700">
                      Phone: (774) 253-2755
                    </a>
                  </p>
                  <p>
                    <a href="mailto:whiterosecarehomes@gmail.com" className="text-green-700">
                      whiterosecarehomes@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Integration */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe 
                title="Whiterose Care Homes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0454434088614!2d-122.42583688444392!3d45.51990227910159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a1aa033723ad%3A0x984ca4243a92c81e!2s2206%20NE%20Kelly%20Ave%2C%20Gresham%2C%20OR%2097030!5e0!3m2!1sen!2sus!4v1660000000000!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <img
              src="/dd.png"
              alt="Whiterose Care Homes Logo"
              className="h-10 md:h-14 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
