import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />

        <Routes> <Route path="/"></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
