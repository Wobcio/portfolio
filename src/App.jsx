import { useState } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"


const App = () => {

   const [activeNav, setActiveNav] = useState('#home')

   return (
      <>
         <Header setActiveNav={setActiveNav} />
         <Nav setActiveNav={setActiveNav} activeNav={activeNav}/>
         <About setActiveNav={setActiveNav} />
         <Skills setActiveNav={setActiveNav} />
         <Portfolio setActiveNav={setActiveNav} />
         <Contact setActiveNav={setActiveNav} />
         <Footer />
      </>
   )

}

export default App