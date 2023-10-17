import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/signup';
import PageTwo from './Components/UserSelections/index';
import Pagethree from './Components/Api_pages/Pagethree';
import Browser from './Components/Browser/Browser';

function App() {
  return (
    <Routes>
      <Route exac path="/" element={<Signup />} />
      <Route  path="/userinfo" element={<PageTwo />} />
      <Route  path="/page3" element={<Pagethree />} />
      <Route path='/browser' element = {<Browser />}/>
    
    </Routes>
  );
}

export default App;
