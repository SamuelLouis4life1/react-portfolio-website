import logo from './logo.svg';
import "../src/css/App.css"
import Header from "../src/components/Header"
import Nav from "../src/components/Nav"
import About from "../src/components/About"
import Experience from "../src/components/Experience"
import Services from "../src/components/Services"
import Portfolio from "../src/components/Portfolio"
import Testimonial from "../src/components/Testimonial"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"


function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App;
