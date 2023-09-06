import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  {/* <img src="/images/white-logo.png" alt="Image" /> */}
                </Link>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat molestiae corporis, magni maxime perferendis ducimus
                  totam officiis sit exercitationem sed odio debitis minus
                  cumque dolores dicta.
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <a className="navbar-brand" href="index.html">
                <h1 className="m-0 text-white">
                  <i className="me-2"></i>Subscribe{" "}
                </h1>
              </a>
              <p className="mt-3 mb-4">
                Subscribe Now to get all latest news and blogs
              </p>
              <form action="">
                <div className="input-group">
                  <input
                    className="form-control border-white p-3"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-dark">subscribe</button>
                </div>
              </form>
            </div>

         

            
          </div>
        </div>

        <div className="footer-shape">
          <img src="/images/shape/footer-shape-one.png" alt="Image" />
          <img src="/images/shape/footer-shape-two.png" alt="Image" />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; 2023 . All Rights Reserved</p>
              </div>
            </div>

            

           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
