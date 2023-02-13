import './App.css';
import { Container } from 'react-bootstrap';
import Navs from './components/Navs';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Container>
      <Navs/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />

      </Routes>
    </Container>
  );
}

export default App;
