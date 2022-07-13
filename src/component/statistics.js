import { useState, useEffect } from "react";
import axios from "axios";

function Statistics() {
  const [dishes, setDishes] = useState([
    {
        id: "",
        name: "",
        price: "",
        des: "",
        ingredients: "",
        image: "",
    },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [noDataFound, setNoDataFound] = useState("");

  useEffect(() => {
    if (!isLoaded) getDishes();
  }, [isLoaded]);

  const getDishes = () => {
    axios
      .get("http://127.0.0.1:8000/api/dishes")
      .then(function (res) {
        if (res.status === 200) {
          setDishes(res.data.data ? res.data.data : []);
          console.log(res.data.data ? res.data.data : []);
          console.log(dishes);
        }
        if (res.data.status === "failed" && res.data.success === false) {
          setNoDataFound(res.data.data);
          console.log(noDataFound);
        }
        console.log(res.data.data);
        setDishes(res.data.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const rice = dishes.filter((dishes) => dishes.kind_id === 1);
  const noodle = dishes.filter((dishes) => dishes.kind_id === 2);
  const bread = dishes.filter((dishes) => dishes.kind_id === 3);
  return (
    <div>
    <h2>Thống kê sản phẩm theo Category</h2>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td><h3>CƠM
            </h3></td>
            <td><h3>BÁNH MÌ
            </h3></td>
            <td><h3>BÚN
            </h3></td>
        </tr>
        <tr>
          <td>
            <h3>
                {rice.length}
            </h3>
            </td>
          <td>
            <h3>
                {noodle.length}
            </h3>
            </td>
          <td>
          <h3>
          {bread.length}
            </h3>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Statistics;