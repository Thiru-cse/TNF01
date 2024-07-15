import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6694b1874bd61d8314c84020.mockapi.io/api/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3">
        {products.map((item, index) => {
          return (
            <>
            <div key={index}>
              <div class="col mb-4">
                <div class="card">
                  <img src={item.product_image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.product_name}</h5>
                    <h5 class="card-title">{item.product_price}</h5>
                    <p class="card-text">
                    {item.product_description}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
