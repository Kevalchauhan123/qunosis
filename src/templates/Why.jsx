import React from 'react';
import HeaderNavBar from './Nav';
import why from '../assets/why.jpg';


import Footer from './Footer';

const Why = () => {
    return (
        <>
            <HeaderNavBar />
            <div className='container my-md-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='text-secondary h3' style={{borderBottom: '1px solid black' }}>
                                Why Us
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5'>
                            <div>
                                <img src={why} height="30%" width="80%" style={{
                                }} />
                            </div>
                            <p className='text-dark fw-bolder'>
                                Choosing Qunosis means partnering with a team of passionate experts dedicated to delivering innovative, reliable, and results-driven IT solutions tailored to your specific business goals                            </p>
                            <ul>
                                <li>Expertise and Experience</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                Our team comprises seasoned IT professionals with a proven track record in web development, full stack engineering, and cloud technologies. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.                                </ul>
                            </p>
                            <ul>
                                <li>Client-Centric Approach</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                We believe in a collaborative partnership, taking the time to understand your unique challenges and objectives. Our solutions are not off-the-shelf; they are custom-designed to drive your business forward.                                </ul>
                            </p>
                            <ul>
                                <li>Quality and Reliability</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                We are committed to excellence in every project we undertake. Our rigorous quality assurance processes and dedicated support ensure that you receive robust and dependable IT services.                                </ul>
                            </p>
                            <ul>
                                <li>Innovation and Future-Forward Thinking</li>
                            </ul>
                            <p className='text-secondary' ><ul>
                            We are passionate about innovation and constantly explore new technologies to provide you with future-proof solutions that give you a competitive edge in the digital landscape.                            </ul></p>

                            <ul>
                                <li>Passion and Dedication</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                We are more than just a service provider; we are a team of passionate individuals who are genuinely invested in your success. We go the extra mile to ensure your IT needs are met effectively and efficiently.                                </ul></p>
                            <ul>
                                <li>IT Consulting & Support</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    As technology continues to evolve, having the right strategy and support is key to staying ahead. Our IT consulting services help you navigate complex technological challenges, offering strategic insights, implementation support, and ongoing assistance to keep your systems running smoothly. Whether you need help with system integration, infrastructure planning, or troubleshooting, we’re here for you.
                                </ul>
                            </p>
                            <ul>
                                <li>Agile and Flexible Approach</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                Our agile methodologies allow us to be flexible and responsive to your evolving needs, ensuring that your project stays on track and delivers the desired outcomes.                                </ul>
                            </p>
                            <ul>
                                <li> Cost-Effectiveness</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                We provide high-quality IT services at competitive rates, ensuring you get the best value for your investment.                                </ul></p>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Why;