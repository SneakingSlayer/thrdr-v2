import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from 'react-router-dom';

import {
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  PROFILE_ROUTE,
  THREAD_ROUTE,
  SETTINGS_ROUTE,
} from '@/constants';

import { Login, Profile, Thread, Register, Settings } from '@/pages';

import { InnerLayout, OuterLayout } from '@/components';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<OuterLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>
        <Route element={<InnerLayout />}>
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path={SETTINGS_ROUTE} element={<Settings />} />
          <Route path={THREAD_ROUTE} element={<Thread />} />
        </Route>
        <Route path={'*'} element={<>ERROR 404</>} />
      </Routes>
    </Router>
  );
}

export default App;
