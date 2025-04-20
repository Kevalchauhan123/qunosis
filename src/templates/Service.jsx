import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import Footer from "./Footer";
import HeaderNavBar from "./Nav";
import { LiaConnectdevelop } from "react-icons/lia";
import { RiApps2AddLine } from "react-icons/ri";
import { SiAffinitydesigner } from "react-icons/si";
import { SiSoundcloud } from "react-icons/si";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoLogoWebComponent } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaLink } from "react-icons/fa";


const Service = () => {
    useEffect(() => {
        const grid = document.querySelector('.masonry');
        if (grid) {
            new Masonry(grid, {
                itemSelector: ".item",
                percentPosition: true,
            });
        }
    }, []);
    return (
        <>
            <HeaderNavBar />
            <div>
                <div className="container my-5">
                    <div className="my-5 title-text" style={{fontSize: '75px'}}>
                        Services
                    </div>
                    <div className="masonry row">
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <LiaConnectdevelop className="title-text" fontSize="4em" />
                                <p className="title-text my-5 fw-bold h5">Custom Software Development</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We build tailor-made software solutions designed specifically to meet your unique business needs. </p>
                                <p className="fw-light">From concept to deployment, our team ensures scalable, secure, and high-performance applications that align perfectly with your goals. Whether it’s automating workflows, integrating systems, or creating entirely new platforms, we deliver solutions that drive results.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <IoLogoWebComponent className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">Web Development</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We craft modern, responsive web applications that scale with your business. Using the latest frameworks  and robust back‑end technologies , we deliver fast‑loading SPAs, PWAs, and server‑rendered sites. </p>
                                <p className="fw-light"> Our web solutions emphasize SEO best practices, accessibility standards, and secure architectures—ensuring your users enjoy a seamless experience across all devices</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <RiApps2AddLine className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">Mobile App Development</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We design and build high‑performance, user‑centric mobile applications for iOS and Android. Whether it’s a native Swift/Kotlin app or a cross‑platform solution using React Native or Flutter, we focus on intuitive interfaces, smooth animations, and offline‑ready features.</p>
                                <p className="fw-light">  From MVP prototyping to full‑scale enterprise deployments, our mobile apps are optimized for speed, security, and seamless integration with your backend services.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <SiAffinitydesigner className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">UI / UX</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We design intuitive and engaging user experiences that not only look great but also drive user satisfaction and business results. Our UI/UX process combines research, strategy, and creativity to craft interfaces that are visually compelling, easy to use, and aligned with your brand identity.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <SiSoundcloud className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">DevOps Services</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We streamline your development and operations with modern DevOps practices that boost efficiency, reliability, and speed. Our services include CI/CD pipeline setup, automated testing, infrastructure as code, cloud deployment, and monitoring solutions.</p>
                                <p className="fw-light">By bridging the gap between development and IT operations, we help you deliver faster, scale effortlessly, and maintain stability across environments. Need a more technical, enterprise, or startup-friendly version? I’ve got you!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <HiMiniShoppingBag className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">E-commerce Solutions</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We build powerful and scalable e-commerce platforms tailored to your business model. From intuitive storefronts and secure payment gateways to inventory management and seamless user experiences, our solutions help you attract customers and drive sales.</p>
                                <p className="fw-light">Whether you're launching a new online store or upgrading an existing one, we deliver fully customized, conversion-focused e-commerce systems. Let me know if you want it geared more toward B2B, D2C, or marketplace-style platforms</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <FaLink className="title-text" fontSize="2.5em" />
                                <p className="title-text my-5 fw-bold h5">API Development & Integration</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We design and build robust, scalable APIs—RESTful and GraphQL—to power your applications and enable seamless data exchange.</p>
                                <p className="fw-light">From endpoint design and authentication to versioning and comprehensive documentation, we ensure your APIs are secure, performant, and easy to consume. Additionally, we integrate third‑party services (payment gateways, CRMs, ERPs, messaging platforms, and more) so your systems communicate flawlessly, automating workflows and unlocking new business capabilities.</p>

                            </div>
                        </div>
                        <div className="col-12 col-md-4 item mb-4">
                            <div className="card p-3">
                                <MdOutlineContactSupport className="title-text" fontSize="3em" />
                                <p className="title-text my-5 fw-bold h5">IT Consulting & Support</p>
                                <hr></hr>
                                <p className="fw-light mt-5">We provide expert IT consulting and reliable support to help your business make smart technology decisions and stay running smoothly. </p>
                            </div>
                        </div>
                    </div>
                </div>
                < Footer />
            </div>
        </>
    )
}

export default Service;