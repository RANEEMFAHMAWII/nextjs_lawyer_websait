import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import 'swiper/swiper.min.css';

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
     <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
             <h1 >Lawyer</h1>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home
                      </Link>

                

             
                </li>

                <li className="nav-item">
                  <Link
                    href="/about-1/"
                    className={`nav-link ${
                      currentPath == "/about-1/" && "active"
                    }`}
                  >
                    About <i className="bx "></i>
                  </Link>

                 
                </li>

                <li className="nav-item">
                  <Link
                    href="/services/"
                    className={`nav-link ${
                      currentPath == "/services/" && "active"
                    }`}
                  >
                    Services <i className="bx "></i>
                  </Link>

                  
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Blogs <i className="bx "></i>
                  </Link>

                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    News <i className="bx "></i>
                  </Link>

                 
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contact <i className="bx "></i>
                  </Link>

                
                </li>
              </ul>

              <div className="others-options">
                <Link href="/login/" className="default-btn">
                  Booking <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
