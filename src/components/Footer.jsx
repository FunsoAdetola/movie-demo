import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
           <div className="brand left">Movie Stream</div>
           <div className="center">
              <ul>
                <li> About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="copyright">
              <p>©Movie Stream. All Rights Reserved</p>
            </div>
        </div>
    )
}
