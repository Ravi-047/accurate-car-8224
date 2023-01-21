import React, { useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsInstagram,
} from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookFill, RiYoutubeLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";
import { GrGift } from "react-icons/gr";
import { BiMessageRoundedError } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";

const Footer = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick1 = () => {
    setClick1(!click1);
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
  const handleClick3 = () => {
    setClick3(!click3);
  };
  const handleClick4 = () => {
    setClick4(!click4);
  };

  // const goToUp = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  return (
    <div>
      <div className={styles.___main__footer__}>
        <div className={styles.__footer__main__content__}>
          <div className={styles.__site__info__}>
            <div className={styles.__store__locator__}>
              <div>
                <a href="/" target="_blank" rel="noreferrer">
                  <div>
                    <GoLocation />
                  </div>{" "}
                  <p>Store Locator</p>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div>
                    <TfiPackage />
                  </div>{" "}
                  <p>Order Status</p>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div>
                    <GrGift />
                  </div>{" "}
                  <p>Gift Cards/Balance</p>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div>
                    <BiMessageRoundedError />
                  </div>{" "}
                  <p>Feedback</p>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div>
                    <BiWorld />
                  </div>{" "}
                  <p>United States | USD</p>
                </a>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick1}>
                Shopping Help
                {click1 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>

              <div
                className={
                  click1
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>Help Desk</p>
                </Link>
                <Link to="">
                  <p>Returns & Exchanges</p>
                </Link>
                <Link to="">
                  <p>Prices & Price Match Policy</p>
                </Link>
                <Link to="">
                  <p>Shipping & Handling</p>
                </Link>
                <Link to="">
                  {" "}
                  <p>Size Charts</p>
                </Link>
                <Link to="">
                  <p>Buy Online, Pick Up In Store</p>
                </Link>
                <Link to="">
                  <p>Student Discount</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick2}>
                Questions?
                {click2 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click2
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>Call Us</p>
                </Link>
                <div className={styles.__aero__contact__}>1.877.289.2376</div>
                <Link to="">
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick3}>
                About Us
                {click3 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click3
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>About Aéropostale</p>
                </Link>
                <Link to="">
                  <p>Carrers</p>
                </Link>
                <Link to="">
                  <p>Supply Chain</p>
                </Link>
                <Link to="">
                  <p>Aero Impact</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick4}>
                Get The Latest Styles & Offers:
                {click4 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click4
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <div className={styles.__emai__subscribe__}>
                  <input type="text" placeholder="Enter Email" />
                  <button>Subscribe</button>
                </div>
                <div className={styles.__get__style__offer__}>
                  For more information, please see our{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                  . California residents, see our{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    California Privacy Notice
                  </a>{" "}
                  and{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    Do Not Sell My Personal Information
                  </a>{" "}
                  page.
                </div>
                <h3>Follow Us</h3>
                <div className={styles.__follow__aero__}>
                  <div>
                    <a href="/" target="_blank" rel="noreferrer">
                      <BsInstagram />
                    </a>
                  </div>
                  <div>
                    <a href="/" target="_blank" rel="noreferrer">
                      <FiTwitter />
                    </a>
                  </div>
                  <div>
                    <a href="/" target="_blank" rel="noreferrer">
                      <RiFacebookFill />
                    </a>
                  </div>
                  <div>
                    <a href="/" target="_blank" rel="noreferrer">
                      <RiYoutubeLine />
                    </a>
                  </div>
                  <div>
                    <a href="/" target="_blank" rel="noreferrer">
                      <FaTiktok />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.__footer__bottom__}>
          <a href="/" target="_blank" rel="noreferrer">
            <p>Don’t Sell My Information</p>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <p>Terms of Use</p>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <p>Accessibility Statement</p>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <p>Privacy Policy</p>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <p>CA Transparency Act</p>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <p>© 2023 Aeropostale. All Rights Reserved.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
