import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookingForm from './Pages/BookingForm';
import Navbar from './Component/Navbar';
import ServiceDetails from './Pages/ServiceDetail';
import './style/style.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;