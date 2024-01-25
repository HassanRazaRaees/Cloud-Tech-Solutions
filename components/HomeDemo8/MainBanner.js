import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../styles/Navbar.module.css";

const MainBanner = () => {
  return (
    <>
      <div className="new-app-main-banner-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-main-banner-wrap-content">
                {/* /<span className="sub-title">#Get Your 14 Days Free Trial</span> */}
                <div className={styles.MainBannerHeading}>
                  <h1 className={styles.mainHeading}>
                    Adaptive
                    <span> to your business, your growth & the future. </span>
                  </h1>
                  <p className={styles.para}>
                    Proudly serving the world's top asset finance & leasing
                    companies with smart software technology.
                  </p>
                </div>

                <ul className="user-info">
                  <li>
                    <img
                      src="/images/user/user1.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/user/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/user/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/user/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </li>
                  <li className="title">4K+ used this App</li>
                </ul>

                <div className={styles.discoverButton}>
                  <button>Discover More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <ScrollAnimation
                animateIn="fadeInLeft"
                duration={2}
                animateOnce={true}
                initiallyVisible={true}
              >
                <div className="new-app-main-banner-wrap-image">
                  <img
                    src="/images/home-7-8-9/banner/banner-2.png"
                    alt="image"
                    style={
                     { width: "88%" , display: "flex"}
                    }
                  />

                  <div className="wrap-image-shape-1">
                    <img
                      src="/images/home-7-8-9/banner/shape-3.png"
                      alt="image"
                    />
                  </div>
                  {/* <div className="wrap-image-shape-2">
                    <img
                      src="/images/home-7-8-9/banner/shape-4.png"
                      alt="image"
                    />
                  </div> */}
                  <div className="banner-circle">
                    <img
                      src="/images/home-7-8-9/banner/banner-circle.png"
                      alt="image"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="new-app-main-banner-wrap-shape">
          <img src="/images/home-7-8-9/banner/shape-5.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
