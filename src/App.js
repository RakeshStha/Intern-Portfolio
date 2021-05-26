
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Intro/Intro';
import Education from './component/Education/Education';
import Skill from './component/Skill/Skill';
import Experience from './component/Experience/Experiences';
import Interest from './component/Interest/Interest';
import Footer from './component/Footer/Footer';

import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div > 
      <ScrollToTop 
      smooth color="black" 
      style={{width:"50px", height:"50px", padding:"8px", borderRadius:"50%"}}
      />
        <Navbar/>
        <Intro/>
        <Education/>
        <Skill/>
        <Experience/>
        <Interest/>
        <Footer/>
    </div>
  );
}

export default App;
