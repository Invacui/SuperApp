import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/signup';
import UserSel from './Components/UserSelections/index'

function App() {
  return (
    <Routes>
      <Route exac path="/" element={<Signup />} />
      <Route path="/userinfo" element={<UserSel />} />
    </Routes>
  );
}

export default App;
