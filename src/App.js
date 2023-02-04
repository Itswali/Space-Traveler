import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"> </Route>
        <Route path="/Rockets"> </Route>
        <Route path="/Missions" > </Route>
        <Route path="/Profile">  </Route>
      </Routes>
    </div>
  );
}

export default App;
