import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import './css.css'
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

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
        <InputGroup.Text id="basic-addon1">Tìm kiếm tên</InputGroup.Text>
        <Form.Control
          placeholder="Search by username"
          aria-label="Username"
          aria-describedby="basic-addon1"
         type="number"
          value={price}
          onChange={handlerPrice}
          style={{ width: "50em" }}
        />
      </InputGroup>  */}
      <Link to={"/quantity"}>
        <button className='btn btn-warning mb-5' >Xem thống kê</button>
      </Link>
          <div className="row">
            {!!dish ? (
              dish
                .filter((dishes) =>
                  search === ""
                    ? true
                    : dishes.name
                        .toLowerCase()
                        .indexOf(search.toLowerCase()) !== -1
                )
                .filter((dishes) =>
                  price === "" ? true : dishes.price === price
                )

                .map((dishes, index) => (
                  <div className="md-col-3 sm-col-3  ml-5">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={`http://localhost:8000/image/${dishes.image}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{dishes.name}</h5>
                        <p className="card-text">{dishes.des}</p>
                        <a href="#" className="btn btn-primary">
                          {dishes.price}
                        </a>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <tr>
                <td>No Data in API</td>
              </tr>
            )}
          </div>
    </div>
  );
}

export default ListDishes;
