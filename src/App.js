
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Intro/Intro';
import Education from './component/Education/Education';
import Skill from './component/Skill/Skill';
import Experience from './component/Experience/Experiences'

function App() {
  return (
    <div >
        <Navbar/>
        <Intro/>
        <Education/>
        <Skill/>
        <Experience/>
    </div>
  );
}

export default App;
