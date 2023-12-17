import React from 'react'
import "./Footer.css"


export default function Footer() {
  return (
    <footer>
    <div class="footer-content">
        <div class="footer-logo">
            <h1>Home Hub</h1>
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    <p>&copy; 2023 Home Hub. All rights reserved.</p>
</footer>
  )
}
