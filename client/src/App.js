import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

        <Routes> <Route path="/"></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        </Routes>

    </Router>
  );
}

export default App;
