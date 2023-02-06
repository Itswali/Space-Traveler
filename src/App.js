import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Missions from './components/Missions';
import './style/style.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"> </Route>
        <Route path="/Rockets"> </Route>
        <Route path="/Missions" element={<Missions />}> </Route>
        <Route path="/Profile" element={<Profile />}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
