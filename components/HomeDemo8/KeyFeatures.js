import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
		<>
			<div className="key-features-area bg-transparent-with-color pt-100 pb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title"> CAREERS </span>
                        <h2> OPPORTUNITIES DON'T HAPPEN, YOU CREATE THEM</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card style-two">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3> Apply for the Job</h3>
                                <p> Just send your resume and unlock your future with us. Apply seamlessly through our user-friendly portal, showcasing your skills and experience. Join us on the journey to success!.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card bg-color-two style-two">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3> Get Shortlisted </h3>
                                <p> Stand out in the crowd! Submit a compelling application, and pave your way to being shortlisted for exciting opportunities at our company. Your journey to success begins here.  </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card style-two">
                                <div className="icon">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Local Interviews Process</h3>
                                <p>Navigate our efficient local interview process. Once shortlisted, engage in insightful discussions with our team, showcasing your skills and compatibility with our company culture. Your pathway to success starts with a local conversation.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card bg-color-two style-two">
                                <div className="icon bg2">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Interview with Hiring Department</h3>
                                <p>Take the next step in your journey. Impress during the interview with our Hiring Department, where your skills and aspirations align with the role. Your success story unfolds in these pivotal discussions.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card style-two">
                                <div className="icon">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Ethical Selected or Placed in Pool for other Divisions</h3>
                                <p> Your integrity matters. If not selected for a specific role, be assured of ethical consideration. Your profile may be placed in our talent pool for potential matches with other divisions, ensuring fairness and maximizing your opportunities within our organization. </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="key-features-card bg-color-two style-two">
                                <div className="icon bg2">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Hire and Job Offered</h3>
                                <p> Congratulations! You've been selected. Expect a formal job offer shortly, detailing your role, responsibilities, and benefits. Welcome to the Cloud Tech Solutions family, where your career journey begins.</p>
                            </div>
                        </div>
                    </div>

                    <div className="key-features-btn">
                        <Link href="/app-download">
                            <a className="default-btn">
                                LIFE AT CLOUD TECH SOLUTIONS
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
		</>
    );
}

export default KeyFeatures;