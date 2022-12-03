import { useState, useCallback, useEffect } from "react";
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";
import Produk1Img from "../assets/img/produk1.png";
import produkApi from "../Api/poduk-api";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const List = () => {
  const [stok, setStok] = useState(0);
  const [produk, setProduk] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  // delete kontak denganmethod delete
  const handleDeleteProduk = (id) => {
    const filterProduk = produk.filter((produk) => produk.id !== id);
    produkApi.delete("/produk/" + id).then(() => {
      setProduk(filterProduk);
    });
  };
  // Delete Contact sementara
  // const handleDelete = (id) => {
  //   const filterProduk = produk.filter((produk) => produk.id !== id);
  //   setProduk(filterProduk);
  // };

  // useEffect digunakan untuk req, get,delete,post,put
  // untuk saat ini kita akan melakukan get(mendapatkan data dari API)
  useEffect(() => {
    // kita mengakses endpoint atau alamat produk dengan get ini
    // res

    produkApi.get("produk").then((res) => {
      setProduk(res.data);
    });
  }, []);

  return (
    <div className="Container mt-5 pageListProduk ">
      <div className="mt-2">
        <h2>{user ? "List Jual Ganci" : "List Beli Ganci"}</h2>
        {produk.map((produk) => (
          <Row key={produk.id} className="justify-content-md-center d-inline-block">
            <Col className="me-2">
              <Card id="cardProduk" style={{ width: "13rem" }}>
                <Card.Img variant="top" src={Produk1Img} />
                <Card.Body>
                  <Card.Title>{produk.name}</Card.Title>
                  <Card.Text>${produk.price}</Card.Text>
                  <Card.Text>Stok : {produk.stok} </Card.Text>
                  {user && (
                    <>
                      <Link to={"/Edit/" + produk.id}>
                        <Button className="me-3" variant="danger">
                          Edit
                        </Button>
                      </Link>
                      <Button onClick={() => handleDeleteProduk(produk.id)} variant="secondary">
                        Delete
                      </Button>
                    </>
                  )}
                  {!user && (
                    <>
                      <Button onClick={() => handleDeleteProduk(produk.id)} variant="primary">
                        Buy
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default List;
