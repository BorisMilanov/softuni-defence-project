import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes> <Route path="/"  element={<Home />}></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
