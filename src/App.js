import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home';
import Login3 from './Pages/About';
import Signin from './Pages/Auth/Signin';
import Login from './Pages/Auth/Login'

import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <nav>
        <p> Invest Youself</p>
        <div class='navbar'>
        <Link class="nvunder" to='/' > Home </Link>
        <Link class="nvunder" to='/auth/login' >Log in</Link>
        <Link class="nvunder" to='/auth/signin' >Sing in</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login3' element={<Login3 />} />
        <Route path='/auth/singin' element={<Signin />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
