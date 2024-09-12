import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import './Footer.css';
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

function Footer() {
   return (
      <div className="footer-outer-container">
         <div className="footer-inner-container">
            <div className="footer-icons">
               <FacebookIcon />
               <InstagramIcon />
               <XIcon />
               <YouTubeIcon />
            </div>
            <div className="footer-data">
               <div>
                  <ul>
                     <li>Audio Description</li>
                     <li>Investor Relations</li>
                     <li>Privacy</li>
                     <li>Contact Us</li>
                  </ul>
               </div>

               <div>
                  <ul>
                     <li>Help Center</li>
                     <li>Jobs</li>
                     <li>Legal Notices</li>
                     <li>Do Not Sell or Share My Personal Information</li>
                  </ul>
               </div>

               <div>
                  <ul>
                     <li>Gift Cards</li>
                     <li>Netflix Shop</li>
                     <li>Cookie Preferences</li>
                     <li>AD Choices</li>
                  </ul>
               </div>

               <div>
                  <ul>
                     <li>Media Center</li>
                     <li>Terms of Use</li>
                     <li>Corporate Inforamtion</li>
                  </ul>
               </div>
            </div>
            <div className="service-code">
               <p>Service Code</p>
            </div>

            <div className="copyright-info">
               {/* <CopyrightOutlinedIcon /> */}
               <p>&copy; 1997 - 2004 Netflix, Inc.</p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
