
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
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
        </>
    )
}

export default Footer;