import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './pages/home/home';
import Navbar from './components/Navbar/Navbar';
import { UserContext } from './useContext';
import { useMemo, useState } from 'react';

import './App.css';
import { dataAbout, dataCompanies } from './defaultData';

function App() {
  const [user, setUser] = useState(dataCompanies);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About dataAbout={dataAbout} />} />
            <Route path="/contact" element={<Contact data={user} />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
