import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="group bg-white hover:bg-sky-50 transition-all duration-500 shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
      <div className="h-72 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: 'center 30%' }} // This helps prevent top cutoff
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-light mb-4 tracking-wide text-sky-500">{title}</h3>
        <p className="text-slate-600 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
