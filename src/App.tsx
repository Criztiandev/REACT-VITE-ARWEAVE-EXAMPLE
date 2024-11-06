import { HashRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./page/main";
import AboutScreen from "./page/about";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
