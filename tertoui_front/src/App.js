
import './App.css';
import React, { useMemo, useState } from 'react';

import { hasAuthenticated } from './services/AuthAPI';
import Auth from './contexts/Auth';
import NavBar from './components/NavBar';


function App() {
  const [isAuth, setIsAuth] = useState(hasAuthenticated());
  const value = useMemo(() => ({isAuth, setIsAuth}, [isAuth, setIsAuth]));

  return (
    <Auth.Provider value={value}>
      <pre>{JSON.stringify(isAuth)}</pre>
        <div className="container-fluid">
          <NavBar />
          </div>
    </Auth.Provider>
  );
}

export default App;
