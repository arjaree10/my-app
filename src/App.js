import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Foot from './pages/Foot';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Foot />
    </div>
  );
}

export default App;
