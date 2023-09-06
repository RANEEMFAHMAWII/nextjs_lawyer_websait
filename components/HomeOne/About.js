import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/carousel-1.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>About Us</span>
                <h2>
                  We Complete Every Project With Extra Care As Customer Need
                </h2>
                <p>
                We are dedicated to providing top-notch legal services to our
                clients. With our team of experienced lawyers, we offer a wide
                range of specialized services to meet your legal needs
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        open communication,and zealous advocac
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Fair Prices
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Support
                      </li>
                    </ul>
                  </div>

                  
              
                </div>

                <Link href="/contact-2" className="default-btn">
                Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
