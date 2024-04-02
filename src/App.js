
import './App.css';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Surroundingcards } from './components/Surroundingcards';
import { Lastnavbar } from './components/Lastnavbar';
import { Images } from './components/Images';
import { Orangebox } from './components/Orangebox';
import { Contact } from './components/Contact';



function App() {
  return (
    <><><><><><><><div className="main">
      <Navbar />
      <Profile />
    </div></>

      <div className="random">
        <About />
      </div></>

      <div className="footer">
        <Footer />
      </div></>

      <div className="card-container">
        <Surroundingcards />
      </div></>

      <div className="content-navbar">
        <Lastnavbar />
        <Images />
      </div></>

      <div className="orangebox">
        <Orangebox />
      </div></>
      
      <div className="contact">
        <Contact/>
      </div></>
  );
}


export default App;
