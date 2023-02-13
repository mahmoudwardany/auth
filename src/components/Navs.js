import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../feature/authSlice';
function Navs() {
  const auth = useSelector((state)=>state.auth)
 const dispatch=useDispatch()
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {auth._id?(
<Link onClick={()=>dispatch(logoutUser(null))}>Logout</Link>
          )
          :(
            <> 
          <Link to="/register" className='nav-link'>Register</Link>
          <Link to="/login" className='nav-link'>Login</Link>
            </>
         
          )}
          

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs