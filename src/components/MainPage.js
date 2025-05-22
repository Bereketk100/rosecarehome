import React from 'react';
import ContactForm from './ContactForm';

const MainPage = () => {
  return (
    <div className="bg-green-50 text-green-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-36">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Welcome to Whiterose Care Homes
          </h1>
          <p className="text-2xl font-light mb-10">
            Compassionate, person-centered care for individuals with intellectual and developmental disabilities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-500 text-white px-12 py-4 rounded-full font-medium shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-green-50 rounded-t-full"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-10 text-green-800">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/icons/mission.svg"
                alt="Mission Icon"
                className="w-32 h-32"
              />
            </div>
            <div>
              <p className="text-xl font-light mb-6 leading-relaxed">
                <strong>Mission:</strong> To provide quality, person-centered care that promotes independence, dignity, and self-confidence. We strive to create a nurturing environment where every individual feels valued and supported.
              </p>
              <p className="text-xl font-light leading-relaxed">
                <strong>Vision:</strong> To be a leading provider of residential care services, recognized for our commitment to excellence, individualized support, and community integration. We aim to empower individuals to achieve their fullest potential and lead fulfilling lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="bg-green-100 py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-12 text-green-800">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="/founder.jpg"
                alt="Joyce Maina"
                className="rounded-full w-64 h-64 mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-4xl font-semibold mb-6 text-green-800">Joyce Maina, RN/BSN</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Joyce Maina brings over 13 years of experience in long-term care, group home management, and behavioral support care. Her leadership and expertise have shaped Whiterose Care Homes into a trusted provider of compassionate care.
              </p>
              <ul className="text-lg text-gray-600 list-disc list-inside space-y-3">
                <li>Direct supervision, delegation, and leadership</li>
                <li>Patient assessment and crisis intervention</li>
                <li>Exceptional customer service and bilingual communication</li>
                <li>Registered Nurse (Oregon License: 202106122RN)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-12 text-green-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Respect & Dignity",
                description: "We honor the individuality and choices of every resident, ensuring they are treated with kindness and compassion.",
                icon: "/icons/respect.svg",
              },
              {
                title: "Quality & Excellence",
                description: "We maintain the highest standards of care, adhering to state regulations and industry best practices.",
                icon: "/icons/quality.svg",
              },
              {
                title: "Community & Inclusion",
                description: "We foster an environment where residents actively participate in society, enhancing their social and vocational skills.",
                icon: "/icons/community.svg",
              },
              {
                title: "Safety & Well-being",
                description: "We ensure a secure and structured environment, prioritizing health, safety, and emotional stability.",
                icon: "/icons/safety.svg",
              },
              {
                title: "Growth & Empowerment",
                description: "We provide life skills training, educational programs, and vocational opportunities to help residents achieve greater independence.",
                icon: "/icons/growth.svg",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
              >
                <img src={value.icon} alt={value.title} className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-semibold mb-4 text-green-800">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-green-100 py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-14 text-green-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "24/7 Care and Supervision",
                description: "Our licensed nurses provide round-the-clock care, ensuring residents' safety and comfort at all times.",
                icon: "/icons/care.svg",
              },
              {
                title: "Medication Management",
                description: "We oversee medication schedules and administration to ensure residents receive proper treatment.",
                icon: "/icons/medication.svg",
              },
              {
                title: "Community Integration",
                description: "We organize social activities and outings to help residents build meaningful connections and engage with their community.",
                icon: "/icons/integration.svg",
              },
              {
                title: "Behavioral Support",
                description: "Our trained staff use evidence-based approaches to provide emotional support and manage behavioral challenges.",
                icon: "/icons/behavior.svg",
              },
              {
                title: "Life Skills Training",
                description: "We teach essential skills like cooking, budgeting, and personal hygiene to promote independence.",
                icon: "/icons/skills.svg",
              },
              {
                title: "Transportation Services",
                description: "We offer safe and reliable transportation for medical appointments, shopping, and community events.",
                icon: "/icons/transportation.svg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
              >
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-semibold mb-4 text-green-800">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-green-700 to-green-500 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-10">Contact Us</h2>
          <p className="text-xl font-light mb-12">
            Have questions or want to learn more? Reach out to us today! Our team is here to provide the information and support you need.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
