import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 flex flex-col h-full">
      <div>
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="mt-auto pt-6">
        <button 
          onClick={() => navigate(path)}
          className="text-blue-500 font-medium flex items-center hover:text-blue-400 transition-colors"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
