import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const BestFeatures = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-inner-content">
                <span className="sub-title">SERVICES</span>
                <h2>OUR SERIVCES ACROSS THE COUNTRY</h2>
                <p>
                Cloud Tech Solutions is a global center serving the ever-growing
                  needs of a large group of industry-specific enterprise
                  software companies.
                </p>
                <p>
                  Creating transformational new digital products at the
                  intersection of market opportunity, customer experience, and
                  emerging technology.
                </p>
                <div className="btn-box">
                  <Link href="/pricing">
                    <a className="default-btn" >
                      Explore More Services
                    </a>
                  </Link>
                  {/* <Link href="/features-2">
                                        <a className="link-btn">See All Features</a>
                                    </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 features-inner-list">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="features-inner-card">
                    <div className="icon">
                      <i className="ri-eye-line"></i>
                      <h3>SOFTWARE DEVELOPMENT</h3>
                    </div>
                    <p>
                      Software Development, Automated Testing, User
                      Documentation, UI/UX Design and much more ...{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="features-inner-card with-box-shadow">
                    <div className="icon">
                      <i className="ri-stack-line"></i>
                      <h3>SALES AND MARKETING TEAM</h3>
                    </div>
                    <p>
                      Digital Marketing, Marketing Analysi , Marketing
                      Coordination (Database cleansing, CRM management etc.).
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="features-inner-card with-box-shadow">
                    <div className="icon">
                      <i className="ri-cloud-line"></i>
                      <h3>DIGITALIZATION</h3>
                    </div>
                    <p>
                      Building intelligent and low-friction digital solutions to
                      automate manual and inefficient business processes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="features-inner-card">
                    <div className="icon">
                      <i className="ri-leaf-line"></i>
                      <h3>AUGMENTATION</h3>
                    </div>
                    <p>
                      {" "}
                      Enabling your team with the technical talent and skills
                      you need to accelerate development and build high-quality
                      digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestFeatures;
