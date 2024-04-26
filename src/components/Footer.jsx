// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <div className="contact">
              <span>
                <i className="fas fa-envelope"></i> bbklartey@gmail.com
              </span>
              <span>
                <i className="fas fa-phone"></i> 0245644384
              </span>
            </div>
            <div className="socials">
              <a href="/home">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/home">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/home">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/home">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/home">About</a>
              </li>
              <li>
                <a href="/home">Projects</a>
              </li>
              <li>
                <a href="/home">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
