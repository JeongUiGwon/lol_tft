import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MetaTrends from "./pages/MetaTrends";
import GameGuide from "./pages/GameGuide";
import Ranking from "./pages/Ranking";
import Tools from "./pages/Tools";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meta-trends" element={<MetaTrends />} />
      <Route path="/game-guide" element={<GameGuide />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
  );
}

export default App;
