import React from 'react';
import HeaderNavBar from './Nav';
import team from '../assets/team.png';
import keval from '../assets/keval.jpg';
import anurag from '../assets/anurag1.jpg';
import dishant from '../assets/dishant1.jpg';
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineLink } from "react-icons/ai";

import Footer from './Footer';

const Team = () => {
    return (
        <>
            <HeaderNavBar />

            <div className='container my-md-5 pt-md-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='title-text h3' style={{ borderBottom: '1px solid black' }}>
                                Our Team
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5'>
                            <div>
                                <img src={team} height="50%" width="100%" style={{
                                }} />
                            </div>
                            <p className='text-secondary'>
                                At Qunosis, our strength lies in our people. We are a passionate and diverse group of developers, designers, strategists, and problem-solvers who bring creativity, technical expertise, and innovation to every project we take on. Each member of our team is handpicked for their unique skills and dedication to excellence. We come from different backgrounds but share a common vision: to build impactful digital solutions that help businesses thrive.                            </p>
                            <ul>
                                <li className="title-text fw-bold">Innovators at Heart</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We embrace challenges and think outside the box. Whether it’s designing an intuitive user interface or engineering a complex backend system, our team thrives on pushing boundaries and delivering results that exceed expectations.                                </ul>
                            </p>
                            <ul>
                                <li className="title-text fw-bold">Skilled & Experienced</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    From full-stack developers to UX/UI experts, cloud architects to QA analysts, our team brings years of industry experience and up-to-date knowledge of the latest technologies and trends.                                </ul>
                            </p>
                            <ul>
                                <li className="title-text fw-bold">Collaborative by Nature</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We believe great ideas come from collaboration. Our culture encourages open communication, transparency, and teamwork—both within our company and with our clients. We treat every project like a partnership.                                </ul>
                            </p>
                            <ul>
                                <li className="title-text fw-bold">Cloud Services</li>
                            </ul>
                            <p className='text-secondary' ><ul>
                                Take your business to the cloud with our secure and reliable cloud services. We provide cloud infrastructure setup, migration, management, and optimization, giving you the flexibility to scale quickly while reducing costs. Our solutions help businesses streamline operations, improve collaboration, and ensure business continuity.
                            </ul></p>

                            <ul>
                                <li className="title-text fw-bold">Driven by Purpose</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We're not just here to build software. We’re here to solve real-world problems, streamline operations, and help our clients succeed in a rapidly evolving digital world. Our commitment goes beyond delivery—we’re invested in your growth.
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <p className='title-text h3' style={{borderBottom: '1px solid black' }}>
                                Team Members
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}></div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <div className='pe-2 my-5'>
                                <img src={keval} height="auto" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5 my-md-5'>
                            <ul>
                                <li style={{ color: ' rgb(79, 119, 184)', fontSize: '30px' }}>Keval Chauhan</li>
                                <div>
                                    <a style={{ color: ' rgb(255, 0, 0)' }} href="mailto:keval@qunosis.com">keval@qunosis.com<RxExternalLink fontSize="1em" className='ms-2' /></a>
                                </div>
                                <a style={{ color: ' rgb(255, 0, 0)' }} href="www.kevalchauhan.com">www.kevalchauhan.com<AiOutlineLink fontSize="1.2em" className='ms-2' /></a>
                            </ul>
                            <p>
                                <ul>
                                    I am Keval Chauhan, a Software Engineer based in Gujarat, India. I have a passion for building performant, scalable user interfaces. I have proficiency in technologies like React.js, Node.js, Php, Yii2, and Java. I have B.Tech degree in Computer Science and Engineering from LJ University Ahmedabad, and I am currently working as a Web Developer.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    I’m a passionate and driven individual who believes in continuous learning and innovation. I enjoy exploring new ideas, solving problems, and creating meaningful experiences through technology and creativity.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    Beyond my work, I have a deep appreciation for art, culture, and self-expression. I love discovering new perspectives, whether through books, travel, or engaging conversations. I believe that every experience shapes us, and I always seek opportunities that challenge me to grow.
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <div className='pe-2 my-5'>
                                <img src={dishant} height="auto" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5 my-md-5'>
                            <ul>
                                <li style={{ color: ' rgb(79, 119, 184)', fontSize: '30px' }}>Dishant Dobariya</li>
                                <a style={{ color: ' rgb(255, 0, 0)' }} href="mailto:dishant@qunosis.com">dishant@qunosis.com<RxExternalLink fontSize="1em" className='ms-2' /></a>
                            </ul>
                            <p>
                                <ul>
                                    My name is Dishant Dobariya, and I’m a DevOps Engineer based in Gujarat, India. I’m passionate about building reliable, automated, and scalable infrastructure. My technical expertise spans CI/CD pipelines, containerization, cloud platforms, and monitoring tools. I work with technologies like Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, and Azure. I currently serve as a DevOps Engineer at Apex Soft Tech Software Solution.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    I’m a curious and driven individual who thrives on continuous learning and innovation. I enjoy automating manual processes, optimizing systems for performance and availability, and collaborating across teams to streamline software delivery.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    Outside of work, I have a deep appreciation for art, culture, and creative expression. I love discovering new perspectives through books, travel, and meaningful conversations. I believe each challenge helps shape my growth, and I’m always on the lookout for opportunities that push me to become a better engineer and human being.
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div className='about-us-title'>
                            <div className='pe-2 my-5'>
                                <img src={anurag} height="auto" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-md-5 my-md-5'>
                            <ul>
                                <li style={{ color: ' rgb(79, 119, 184)', fontSize: '30px' }}>Anurag Garsondiya</li>
                                <a style={{ color: ' rgb(255, 0, 0)' }} href="mailto:anurag@qunosis.com">anurag@qunosis.com<RxExternalLink fontSize="1em" className='ms-2' /></a>

                            </ul>
                            <p>
                                <ul>
                                    I am Anurag Garsondiya, a Web Developer based in Gujarat, India. I have professional experience in PHP, Node.js, and React.js, with a passion for building scalable, high-performance web applications. I hold a B.Tech degree in Computer Science and Engineering from LJ University, Ahmedabad, and I am currently working as a Web Developer.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    My vision is to craft digital solutions that not only solve problems but also inspire innovation and growth. I aim to bring logic and creativity together to shape meaningful digital experiences that stand the test of time.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    My mission is to use technology as a tool to create impact-driven solutions—combining strong engineering principles with forward-thinking design. I strive for continuous learning, collaboration, and excellence in everything I build.
                                </ul>
                            </p>
                            <p>
                                <ul>
                                    Beyond my work, I have a deep appreciation for art, culture, and self-expression. I love discovering new perspectives, whether through books, travel, or engaging conversations. I believe that every experience shapes us, and I always seek opportunities that challenge me to grow.
                                </ul>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Team;