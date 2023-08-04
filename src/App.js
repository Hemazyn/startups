import Navbar from "./Navbar.jsx";
import './App.css';
import Home from "./Hero.jsx";
import TopCompanies from "./TopCompanies.jsx";
import Values from "./Values.jsx";
import Techleads from "./Techleads.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TopCompanies />
      <Values />
      <Techleads />
      <Footer />
    </div>
  );
}

export default App;
