import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './Pages/Auth/Register';
import Auth from './Pages/Auth/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes> <Route path="/"  element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
