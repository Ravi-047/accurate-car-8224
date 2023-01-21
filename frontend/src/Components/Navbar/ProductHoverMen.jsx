import React from "react";
import { Link } from "react-router-dom";
import "./producthover.css";
import men_img from "../../Assets/MENU_Men@2x-min.png";

const ProductHoverMen = () => {
  return (
    <div className="__product__hover__section__">
      <div className="__product__hover__women__">
        <p className="__women__color__">
          <Link>Shop All Men</Link>
        </p>
        <p>
          <Link>New Arrivals</Link>
        </p>
        <div>
          <Link>
            <p>Tops</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Bottoms</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Hoodies + Sweats</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Dresses + Rompers</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Loungeware</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Swimwear</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Outerwear</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Accessories</p>
          </Link>
        </div>
        <div>
          <Link>
            <p>Bralettes + Undies</p>
          </Link>
        </div>
      </div>

      <div className="__second__hover__product__section__">
        <div className="__product__hover__women__">
          <div>
            <Link>
              <p className="__women__color__">Collections</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>#TrendingNow</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>aero dwntme essential</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>The NBA Shop</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>The Cargo Edit</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>Aero Impact</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>Best Sellers</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>Matching Sets</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>Online Only</p>
            </Link>
          </div>
          <div>
            <Link>
              <p>Uniform</p>
            </Link>
          </div>
        </div>
        <div className="__hover__women__image__">
          <img src={men_img} alt="womenImage" />
        </div>
      </div>
    </div>
  );
};

export default ProductHoverMen;
