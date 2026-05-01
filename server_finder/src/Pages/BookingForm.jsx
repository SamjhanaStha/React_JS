import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { services } from '../data/services';
import '../style/style.css'


const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    console.log('Booking submitted:', { service, ...formData });
    setSubmitted(true);
    
    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for booking with {service.provider}. You will receive a confirmation email shortly.
          </p>
          <p className="text-gray-500 text-sm">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(`/service/${id}`)}
        className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
      >
        ← Back to Service Details
      </button>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">Book Service</h1>
          <p className="text-blue-100">{service.name} with {service.provider}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Service Date *</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
            <input
              type="time"
              name="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Service Address *</label>
            <textarea
              name="address"
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
            <textarea
              name="notes"
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific requirements or instructions"
            ></textarea>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Booking Summary</h3>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Service:</span>
              <span className="text-gray-800">{service.name}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-600">Provider:</span>
              <span className="text-gray-800">{service.provider}</span>
            </div>
            <div className="flex justify-between text-sm mt-1 font-bold">
              <span className="text-gray-600">Total Price:</span>
              <span className="text-blue-600">₨ {service.price}</span>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;