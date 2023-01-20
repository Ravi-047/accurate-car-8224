import React from "react";
import { Link } from "react-router-dom";
import "./jeanshover.css";
import img_clearnace from "../../Assets/MENU_Clearance@2x-min.png";
import { MdOutlineChevronRight } from "react-icons/md";

const Clearance = () => {
  return (
    <div className="__jeans__option__all__men__women__">
      <div className="__jeans__all__option__">
        <p className="__jeans__shop__all__">
          <Link>Shop All Clearance</Link>
        </p>
        <div>
          <div className="__jeans__all__men__">
            <p>
              <Link>
                <span>Women</span>
                <span>
                  <MdOutlineChevronRight />
                </span>
              </Link>
            </p>
            <div className="__option__for__men__">
              <p>
                <Link>Shop All Women</Link>
              </p>
              <p>
                <Link>New to Clearnace</Link>
              </p>
              <p>
                <Link>Tops</Link>
              </p>
              <p>
                <Link>Bottoms</Link>
              </p>
              <p>
                <Link>Jeans</Link>
              </p>
              <p>
                <Link>Hoodies + Sweats</Link>
              </p>
              <p>
                <Link>Outerwear</Link>
              </p>
              <p>
                <Link>Bralettes + Undies</Link>
              </p>
              <p>
                <Link>Shoes + Accessories</Link>
              </p>
              <p>
                <Link>$ 9.99 + under</Link>
              </p>
              <p>
                <Link>Final Sale</Link>
              </p>
            </div>
          </div>

          <div className="__jeans__all__women__">
            <p>
              <Link>
                <span>Men</span>
                <span>
                  <MdOutlineChevronRight />
                </span>
              </Link>
            </p>
            <div className="__option__for__women__">
              <p>
                <Link>Shop All Men</Link>
              </p>
              <p>
                <Link>New to Clearnace</Link>
              </p>
              <p>
                <Link>Tops</Link>
              </p>
              <p>
                <Link>Bottoms</Link>
              </p>
              <p>
                <Link>Jeans</Link>
              </p>
              <p>
                <Link>Hoodies + Sweats</Link>
              </p>
              <p>
                <Link>Outerwear</Link>
              </p>
              <p>
                <Link>Shoes + Accessories</Link>
              </p>
              <p>
                <Link>$ 9.99 + under</Link>
              </p>
              <p>
                <Link>Final Sale</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="__hover__jeans__image__">
        <img src={img_clearnace} alt="clearance" />
      </div>
    </div>
  );
};

export default Clearance;
