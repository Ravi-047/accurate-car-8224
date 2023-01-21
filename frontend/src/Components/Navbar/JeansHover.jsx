import React from "react";
import { Link } from "react-router-dom";
import "./jeanshover.css";
import { MdOutlineChevronRight } from "react-icons/md";
import img_jeans from "../../Assets/MENU_Jeans@2x-min.png";

const JeansHover = () => {
  return (
    <div className="__jeans__option__all__men__women__">
      <div className="__jeans__all__option__">
        <p className="__jeans__shop__all__">
          <Link>Shop All Jeans</Link>
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
                <Link>Buy 1, Get 1 Free</Link>
              </p>
              <p>
                <Link>Wide Leg Jeans</Link>
              </p>
              <p>
                <Link>Low + Loose JEans</Link>
              </p>
              <p>
                <Link>Flare Jeans</Link>
              </p>
              <p>
                <Link>Mom Jeans</Link>
              </p>
              <p>
                <Link>90's Baggy Jeans</Link>
              </p>
              <p>
                <Link>Jeggings</Link>
              </p>
              <p>
                <Link>Curvy Jeans</Link>
              </p>
              <p>
                <Link>Skinny Jeans</Link>
              </p>
              <p>
                <Link>Bootcut Jeans</Link>
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
                <Link>Buy 1, Get 1 Free</Link>
              </p>
              <p>
                <Link>Skinny Jeans</Link>
              </p>
              <p>
                <Link>Super Skinny Jeans</Link>
              </p>
              <p>
                <Link>Athletic Jeans</Link>
              </p>
              <p>
                <Link>Slim Jeans</Link>
              </p>
              <p>
                <Link>Straight Jeans</Link>
              </p>
              <p>
                <Link>Relaxed Jeans</Link>
              </p>
              <p>
                <Link>Denim Jogger</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="__hover__jeans__image__">
        <img src={img_jeans} alt="jeans" />
      </div>
    </div>
  );
};

export default JeansHover;
