import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from "./components/Products";
import Services from "./components/Services";
import "./style.scss";
import Header from "./components/Header";
import Slider from "./components/slider";


function App() {

  return (
      <div className="appContainer">
        <Header/>
        <Slider/>
       <AboutUs/>
       <Services/>
       <Products/>
       <GetInTouch/>
       <Footer/>
        </div>
  );
}

export default App;
