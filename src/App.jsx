import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Samples from "./pages/Samples";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/samples" element={<Samples />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
