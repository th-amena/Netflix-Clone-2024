import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflixlogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
   const [show, setShow] = useState(false);

   // Scroll event handler function
   const handleScroll = () => {
      if (window.scrollY > 100) {
         setShow(true);
      } else {
         setShow(false);
      }
   };

   useEffect(() => {
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up: Remove the event listener when the component unmounts
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); // Empty dependency array to run this only once
   return (
      // <div className="header-outer-container"  >
         <div className= {`header-outer-container ${show && "nav-black"}`}>
         <div className="header-container">
            <div className="header-left">
               <ul>
                  <li>
                     {" "}
                     <img
                        src={NetflixLogo}
                        alt="Netflix Logo"
                        width="100"
                     />{" "}
                  </li>
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>Latest</li>
                  <li>My List</li>
                  <li>Browse by Languages</li>
               </ul>
            </div>

            <div className="header-right">
               <ul>
                  <li>
                     <SearchIcon />
                  </li>
                  <li>
                     <NotificationsNoneIcon />
                  </li>
                  <li>
                     <AccountBoxIcon />
                  </li>
                  <li>
                     <ArrowDropDownIcon />
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Header;
