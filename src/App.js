//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts for Pages
import Home from "./Layouts/Home";
import Qt from "./Layouts/Qt";

//Styles
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>Yo</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qt" element={<Qt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
