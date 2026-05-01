import { Link } from 'react-router-dom';
import '../style/style.css'


const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
          <span className="text-yellow-500">★ {service.rating}</span>
        </div>
        <p className="text-gray-600 mb-2">{service.provider}</p>
        <p className="text-gray-500 text-sm mb-3">{service.location}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">₨ {service.price}</span>
          <Link 
            to={`/service/${service.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;