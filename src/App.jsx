import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import { fetchRockets } from './redux/rockets/rocketSlice';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const App = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Rockets rockets={rockets} />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<MyProfile rockets={rockets} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
