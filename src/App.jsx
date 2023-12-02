import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Pets from "./components/Pets";
import Donation from "./components/Donation";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Pets />
      <Donation />
      <Contact />
    </div>
  );
}

export default App;
