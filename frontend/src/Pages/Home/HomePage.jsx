import React, { useEffect, useState } from "react";
import "./homePage.css";
import img_animation from "../../Assets/ONENESS-DESKTOP-ANIMATION.gif";
import { Link } from "react-router-dom";
import profile_img from "../../Assets/DESKTOP@2x.jpg";
import con2_img from "../../Assets/shortgirl.jpg";
import love_img from "../../Assets/aerofashionlovebag.png";
import guys_img from "../../Assets/guysshort.jpg";
import girl_sec from "../../Assets/girlsecondpost.jpg";
import tshirt_img from "../../Assets/tshirtpost.jpg";
import last_jeans from "../../Assets/lastjeansimage.jpg";
import recyle from "../../Assets/recycleicon.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const texts = [
    {
      item: (
        <p className="fade-text">
          "It's the time of the year to honor our predecessors and the fight we
          constantly give
          <br />
          for equal rights, that small break from reality were we celebrate love
          and who we are."
          <strong>@guadastewart</strong>
        </p>
      ),
    },
    {
      item: (
        <p className="fade-text">
          "What makes this community so magical is the sheer resilience againts
          hate
          <br />
          and the unfaltering emission of love, acceptance and inclusivity."
          <strong>@jillmonica</strong>
        </p>
      ),
    },
    {
      item: (
        <p className="fade-text">
          "If it wasn't for two brave and ruthless transgender women of color
          starting a riot,
          <br />
          we wouldn't have the ability to openly love and be loved."
          <strong>@carolinej331</strong>
        </p>
      ),
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [index, texts.length]);

  return (
    <div className="__home__element__">
      <div className="__home__goodThingsTakeTime__">
        <div>
          <span>Good Things Take Time.</span> Over the last few weeks, we've
          implemented extra precautionary measures in our warehouse to ensure
          the health and
          <br />
          safety of our customers and associates. Because of this your shipment
          may experience delays. Thank you for your patience and understanding.
        </div>

        <div>Learn More & Stay Safe</div>
      </div>

      {/* main body  */}

      <div className="__home__main__body__">
        <div className="__home__banner__desktop__">
          <div>
            <img src={img_animation} alt="animation img" />
          </div>
          <div>
            <p className="text_1">STAND TALL. STAND PROUD. STAND OUT.</p>
            <p className="text_2">
              Take pride in who you are
              <br />
              Celebrate individuality together
            </p>
          </div>
        </div>

        <div className="__home__profit__banner__">
          <div>
            <p>50-70% Off Everything!</p>
            <p>& Our Biggest Shorts Event of The Season!</p>
            <p>*Exclusions Apply</p>
          </div>
          <div>
            <div>
              <Link>Shop Girls</Link>
              <Link>
                Girls Shorts <strong>$11.87 & Up</strong>
              </Link>
              <Link>Shop Guys</Link>
              <Link>
                Guys Shorts <strong>$12 & Up</strong>
              </Link>
            </div>
          </div>
        </div>

        <div className="__home__wrap__profile__">
          <img src={profile_img} alt="profile_img" />
        </div>

        <div className="__home__container__1__">
          <div>
            <p>POV:Aero Pride Ambassador</p>
            {texts[index].item}
          </div>
          <Link className="__container__1__learnmore__">Learn More</Link>
        </div>

        <div className="__home__container__2__">
          <div className="_home__section_1__">
            <img src={con2_img} alt="short_img" />
          </div>

          <div className="_home__section_2__">
            <div className="_home__textwrap_">
              <p>
                <strong>
                  Girls
                  <br />
                  Shorts
                </strong>
              </p>
              <p>
                $<span>11</span>.87 &amp; Up
              </p>
              <p>
                Vibrant prints. Must-feel fabrics.
                <br />
                One-of-a-kind Aero style.
              </p>
              <Link>Girl Shots</Link>
            </div>
          </div>

          <div className="__home__product__carousel">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd31e0e5c/images/jeans-guide/031320-girls-shorts-guide/CURVY.jpg"
                    alt="product"
                  />
                </Link>
                <p>Curvy New!</p>
              </div>
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1d7d9d9a/images/jeans-guide/031320-girls-shorts-guide/VINTAGE%20HIGH%20RISE.jpg"
                    alt="product"
                  />
                </Link>
                <p>Vintage High Rise</p>
              </div>
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe4c9367c/images/jeans-guide/031320-girls-shorts-guide/MOM.jpg"
                    alt="product"
                  />
                </Link>
                <p>Mom New!</p>
              </div>
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw263e01e0/images/jeans-guide/031320-girls-shorts-guide/BERMUDA.jpg"
                    alt="product"
                  />
                </Link>
                <p>Bermuda</p>
              </div>
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw95172bda/images/jeans-guide/031320-girls-shorts-guide/SUPER%20HIGH%20RISE.jpg"
                    alt="product"
                  />
                </Link>
                <p>Midi</p>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="__home__container__3__">
          <div className="__home__img__wrapper__">
            <img src={love_img} alt="love img" />
          </div>
          <div className="__home__img__text__wrapper__">
            <p>Nice to See You Again!</p>
            <p>Certain Aero Locations Are Carefully Reopening</p>
            <p>
              & offering FREE storefront pick up. We're taking extra
              <br />
              precautions to keep our customers and associates safe.
            </p>
          </div>
          <div className="__home__button__container__3__">
            <Link>Find A Store</Link>
            <Link>Free Store Pick Up</Link>
            <Link>Learn More & Stay Safe</Link>
          </div>
        </div>

        <div className="__home__container__2__">
          <div className="__home__product__carousel">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <div>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwc908e3b8/images/shorts-guide/2020/guys-shorts-guide/LONG%20CARGO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Long Cargo</p>
              </div>
              <div>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg"
                    alt="product"
                  />
                </Link>
                <p>Slimk Cut-Off</p>
              </div>
              <div>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw8287ef13/images/shorts-guide/2020/guys-shorts-guide/BEACH%20CHINO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Beach Chino</p>
              </div>
              <div>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9619c8f9/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUFFED.jpg"
                    alt="product"
                  />
                </Link>
                <p>Clasic Chino</p>
              </div>
              <div>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw323348c8/images/shorts-guide/2020/guys-shorts-guide/CLASSIC%20CHINO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Slim Cuffed</p>
              </div>
            </Carousel>
          </div>

          <div className="_home__section_2__">
            <div className="_home__textwrap_">
              <p>
                <strong>
                  Guys
                  <br />
                  Shorts
                </strong>
              </p>
              <p>
                $<span>12</span> &amp; Up
              </p>
              <p>
                New Premium fabric elevated
                <br />
                with extra stretch for comfort
                <br />
                and 360° of freedom
              </p>
              <Link>Boys Shots</Link>
            </div>
          </div>

          <div className="_home__section_2__guys">
            <img src={guys_img} alt="short_img" />
          </div>
        </div>

        <div className="__home__container__4__">
          <div>
            <img src={girl_sec} alt="girlpost" />
          </div>

          <div className="__home__container__4__wrap__">
            <div>
              <div className="_home__textwrap_">
                <p>
                  <strong>
                    Tees &
                    <br />
                    Tanks
                  </strong>
                </p>
                <p>
                  $<span>6</span>.87 &amp; Up
                </p>
                <p>
                  Wear what you feel with
                  <br />
                  statement-making graphics
                  <br />
                  and fun splashes of color.
                </p>
                <div className="__home__container__4__link_button__">
                  <Link>Shop Girls Tees</Link>
                  <Link>Shop Gusy Tees</Link>
                </div>
              </div>
            </div>
            <div>
              <img src={tshirt_img} alt="tshirt" />
            </div>
          </div>
        </div>

        <div className="__home__container__5__">
          <div className="__home__product__carousel">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <div>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw40b59aa7/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CHEEKY-min.jpg"
                    alt="product"
                  />
                </Link>
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwfafadc45/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_ATHLETICSKINNY-min.jpg"
                  alt="product"
                />
                <p>Vintage High Rise</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw678aa8b7/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CURVY-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd384b11b/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SLIM-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw0bcce79d/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_SKINNY_JEGGING-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
            </Carousel>
          </div>

          <div className="_container_5_middle_data_">
            <p>
              <strong>
                Aero
                <br />
                Jeans
              </strong>
            </p>
            <p>
              The easiest fits, the most
              <br />
              comfortable stretch. Complete
              <br />
              with special washes that make
              <br />
              them all your own.
            </p>
            <div>
              <Link>
                Girls Jeans <strong>$ 17.87 & Up</strong>
              </Link>
              <Link>
                Gusy Jeans <strong>$ 17.87 & Up</strong>
              </Link>
            </div>
          </div>

          <div className="__home__product__carousel">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9f81cac3/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_STRAIGHT-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw2af71b6e/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SKINNY-min.jpg"
                  alt="product"
                />
                <p>Vintage High Rise</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw44a6b06b/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SUPERSKINNY-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd8c47c3c/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CURVYSKINNY-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
              <div>
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw47a1e310/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SLIMSTRAIGHT-min.jpg"
                  alt="product"
                />
                <p>Curvy New!</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="__home__container__6__">
        <img src={last_jeans} alt="jeans" />
        <div className="__home__recycle__">
          <div>
            <img src={recyle} alt="recyle" />
          </div>
          <p>
            At Aero, we're committed to a better, brighter future. <br />
            do better, look better, feel better... it's in our jeans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
