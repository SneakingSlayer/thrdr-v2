import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
   LOGIN_ROUTE,
   REGISTER_ROUTE,
   PROFILE_ROUTE,
   THREAD_ROUTE,
   SETTINGS_ROUTE,
} from '@/constants';

import { Login, Profile, Thread, Register, Settings } from '@/pages';

function App() {
   return (
      <Router>
         <Routes>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={REGISTER_ROUTE} element={<Register />} />
            <Route path={PROFILE_ROUTE} element={<Profile />} />
            <Route path={THREAD_ROUTE} element={<Thread />} />
            <Route path={SETTINGS_ROUTE} element={<Settings />} />
         </Routes>
      </Router>
   );
}

export default App;
