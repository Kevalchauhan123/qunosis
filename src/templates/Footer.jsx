import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-5 mb-4">
            <h5 className="footer-title">About Qunosis</h5>
            <p>
              Our team of experts is ready to discuss your needs and tailor a solution that works for you.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact-us">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Join Our Community</h5>
            <p>Share ideas, collaborate, and grow together in a supportive and engaging environment.</p>
            <form className="newsletter-form">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-footer" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-top border-secondary" />

        <div className="text-center py-3">
          © 2025 Qunosis by Qunosis Solutions. Powered by Qunosis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
