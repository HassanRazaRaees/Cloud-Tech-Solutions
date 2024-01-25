import React from 'react';
import Link from 'next/link';

const AboutContent = () => {
    return (
		<>
			<div className="app-about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-about-image">
                                <img 
                                    src="/images/home-7-8-9/about/about-2.png" 
                                    alt="image" 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="app-about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2> Where work happens! </h2>
                                <p> Cloud Tech Solutions recently started from Karachi in 2023 with a little over a dozen people, serving client divisions located all across the globe.</p>
                                <p> We are alums of Intel, Silicon Graphics, and Qualcomm; techies from MIT and Caltech entrepreneurs and inventors from Silicon Valley; enthusiasts for all things digital; big believers in technology’s potential; bigger believers in human potential.</p>
                                <ul className="list">
                                    <li>
                                        <div className="icon bg-3">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Trusted and Reliable</h3>
                                        <p> Most provabily best you can trust on us, just join us today as a client or Software Engineer.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg-3">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Requirements We Fulfill:</h3>
                                        <p> We provide software development, maintenance, support, deployment and implementation services, as well as ITes Staff Augmentation for Systems Administration as well as full-featured G&A and S&M needs.</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/app-download">
                                        <a className="default-btn"> More about us</a>
                                    </Link>
                                    {/* <Link href="/features-1">
                                        <a className="link-btn">See All Features</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default AboutContent;