import "./App.css";
import Header from "./components/header/header";
import Swipper from "../src/components/swipper/swipper";
import Calltoaction from "./components/calltoaction/calltoaction";
import GridSection from "./components/gridSection/gridSection";

function App() {
  return (
    <>
      <Header />
      <Swipper />
      <GridSection/>
      <Calltoaction/>
    </>
  );
}

export default App;
