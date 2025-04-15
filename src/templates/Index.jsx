import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import HeaderNavBar from "./Nav";
import Accordion from 'react-bootstrap/Accordion';
import video from '../assets/main.mp4';
// import service from '../assets/service.mp4';
import keval from '../assets/keval.jpg';
import anurag from '../assets/anurag.jpeg';
import dishant from '../assets/dishant.jpeg';
import development from '../assets/development.png';
import webdevelopment from '../assets/web development.png';
import cloud from '../assets/cloud.png';
import uiux from '../assets/uiux.png';
import ecomm from '../assets/ecomm.png';
import support from '../assets/support.png';

const Index = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);
    return (
        <>
            <HeaderNavBar />
            <div>
                <div className="site-index">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        id="myVideo"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            minWidth: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                            // filter: 'blur(5px)',
                            // transform: 'scale(1.1)',

                        }} >
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="container hero-content text-dark">
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '600',
                            maxWidth: '700px',
                        }}>
                            Empowering Your Business with Innovative IT Solutions.
                        </h1>
                        <p style={{
                            marginTop: '1.5rem',
                            maxWidth: '500px',
                        }}>
                            Your Trusted Partner for Web Development, Cloud and other IT Services.
                        </p>
                    </div>
                </div>
                <div className="main-container py-5 text-center">
                    <div className='container'>
                        <div className="text-secondary">ABOUT US</div>
                        <div className="mt-5 fs-1"> <span className='text-secondary'>Who we are </span> our Story and Mission</div>
                        <div className="row mt-5 about-us-content px-5" style={{ letterSpacing: '1px' }}>
                            <p>Founded by three passionate IT professionals, <span className='fw-bold' style={{ color: 'rgb(89, 117, 240)', textDecoration: 'underline' }}>QUNOSIS</span> is dedicated to providing high-quality, reliable, and scalable IT services. We combine technical expertise with a client-centric approach to deliver solutions that drive real business value.</p>
                        </div>
                    </div>
                </div>

                <div className="position-relative overflow-hidden">
                    {/* Background Video
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        style={{ zIndex: -1 }}
                    >
                        <source src={service} type="video/mp4" />
                    </video> */}
                    <div className="service-container py-5 px-4 text-center">
                        <div className="fs-2">SERVICES</div>
                        <div className='container p-4'>
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={development} height="150" style={{}} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)'}}>Custom Software Development</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={webdevelopment} height="150" style={{
                                            }} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)' }}>Web & Mobile App Development</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={uiux} height="150" style={{
                                            }} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)' }}>UI/UX Design</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={cloud} height="150" style={{
                                            }} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)' }}>DevOps Services</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={ecomm} height="150" style={{
                                            }} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)' }}>E-commerce Solutions</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='card service-card py-5'>
                                        <div>
                                            <img src={support} height="150" style={{
                                            }} />
                                        </div>
                                        <div className='fw-bolder mb-5 mb-5 h4' style={{ color: 'rgb(102, 102, 102)' }}>IT Consulting & Support</div>
                                        <div className='text-secondary px-3'>Scalable and secure software tailored to your business processes.</div>
                                        <a className='mt-3' href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='btn btn-primary w-auto px-5 py-2'>
                                    Go to Services
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='team'>
                    <div className='container main-container pt-5 text-center'>
                        <p className='fs-5 fw-bold' style={{ color: 'rgb(89, 117, 240)' }}>MEET OUR TEAM</p>
                        <p className='fs-1'>Experts Behind Your Success</p>
                        <p className='fw-lighter' style={{ fontSize: '18px', letterSpacing: '1px' }}>Our team is composed of experienced professionals who are passionate about driving digital transformation and innovation. Each member brings unique skills and expertise, working together to deliver exceptional results for our clients</p>
                    </div>
                    <div className="scroll-wrapper p-5">
                        <div className="scroll-track">
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={keval} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Keval Chauhan</h5>
                                    <p>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={dishant} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Dishant Dobariya</h5>
                                    <p>DevOps Engineer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. consectetur,
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={anurag} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Anurag Garsondiya</h5>
                                    <p>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor dipisicing elit.
                                        Lorem ipsum dolor , adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={keval} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Keval Chauhan</h5>
                                    <p>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={dishant} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Dishant Dobariya</h5>
                                    <p>Cloud Engineer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. consectetur,
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={anurag} width="200" height="200" style={{
                                        height: "200px",
                                        width: "200px",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder" style={{ color: 'rgb(89, 117, 240)' }}>Anurag Garsondiya</h5>
                                    <p>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor dipisicing elit.
                                        Lorem ipsum dolor , adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5 text-center">
                    <div className="text-secondary mb-5 fs-3">OUR VALUES</div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item >
                            <Accordion.Header>Client-Centricity</Accordion.Header>
                            <Accordion.Body>
                                We prioritize understanding our clients' unique needs and delivering solutions that exceed their expectations.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Innovation</Accordion.Header>
                            <Accordion.Body>
                                We stay at the forefront of technology to provide cutting-edge and effective solutions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Quality</Accordion.Header>
                            <Accordion.Body>
                                We are committed to delivering high-quality work with meticulous attention to detail.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Colobration</Accordion.Header>
                            <Accordion.Body>
                                We believe in working closely with our clients as partners to achieve shared success.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='container card talk p-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1>Let's Talk</h1>
                            <p className='fs-4'>We'd love to learn more about you and
                                what we can design and build together.</p>
                            <form>
                                <div className='pt-5'>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className='container text-light p-5'>
                        <h1>Our team of experts is ready to discuss your needs and tailor a solution that works for you.</h1>
                    </div>
                    <div className='container d-flex align-items-center justify-content-between'>
                        <div className='icons text-light'>
                            <p className=' text-secondary'><CiLinkedin fontSize="1.3em" className='me-2' />LinkedIn</p>
                            <p className=' text-secondary'><FaInstagram fontSize="1.2em" className='me-2' />Twitter</p>
                            <p className=' text-secondary'><FaSquareXTwitter fontSize="1.1em" className='me-2' />Instagram</p>
                        </div>
                        <div>
                            <p className='fw-medium' style={{ color: 'rgb(89, 117, 240)', textDecoration: 'underline' }}>Join Our Commnity</p>
                            <p className='fw-light text-secondary'>Share ideas, collaborate, </p>
                            <p className='fw-light text-secondary'>and grow together in a supportive and engaging environment.</p>
                        </div>
                    </div>
                    <div className='container bordered border-bottom'></div>
                    <div className='py-5 text-center' style={{ color: 'rgb(89, 117, 240)' }}>© 2025 Qunosis by Keval. Powered by Qunosis. All rights reserved.</div>
                </div>
            </div >

        </>
    );
};


export default Index;
