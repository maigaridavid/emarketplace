import React from 'react'
import './Footer.css'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand & Newsletter */}
                <div className="footer-section brand">
                    <h1 className="footer-logo">Eplaza</h1>
                    <p className="footer-heading">Your Style Insider:</p>
                    <p className="footer-subtext">Subscribe to our newsletter</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter email..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                {/* Pages */}
                <div className="footer-section">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Deals</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>

                {/* Utility */}
                <div className="footer-section">
                    <h3>Utility</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>FAQs</li>
                        <li>Support</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>example@gmail.com</p>
                    <p>+44 (0) 161808123</p>
                    <div className="social-icons">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Eplaza. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
