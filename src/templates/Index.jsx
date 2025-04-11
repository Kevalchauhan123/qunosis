import React from 'react';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
import video from '../assets/main.mp4';
const Index = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="site-index">
                    <video autoPlay
                        muted
                        loop
                        id="myVideo"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            minWidth: '100vw',
                            minHeight: '100vh',
                            objectFit: 'cover',
                            zIndex: -1
                        }} >
                        <source src={video} type="video/mp4" />
                    </video>
                    <div class="container hero-content">
                        <h1 style={{
                            fontSize: '3rem', 
                            fontWeight: '600', 
                            maxWidth: '700px',
                        }}>
                            Begin this journey with us and immerse yourself in limitless inspiration
                        </h1>
                        <p style={{
                            marginTop: '1.5rem',
                            maxWidth: '500px',
                        }}>
                            Join us in crafting a digital experience that truly distinguishes you from others
                        </p>
                        <a href="#services" id="service-button" class="btn btn-primary">
                            Our services
                        </a>
                    </div>
                    <div class="container main-container py-5">
                        <div class="text-secondary">ABOUT US</div>
                        <div class="mt-5 fs-1">Who we are: Our story and missioning</div>
                        <div class="row mt-5 about-us-content">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <p>In a digital landscape where visibility is paramount, our SEO company Lungo was born out of a passion for guiding businesses towards online success.</p>
                                <p>Our story begins with a small team of enthusiasts, united by a shared vision to revolutionize the way brands connect with their audience online. Fueled by innovation and driven by results, we embarked on a mission to empower businesses of all sizes to soar to new heights in the digital realm</p>
                                <p>Join us on this journey as we continue to elevate brands and redefine what's possible in the ever-evolving world of digital marketing. Together, let's reach new heights and make your digital dreams a reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
