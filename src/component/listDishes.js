import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";

import Form from "react-bootstrap/Form";

function ListDishes() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [dish, setdish] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const getDish = () => {
    axios
      .get("http://127.0.0.1:8000/api/dishes")
      .then(function (response) {
        console.log(response.data.data);
        setdish(response.data.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {});
  };
  useEffect(() => {
    if (!isLoaded) getDish();
  }, [isLoaded]);
  const [editCarData, setEditCarData] = useState({
    id: "",
    name: "",
    price: "",
    des: "",
    ingredients: "",
    image: "",
  });
  const handlerOnchange = (e) => {
    const val = e.target.value;
    setSearch(val);
    console.log(search);
  };
  const handlerPrice = (e) => {
    const val = e.target.value;
    setPrice(val);
    console.log(price);
  };

  return (
    <div className="containe">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Tìm kiếm tên</InputGroup.Text>
        <Form.Control
          placeholder="Search by username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={search}
          onChange={handlerOnchange}
          style={{ width: "50em" }}
        />
      </InputGroup>
      {/* <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Tìm kiếm giá</InputGroup.Text>
        <Form.Control
          placeholder="Search by price"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={price}
          onChange={handlerPrice}
          style={{ width: "50em" }}
        />
      </InputGroup> */}
      {/* <select name='price' onChange={handlerPrice}>
                <option value='12000'>12000</option>
                <option value='25000'>49000</option>
                <option value='30000'>32000</option>
                <option value='25000'>49000</option>
                <option value='30000'>32000</option>               
      </select> */}

      <table className="table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên món ăn</th>
            <th>Mô tả</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <h2>----------------------------CƠM--------------------</h2>
          </tr>
          {!!dish ? (
            dish
              .filter((dishes) =>
                search === ""
                  ? true
                  : dishes.name.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
              )
              .filter((dishes) =>
                price === "" ? true : dishes.price === price
              )
              .filter((dishes) => dishes.kind_id == 1)
              .map((dishes, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:8000/image/${dishes.image}`}
                      style={{ height: "180px", width: "200px" }}
                    ></img>
                  </td>
                  <td>{dishes.name}</td>
                  <td>{dishes.des}</td>
                  <td style={{ color: "red" }}>
                    <h4>{dishes.price}.VND</h4>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td>No Data in API</td>
            </tr>
          )}
          <tr style={{}}>
          <h2>----------------------------BÁNH MÌ--------------------</h2>
        </tr>
          {!!dish ? (
            dish
              .filter((dishes) =>
                search === ""
                  ? true
                  : dishes.name.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
              )
              .filter((dishes) =>
                price === "" ? true : dishes.price === price
              )
              .filter((dishes) => dishes.kind_id == 2)
              .map((dishes, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:8000/image/${dishes.image}`}
                      style={{ height: "180px", width: "200px" }}
                    ></img>
                  </td>
                  <td>{dishes.name}</td>
                  <td>{dishes.des}</td>
                  <br></br>
                  <td style={{ color: "red" }}>
                    <h4>{dishes.price}.VND</h4>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td>No Data in API</td>
            </tr>
          )}
          <tr>
            <h2>----------------------------BÚN PHỞ--------------------</h2>
          </tr>
          {!!dish ? (
            dish
              .filter((dishes) =>
                search === ""
                  ? true
                  : dishes.name.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
              )
              .filter((dishes) =>
                price === "" ? true : dishes.price === price
              )
              .filter((dishes) => dishes.kind_id == 3)
              .map((dishes, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:8000/image/${dishes.image}`}
                      style={{ height: "180px", width: "200px" }}
                    ></img>
                  </td>
                  <td>{dishes.name}</td>
                  <td>{dishes.des}</td>
                  <td style={{ color: "red" }}>
                    <h4>{dishes.price}.VND</h4>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td>No Data in API</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListDishes;
