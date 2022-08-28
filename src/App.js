import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Work from "./componets/Work";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
