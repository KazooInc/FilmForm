
import "./style/App.scss";
import "./style/input.scss";
import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing";
import  Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
