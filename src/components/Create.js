import React from "react";
import { Form, FormLabel, Button } from "react-bootstrap";
import { useState } from "react";
import podukApi from "../Api/poduk-api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Create = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stok, setStok] = useState("");

  useEffect(() => {
    if (id) {
      podukApi.get("/produk/" + id).then((response) => {
        const { data } = response;
        setName(data.name);
        setPrice(data.price);
        setStok(data.stok);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const produk = { name, price, stok };

    if (id) {
      updateProduk(produk);
    } else {
      createProduk(produk);
    }
  };

  const createProduk = (produk) => {
    podukApi.post("/produk", produk).then((res) => {});
  };
  const updateProduk = (produk) => {
    podukApi.put("/produk/" + id, produk).then((res) => {});
  };

  return (
    <div className="pageForm Container">
      {/* jika id memeliki value maka judulnya update jika tidak memliki value maka judulnya create */}
      <h1 className="mt-5">{id ? "Update" : "Create"} Produk</h1>
      <div className="formDaftarBarang d-flex justify-content-center text-start">
        <Form onSubmit={handleSubmit} className="form justify-content-center">
          <Form.Group className="mb-3">
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Produk" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Masukkan Harga Produk" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stok Produk</Form.Label>
            <Form.Control type="number" value={stok} onChange={(e) => setStok(e.target.value)} placeholder="Masukkan Stok Produk" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Create;
