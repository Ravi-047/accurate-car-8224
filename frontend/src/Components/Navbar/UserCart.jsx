import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./usercart.css";
import { useDispatch, useSelector } from "react-redux";
import { getcartitems } from "../../Redux/cart/cart.actions";

const UserCart = () => {
  const data = useSelector((store) => store.cartManager.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcartitems());
  }, [dispatch]);

  // let sum = data.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue.value;
  // }, 0);

  if (localStorage.getItem("token") !== null) {
    return (
      <div>
        <div className="__all__cart__details__">
          <div className="__cart__total__"></div>
          <div className="__cart__shopingbag__">
            <Link to="/cart">View Shoping Bag</Link>
          </div>
          <div className="__cart__all__product__">
            {data?.map((item, index) => (
              <div className="__cart__each__product__" key={index}>
                <div>
                  <img src={item.image1} alt="productImage" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>
                    <span>Gender:</span>
                    <span>{item.gender}</span>
                  </p>
                  <p>
                    <span>Category:</span>
                    <span>{item.category}</span>
                  </p>
                  <div className="__cart__qty__price__">
                    <p>Price: ₹ {item.oprice}</p>
                    <p>Offer: {item.dprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default UserCart;
