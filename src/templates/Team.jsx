import React from 'react';
import HeaderNavBar from './Nav';
import team from '../assets/team.jpg';
import keval from '../assets/keval.jpg';
import anurag from '../assets/anurag.jpeg';
import dishant from '../assets/dishant.jpeg';
import Footer from './Footer';

const Team = () => {
    return (
        <>
            <HeaderNavBar />

            <div className='container my-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <p className='text-secondary h3' style={{ fontSize: '100px', borderBottom: '1px solid black' }}>
                                Our Team
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-5'>
                            <div>
                                <img src={team} height="450" width="100%" style={{
                                }} />
                            </div>
                            <p className='text-secondary'>
                                At Qunosis, our strength lies in our people. We are a passionate and diverse group of developers, designers, strategists, and problem-solvers who bring creativity, technical expertise, and innovation to every project we take on. Each member of our team is handpicked for their unique skills and dedication to excellence. We come from different backgrounds but share a common vision: to build impactful digital solutions that help businesses thrive.                            </p>
                            <ul>
                                <li>🧠 Innovators at Heart</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We embrace challenges and think outside the box. Whether it’s designing an intuitive user interface or engineering a complex backend system, our team thrives on pushing boundaries and delivering results that exceed expectations.                                </ul>
                            </p>
                            <ul>
                                <li>💻 Skilled & Experienced</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    From full-stack developers to UX/UI experts, cloud architects to QA analysts, our team brings years of industry experience and up-to-date knowledge of the latest technologies and trends.                                </ul>
                            </p>
                            <ul>
                                <li>🤝 Collaborative by Nature</li>
                            </ul>
                            <p className='text-secondary' >
                                <ul>
                                    We believe great ideas come from collaboration. Our culture encourages open communication, transparency, and teamwork—both within our company and with our clients. We treat every project like a partnership.                                </ul>
                            </p>
                            <ul>
                                <li>Cloud Services</li>
                            </ul>
                            <p className='text-secondary' ><ul>
                                Take your business to the cloud with our secure and reliable cloud services. We provide cloud infrastructure setup, migration, management, and optimization, giving you the flexibility to scale quickly while reducing costs. Our solutions help businesses streamline operations, improve collaboration, and ensure business continuity.
                            </ul></p>

                            <ul>
                                <li>🚀 Driven by Purpose</li>
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
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <div className='pe-2 my-5'>
                                <img src={keval} height="500" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-5 my-5'>
                            <ul>
                                <li style={{ color: ' rgb(89, 117, 240)', fontSize: '30px' }}>Keval Chauhan</li>
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
                            <p><ul><a href="mail:mail@kevalchauhan.com">mail@kevalchauhan.com</a></ul></p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <div className='pe-2 my-5'>
                                <img src={dishant} height="500" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-5 my-5'>
                            <ul>
                                <li style={{ color: ' rgb(89, 117, 240)', fontSize: '30px' }}>Dishant Dobariya</li>
                            </ul>
                            <p>
                                <ul>
                                    I am Dishant Dobariya, a Software Engineer based in Gujarat, India. I have a passion for building performant, scalable user interfaces. I have proficiency in technologies like React.js, Node.js, Php, Yii2, and Java. I have B.Tech degree in Computer Science and Engineering from LJ University Ahmedabad, and I am currently working as a Web Developer.
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
                            <p><ul><a href="mail:dishantdobariya@gmail.com">dishantdobariya@gmail.com</a></ul></p>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 about-us-col'>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <div className='pe-2 my-5'>
                                <img src={anurag} height="450" width="100%" style={{
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7' style={{ borderLeft: '1px solid black' }}>
                        <div className='ms-5 my-5'>
                            <ul>
                                <li style={{ color: ' rgb(89, 117, 240)', fontSize: '30px' }}>Anurag Garsondiya</li>
                            </ul>
                            <p>
                                <ul>
                                    I am Anurag Garsondiya, a Software Engineer based in Gujarat, India. I have a passion for building performant, scalable user interfaces. I have proficiency in technologies like React.js, Node.js, Php, Yii2, and Java. I have B.Tech degree in Computer Science and Engineering from LJ University Ahmedabad, and I am currently working as a Web Developer.
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
                            <p><ul><a href="mail:anuraggarsondiya@gmail.com">anuraggarsondiya@gmail.com</a></ul></p>

                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Team;