import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import routes from "./routes"
import LandingPage from "./components/LandingPage"


function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
