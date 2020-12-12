import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
           <div className="brand left">Movie Stream</div>
           <div className="center">
              <ul>
                <li> <a href="#">About Us</a></li>
                <li><a href="#">Contact</a> </li>
                <li><a href="#">Blog</a> </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a> </li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="copyright">
              <p>©Movie Stream. All Rights Reserved</p>
            </div>
        </div>
    )
}
