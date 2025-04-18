
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='container text-light p-md-5'>
                    <h1>Our team of experts is ready to discuss your needs and tailor a solution that works for you.</h1>
                </div>
                <div className='container d-md-flex align-items-center justify-content-between'>
                    <div className='icons text-light'>
                        <p className='text-secondary social-icon'><CiLinkedin fontSize="1.3em" className='me-2' />LinkedIn</p>
                        <p className='text-secondary social-icon'><FaInstagram fontSize="1.2em" className='me-2' />Instagram</p>
                        <p className='text-secondary social-icon'><FaSquareXTwitter fontSize="1.1em" className='me-2' />Twitter</p>
                    </div>
                    <div>
                        <p className='title-text fw-medium' style={{ textDecoration: 'underline' }}>Join Our Commnity</p>
                        <p className='fw-light title-text'>Share ideas, collaborate, </p>
                        <p className='fw-light title-text'>and grow together in a supportive and engaging environment.</p>
                    </div>
                </div>
                <div className='container bordered border-bottom'></div>
                <div className='title-text py-5 text-center'>© 2025 Qunosis by Keval. Powered by Qunosis. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer;