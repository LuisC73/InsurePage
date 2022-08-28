import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Work from "./componets/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Work />
      </main>
    </div>
  );
}

export default App;
