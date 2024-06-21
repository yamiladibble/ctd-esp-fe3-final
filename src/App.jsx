import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './Components/utils/global.context';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import './index.css';

 const App = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={state.theme}>
      <Router> 
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes> */
        <Footer />
       </Router>
    </div>
       
  );
};

export default App;

