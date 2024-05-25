import './App.css'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import VideoDisplay from './components/VideoDisplay'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoDisplay />
    </div>
  );
}

export default App;
