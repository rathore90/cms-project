import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import './footer.css'



const Footer = () => {

// const test = footerToggle(footerBtn) => {
//   document.getElementsByClassName(footerBtn).toggleClass("btnActive");
//   document.getElementsByClassName(footerBtn).next().toggleClass("active");
// }

  return (    
    <footer>
       <div>
            <span class="logo">Pardeep Rathore</span>
       </div>

       <div class="row">
            <div class="col-3">                
                {/* <div class="link-cat" onclick='footerToggle(this)'> */}
                <div class="link-cat">
                    {/* <span class="footer-toggle"></span> */}
                    <span class="footer-cat">Solution</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Interprise App Development</span></a></li>
                    <li><a href=""><span>Android App Development</span></a></li>
                    <li><a href=""><span>ios App Development</span></a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" onclick="footerToggle(this)">
                    {/* <span class="footer-toggle"></span> */}
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Reviews</span></a></li>
                    <li><a href=""><span>Terms & Condition</span></a></li>
                    <li><a href=""><span>Disclaimer</span></a></li>
                </ul>
            </div>
            <div class="col-3" id="newsletter">
                {/* <span>Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form> */}
                
                {/* <div class="social-links social-2">
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-tumblr"></i></a>
                    <a href=""><i class="fab fa-reddit-alien"></i></a>
                </div> */}

                <div id="address">
                    <span>Office Location</span>
                    <ul>
                        <li>
                            <div>Los Angeles<br/>
                            Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* <div class="social-links social-1 col-6">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-tumblr"></i></a>
                <a href=""><i class="fab fa-reddit-alien"></i></a>
            </div> */}
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2021
       </div>
       {/* <div id="owner">
           <span>
               Designed by <a href="https://www.codingtuting.com">CodingTuting.Com</a>
           </span>
       </div> */}
    </footer>
  );
};

export default Footer
