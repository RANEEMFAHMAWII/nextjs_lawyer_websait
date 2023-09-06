import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>
                  <a href="mailto:raneemfahmawi98@gmail.com">raneem@gmail.com</a>
                </p>
              
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>
                  Tel. + <a href="tel:12318005678990">6134567890</a>
                </p>
                
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>lebanon</h3>
                <p>lebanon zahle</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>WhatsApp Chat</h3>
                <p>live chat all the time with us</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
