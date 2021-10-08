import './App.css';
import routes from "./routes"



function App() {
  return (
    <div className="App">
      <div className="connect">
            <h1 id = 'connect-txt'>connect wallet</h1>
          </div>
      {routes}
    </div>
  );
}

export default App;
