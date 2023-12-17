import React from 'react'
import './Navbar.css';
export default function Navbar() {
    return (
        <>
            <nav class="bg-info" >
                <div class="menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <h3>Home Hub</h3>
                <div>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Reviews</li>
                </div>
                <div id="nav_buttons">
                    <button type="button" class="btn btn-light">Equire now</button>
                    <button type="button" class="btn btn-light">Subscribe</button>
                    <button type="button" class="btn btn-light">Login</button>
                </div>
            </nav>

        </>
    )
}
