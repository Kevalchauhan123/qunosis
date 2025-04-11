import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
import Accordion from 'react-bootstrap/Accordion';
import video from '../assets/edited.mp4';
import keval from '../assets/keval.jpg';
import anurag from '../assets/anurag.jpeg';
import dishant from '../assets/dishant.jpeg';

const Index = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);
    return (
        <>
            <NavBar />
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
                    <div className="container hero-content">
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
                        <a href="#services" id="service-button" className="btn btn-primary px-5">
                            Our services
                        </a>

                    </div>
                </div>
                <div className="container main-container py-5 text-center">
                    <div className="text-secondary">ABOUT US</div>
                    <div className="mt-5 fs-1"> <span className='text-secondary'>Who we are </span> our Story and Mission</div>
                    <div className="row mt-5 about-us-content px-5" style={{ letterSpacing: '1px' }}>
                        <p>Founded by three passionate IT professionals, <span className='fw-bold' style={{ color: 'rgb(237, 108, 72)', textDecoration: 'underline' }}>QUNOSIS</span> is dedicated to providing high-quality, reliable, and scalable IT services. We combine technical expertise with a client-centric approach to deliver solutions that drive real business value.</p>
                    </div>
                </div>
                <div className='team'>
                    <div className='container main-container pt-5 text-center'>
                        <p className='fs-5' style={{ color: 'rgb(237, 108, 72)' }}>MEET OUR TEAM</p>
                        <p className='fs-1'>Experts Behind Your Success</p>
                        <p className='fw-lighter' style={{ fontSize: '18px', letterSpacing: '1px' }}>Our team is composed of experienced professionals who are passionate about driving digital transformation and innovation. Each member brings unique skills and expertise, working together to deliver exceptional results for our clients</p>
                    </div>
                    <div className="scroll-wrapper p-5">
                        <div className="scroll-track">
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={keval} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Keval Chauhan</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={dishant} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Dishant Dobariya</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Cloud Engineer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. consectetur,
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={anurag} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Anurag Garsondiya</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor dipisicing elit.
                                        Lorem ipsum dolor , adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={keval} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Keval Chauhan</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={dishant} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Dishant Dobariya</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Cloud Engineer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. consectetur,
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                            </div>
                            <div className="card team-card d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={anurag} width="200" height="200" className='rounded-circle' style={{
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }} />
                                </div>
                                <div className='ms-5'>
                                    <h5 className="fw-bolder">Anurag Garsondiya</h5>
                                    <p style={{ color: 'rgb(237, 108, 72)' }}>Web Developer</p>
                                    <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Lorem ipsum dolor dipisicing elit.
                                        Lorem ipsum dolor , adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container main-container py-5 text-center">
                    <div className="text-secondary mb-5">OUR VALUES</div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div> */}
            </div>

        </>
    );
};

export default Index;
