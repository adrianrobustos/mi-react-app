import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import TeamsList from "./views/TeamsList";
import TeamDetail from "./views/TeamDetail";
import Profile from "./views/Profile";
import Contact from "./views/Contact";
import About from "./views/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TeamsList />} />
        <Route path="/team/:id" element={<TeamDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
