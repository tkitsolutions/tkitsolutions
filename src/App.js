import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import "./style.scss";


function App() {

  return (
      <div className="appContainer">
       <Header/>
       <AboutUs/>
       <Services/>
       <Products/>
       <GetInTouch/>
       <Footer/>
        </div>
  );
}

export default App;
