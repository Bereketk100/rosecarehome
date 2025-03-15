import React from 'react';

const Services = () => {
  const services = [
    {
      title: "24/7 Supervisionn",
      description: "Professional care staff available around the clock to ensure resident safety and support.",
      image: "/Users/bereketkibret/Desktop/Code/YohanBiz/secureaiwe/src/components/images/supervision.jpeg"
    },
    {
      title: "Personal Care",
      description: "Individualized assistance with daily living activities and personal hygiene.",
      image: "/Users/bereketkibret/Desktop/Code/YohanBiz/secureaiwe/public/secure1.jpeg"
    },
    {
      title: "Medication Management",
      description: "Safe and accurate administration of medications by trained professionals.",
      image: "/images/medication.jpg"
    },
    {
      title: "Dietary Support",
      description: "Custom meal plans and assistance meeting nutritional needs.",
      image: "/images/dietary.jpg"
    },
    {
      title: "Behavioral Support",
      description: "Professional intervention and positive behavioral support strategies.",
      image: "/images/behavioral.jpg"
    },
    {
      title: "Transportation",
      description: "Scheduled transportation for appointments and community activities.",
      image: "/images/transportation.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
