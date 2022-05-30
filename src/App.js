//Router and Animations
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Header from "./Components/Header/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

//Styles
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />

        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
