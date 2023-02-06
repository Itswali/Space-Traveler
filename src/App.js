import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rocket from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"> </Route>
        <Route path="/Rockets" element={<Rocket />}> </Route>
        <Route path="/Missions" element={<Missions />}> </Route>
        <Route path="/Profile" element={<Profile />}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
