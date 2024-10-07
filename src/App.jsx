import "./App.css";
import Header from "./components/header/header";
import Swipper from "../src/components/swipper/swipper";
import Calltoaction from "./components/calltoaction/calltoaction";
import GridSection from "./components/gridSection/gridSection";
import Carrosel2 from "./components/carrosel2/carrosel2";
import Footer from "./components/footer/footer"

function App() {
  return (
    <>
      <Header />
      <Swipper />
      <GridSection/>
      <Calltoaction/>
      <Carrosel2/>
      <Footer/>
    </>
  );
}

export default App;
