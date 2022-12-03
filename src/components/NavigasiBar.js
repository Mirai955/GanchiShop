import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";

const NavigasiBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const Logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <Container className="Container d-flex bg-dark">
        <Navbar className=" bg-dark Navbar">
          <Navbar.Brand className="text-white" href="/">
            Shop Ganci
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="navigasi  " to="/">
              Home
            </NavLink>
            {user && (
              <NavLink className="navigasi" to="/Create">
                Daftarkan Produk
              </NavLink>
            )}
            <NavLink className="navigasi" to="/List">
              List Produk
            </NavLink>
            {!user && (
              <NavLink className="signIn" to="/Login">
                <FontAwesomeIcon className="me-2" icon={faRightToBracket} />
                Sign in
              </NavLink>
            )}
          </Nav>
        </Navbar>
        {user && (
          <>
            <Navbar.Brand className="text-white ms-5 me-3" href="/">
              {user?.displayName}
            </Navbar.Brand>
            <img id="ppAkun" src={user?.photoURL || ""} />
            <Button onClick={Logout} className="bg-danger ms-2">
              Log out
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default NavigasiBar;
