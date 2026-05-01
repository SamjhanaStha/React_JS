import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import '../style/style.css'


const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === parseInt(id, 10));

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Service not found</h2>
        <button onClick={() => navigate('/')} className="btn-primary mt-4">
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
      >
        ← Back to Services
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
              <span className="text-yellow-500 text-xl">★ {service.rating}</span>
            </div>
            
            <p className="text-gray-600 text-lg mb-2">{service.provider}</p>
            <p className="text-gray-500 mb-4">📍 {service.location}</p>
            
            <div className="border-t border-b py-4 my-4">
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Experience:</span>
                <span className="text-gray-800">{service.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Availability:</span>
                <span className="text-gray-800">{service.available}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Phone:</span>
                <span className="text-gray-800">{service.phone}</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-3xl font-bold text-blue-600">₨ {service.price}</span>
                <button 
                  onClick={() => navigate(`/book/${service.id}`)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;