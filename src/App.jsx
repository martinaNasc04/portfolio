import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen transition-opacity bg-[url(src/assets/nick-nickkey-nQBj7rVOkmE-unsplash.png)]">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact/>
      </div>
    </>
  );
}

export default App;
