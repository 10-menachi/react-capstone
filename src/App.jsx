import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import { fetchMissions } from './redux/missions/missionsSlice';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
