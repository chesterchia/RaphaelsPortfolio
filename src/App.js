import './App.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import VideoDisplay from './components/VideoDisplay'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoDisplay />
      <Footer />
    </div>
  );
}

export default App;
