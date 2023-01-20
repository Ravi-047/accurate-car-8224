import { Link } from "react-router-dom";
import React from "react";
import "./usercart.css";

const UserCart = () => {
  const total = 87.98;
  const product = [
    {
      _id: 1,
      image:
        "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwf90caf9c/60181067_500_main.jpg?sw=305&sh=305&sm=fit&sfrm=jpg",
      title: "Los Angeles Lakers Graphic Tee",
      Color: "Purple",
      Size: "Small",
      Qty: 1,
      price: 14.0,
    },
    {
      _id: 2,
      image:
        "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw7dc13c31/87731606_468_main.jpg?sw=305&sh=305&sm=fit&sfrm=jpg",
      title: "Los Angeles Lakers Graphic Tee",
      Color: "Purple",
      Size: "Small",
      Qty: 1,
      price: 14.0,
    },
    {
      _id: 3,
      image:
        "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwfa853501/64912174_437_main.jpg?sw=305&sh=305&sm=fit&sfrm=jpg",
      title: "Los Angeles Lakers Graphic Tee",
      Color: "Purple",
      Size: "Small",
      Qty: 1,
      price: 14.0,
    },
  ];
  return (
    <div>
      <div className="__all__cart__details__">
        <div className="__cart__total__">
          <p>Order Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="__cart__shopingbag__">
          <Link to="/">View Shoping Bag</Link>
        </div>
        <div className="__cart__all__product__">
          {product?.map((item, index) => (
            <div className="__cart__each__product__" key={index}>
              <div>
                <img src={item.image} alt="productImage" />
              </div>
              <div>
                <p>{item.title}</p>
                <p>
                  <span>Color:</span>
                  <span>{item.Color}</span>
                </p>
                <p>
                  <span>Size:</span>
                  <span>{item.Size}</span>
                </p>
                <div className="__cart__qty__price__">
                  <p>Qty: {item.Qty}</p>
                  <p>Price: ₹ {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCart;
