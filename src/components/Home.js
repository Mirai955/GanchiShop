import { Alert, Button, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import produk1Img from "../assets/img/produk1.png";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user] = useAuthState(auth);
  const [notif, setNotif] = useState(5);

  return (
    <div className="Container">
      <div className="Container mt-5 d-inline-block text-center">
        <Alert className="warning w-100" variant="warning">
          Mohon maaf website masih dalam tahap pengembangan dan belum responsive
        </Alert>
        {user ? <h1> Anda Berhasil Login dan siap untuk menjual barang</h1> : <h1>Selamat Datang di Website Kami</h1>}

        <p>Disini kami menyediakan bermacam gantungan kunci</p>
        <p>Anda bisa membeli dan menjual produk disini</p>
        <p>Setelah login anda bisa menjual ganci disini</p>

        {/* link button section */}
        <div className="link">
          <Button>
            <Link to="/List" className="text-white text-decoration-none">
              Beli Ganci
            </Link>
          </Button>

          <Button className="bg-danger ms-5">
            <Link to="/Login" className="text-white text-decoration-none">
              Jual Ganci
            </Link>
          </Button>
        </div>
        {/* end link button section */}
        {/* section picture */}
        <div className="figure mt-5">
          <Figure>
            <Figure.Image width={171} height={180} alt="172x180" src={produk1Img} />
            <Figure.Caption>Gantungan Kunci</Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
