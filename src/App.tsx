import { Route, Routes } from "react-router-dom";
import StarterSite from "./Components/StarterSite";
import TIle from "./Components/Tile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarterSite></StarterSite>}></Route>
        <Route path="/Tile" element={<TIle></TIle>}></Route>
      </Routes>
    </div>
  );
};

export default App;