import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <section className="slider-area">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-swiper"
        >
        

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/carousel-1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden two">
                      <span>Law</span>
                      <h1>WELCOME TO OUR LAW FIRM!</h1>
                      <p>
                      Your Trusted Legal Companion on the Path to justice.
                      </p>

                      <div className="slider-btn">
                       

                        <Link href="/contact" className="default-btn white">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/carousel-2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden three">
                      <span>Law</span>
                      <h1>WELCOME TO OUR LAW FIRM!</h1>
                      <p>
                      Your Trusted Legal Companion on the Path to justice.
                      </p>

                      <div className="slider-btn">
                      
                        <Link href="/contact" className="default-btn white">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MainBanner;
