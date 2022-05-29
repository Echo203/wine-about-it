//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header/Header";

//Layouts for Pages
import Home from "./Layouts/Home";
import Qt from "./Layouts/Qt";
import Maya from "./Layouts/Maya";
import Stats from "./Layouts/Stats";
import Contact from "./Layouts/Contact";

//Styles
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qt" element={<Qt />} />
          <Route path="/maya" element={<Maya />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
