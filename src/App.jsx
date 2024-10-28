import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import Info from './Info.jsx';

export default function App(){
  return(
    <>
    <div className="bg-[#F0F8FF]">
    <NavBar />
    <br />
    <Hero />
    <br />
    <About />
    <br />
    <Gallery />
    <br />
    <Info />
    </div>
    </>
  )
}