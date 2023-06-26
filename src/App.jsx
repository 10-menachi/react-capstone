import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
