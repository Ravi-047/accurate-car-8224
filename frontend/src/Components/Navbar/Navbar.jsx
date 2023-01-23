import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../Assets/AeroFashionLogo.png";

import "./navbar.css";
import User from "./User";
import UserCart from "./UserCart";
import ProductHoverwomen from "./ProductHoverwomen";
import ProductHoverMen from "./ProductHoverMen";
import JeansHover from "./JeansHover";
import Clearance from "./Clearance";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcartitems } from "../../Redux/cart/cart.actions";

const Navbar = () => {
  const data = useSelector((store) => store.cartManager.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcartitems());
  }, [dispatch]);

  return (
    <>
      {/* topnav */}
      <div className="nav__top__offer">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div className="nav__top__data">
            <strong>AERO X Klarna</strong> Buy Now, Pay Later with{" "}
            <strong>Klarna</strong>
          </div>
          <div className="nav__top__data">
            All Jeans: NOW 50% OFF! Online Only. Limited Time.
          </div>
          <div className="nav__top__data">
            Graphic Tees: Buy 1, Get 2 Free!
            <Link to="/women" style={{ color: "white", marginLeft: "10px" }}>
              Women
            </Link>
            <Link to="/" style={{ color: "white", marginLeft: "10px" }}>
              Men
            </Link>
          </div>
          <div className="nav__top__data">
            50-70% Off Sitewide + Free Ship Over $50!
            <Link to="/women" style={{ color: "white", marginLeft: "10px" }}>
              Women
            </Link>
            <Link to="/" style={{ color: "white", marginLeft: "10px" }}>
              Men
            </Link>
          </div>
        </Carousel>
      </div>

      {/* nav  */}
      <nav>
        <div className="main__navbar">
          <div className="nav_ham_option">
            <GiHamburgerMenu />
          </div>
          <div className="product__nav__all">
            <div className="__nav__product__hover__ onHoverWomen">
              <Link to="/women">
                <ul className="__women__">Women</ul>
              </Link>
              <div className="__product__nav__hover__">
                <ProductHoverwomen />
              </div>
            </div>

            <div className="__nav__product__hover__ onHoverMen">
              <Link to="/men">
                <ul>Men</ul>
              </Link>
              <div className="__product__nav__hover__">
                <ProductHoverMen />
              </div>
            </div>

            <div className="__nav__product__hover__ onHoverJeans">
              <Link to="/jeans">
                <ul>Jeans</ul>
              </Link>
              <div className="__nva__jeans__hover__">
                <JeansHover />
              </div>
            </div>

            <div className="__nav__product__hover__ onHoverClearance">
              <Link to="/clearence">
                <ul className="nav__clearance">Clearance</ul>
              </Link>
              <div className="__nva__jeans__hover__ clearance____">
                <Clearance />
              </div>
            </div>
          </div>
          <div>
            <Link to="/" className="nav__logo_container">
              <img className="nav__logo" src={logo} alt="AeroFashion" />
            </Link>
          </div>
          <div className="nav__search__cart__user">
            <div className="nav__search">
              <input type="text" placeholder="Search" />
              <FiSearch />
            </div>
            <span className="nav__location fixing__span">
              <GoLocation className="nav__shopingbag" />
            </span>
            <span className="_nav_user fixing__span">
              <BsPersonCircle className="nav__shopingbag" />
              <div className="__show__user__nav">
                <User />
              </div>
            </span>
            <span className="nav__cart__bag fixing__span">
              <Link to="/cart">
                <HiOutlineShoppingBag className="nav__shopingbag" />
              </Link>
              <span className="cart__quantity">
                {localStorage.getItem("token") !== null ? data.length : 0}
              </span>
              <div className="__show__user__cart__">
                <UserCart />
              </div>
            </span>
          </div>
        </div>
        <div className="__nav__res__search__">
          <div className="__res_nav__search">
            <input type="text" placeholder="Search" />
            <FiSearch />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
