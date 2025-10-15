import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
