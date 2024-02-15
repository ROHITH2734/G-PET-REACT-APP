import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Destinations } from "./components/Pages/Destinations";
import { Hotels } from "./components/Pages/Hotels";
import { Contact } from "./components/Pages/Contact";
import { Knowme } from "./components/Pages/Knowme";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowme" element={<Knowme />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
