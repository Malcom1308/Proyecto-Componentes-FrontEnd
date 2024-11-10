import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandPage from './Pages/LandPage.jsx';
import Register from './Pages/Register.jsx';
import Recommendation from './Pages/Recommendation.jsx';
import Footer from './Components/Footer.jsx';
import "./Components/Styles/App.css";
import Navbar from './Components/NavBarLandPage.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
