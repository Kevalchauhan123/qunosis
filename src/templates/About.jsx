import React from 'react';
import HeaderNavBar from './Nav';
import about from '../assets/aboutUs.png';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';


import Footer from './Footer';

const About = () => {
    return (
        <>
            <HeaderNavBar />
            <div className='container my-md-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='title-text h3' style={{borderBottom: '1px solid black' }}>
                                About Us
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5'>
                            <div>
                                <img src={about} height="50%" width="100%" style={{
                                }} />
                            </div>
                            <p className='text-secondary'>
                                At Qunosis, we are redefining the future of technology with our innovative IT solutions. As a forward-thinking startup, we specialize in delivering scalable, secure, and high-performing services that empower businesses to stay ahead in a competitive world. Our comprehensive range of services is designed to address every aspect of your digital needs, whether you're looking for a new web application, an intuitive mobile app, a robust cloud infrastructure, or expert IT consulting.
                            </p>
                            <ul>
                                <li class="title-text fw-bold">Scalable & Secure Software Solutions</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We craft customized, scalable, and secure software tailored specifically to your business processes. Our team ensures that your systems are not only powerful and efficient but also built with a strong foundation in security to safeguard your data and operations.
                                </ul>
                            </p>
                            <ul>
                                <li class="title-text fw-bold">Web & Mobile App Development</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    From the idea stage to deployment, we specialize in building dynamic web and mobile applications that offer seamless user experiences. Our apps are intuitive, responsive, and designed to perform flawlessly across all devices and platforms, ensuring your users stay engaged no matter where they are.
                                </ul>
                            </p>
                            <ul>
                                <li class="title-text fw-bold">UI/UX Design</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    Design is at the heart of every great digital product. We create engaging, user-centered designs that foster brand loyalty, drive conversions, and simplify user interactions. Whether it's crafting pixel-perfect interfaces or enhancing the user journey, we ensure that your products stand out in both form and function.
                                </ul>
                            </p>
                            <ul>
                                <li class="title-text fw-bold">Cloud Services</li>
                            </ul>
                            <p className='text-secondary' ><ul>
                                Take your business to the cloud with our secure and reliable cloud services. We provide cloud infrastructure setup, migration, management, and optimization, giving you the flexibility to scale quickly while reducing costs. Our solutions help businesses streamline operations, improve collaboration, and ensure business continuity.
                            </ul></p>

                            <ul>
                                <li class="title-text fw-bold">E-commerce Solutions</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    In today’s digital age, a powerful e-commerce platform is essential for business growth. We specialize in building robust e-commerce websites and applications that help you launch, manage, and scale your online store with ease. With our solutions, you can drive sales, improve customer satisfaction, and manage your online business effortlessly.
                                </ul></p>
                            <ul>
                                <li class="title-text fw-bold">IT Consulting & Support</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    As technology continues to evolve, having the right strategy and support is key to staying ahead. Our IT consulting services help you navigate complex technological challenges, offering strategic insights, implementation support, and ongoing assistance to keep your systems running smoothly. Whether you need help with system integration, infrastructure planning, or troubleshooting, we’re here for you.
                                </ul>
                            </p>
                            <ul>
                                <li class="title-text fw-bold">Digital Transformation Services</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We believe in driving innovation through digital transformation. Our team partners with you to enhance your digital capabilities, optimize your workflows, and integrate cutting-edge technologies that improve your business operations and deliver measurable results.
                                </ul>
                            </p>
                            <ul>
                                <li class="title-text fw-bold"> Software Testing & Quality Assurance</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    Quality is non-negotiable. Our software testing and quality assurance services ensure that every product we deliver is bug-free, secure, and performs at the highest standards. We conduct thorough testing, including automated, manual, and performance testing, to ensure your software meets the expectations of your users.
                                </ul></p>
                            <p className='text-secondary' >
                                At Qunosis, we are committed to delivering not just services, but solutions that transform your business. We work with you every step of the way to ensure your success in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='title-text h3' style={{borderBottom: '1px solid black' }}>
                                Mission
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5'>
                            <div>
                                <img src={mission} height="50%" width="100%" style={{
                                }} />
                            </div>
                            <p className='text-secondary'>
                                Our mission is to deliver high-quality, customized IT solutions that solve real-world problems and exceed client expectations. We are committed to innovation, integrity, and excellence, working hand-in-hand with our clients to build future-ready digital ecosystems and blend analytical thinking with visionary creativity to engineer meaningful digital solutions. We aim to turn complexity into clarity, innovation into impact, and ideas into intelligent systems that evolve with our clients.
                            </p>
                            <p className='text-secondary' >
                                We craft digital solutions with soul—balancing code with creativity, logic with empathy, and speed with sustainability. Every line we write is a step toward smarter, kinder technology."
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='title-text h3' style={{borderBottom: '1px solid black' }}>
                                Vision
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5'>
                            <div>
                                <img src={vision} height="50%" width="100%" style={{
                                }} />
                            </div>
                            <p className='text-secondary'>
                            To become a trusted global technology partner, empowering businesses through innovative, reliable, and scalable digital solutions that drive growth, efficiency, and transformation.                            </p>
                            <p className='text-secondary'>
                            To redefine how technology connects people, businesses, and ideas—creating digital experiences that feel human, think smart, and grow with time.
                            </p>
                            <p className='text-secondary'>
                            To shape a smarter digital world where every solution is crafted with logic, led by vision, and built to empower the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default About;