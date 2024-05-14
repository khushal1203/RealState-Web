import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residancy from "./components/Residancy/Residancy";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gradient" />
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residancy/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
