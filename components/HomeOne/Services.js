import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-target",
    title: "Corporate and Business Law",
    shortText:
      "Our team is well-versed in advising businesses on corporate governance, compliance, mergers and acquisitions, contract drafting and negotiation, and general business matters. We provide expert legal advice tailored to your specific business objectives.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
];

const Services = () => {
  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2>Our Professional Services For You</h2>
          <p>
            We are dedicated to providing top-notch legal services to our
            clients. With our team of experienced lawyers, we offer a wide range
            of specialized services to meet your legal need
          </p>
        </div>

        <div className="row justify-content-center">
          {servicesData &&
            servicesData.slice(0, 6).map((value, i) => (
              <div
                className="col-lg-4 col-sm-6"
                key={i}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={value.aosDelay}
              >
                <div className="single-offer">
                  <i className={value.iconName}></i>
                  <h3>
                    <Link href={value.viewDetails}>{value.title}</Link>
                  </h3>
                  <p>{value.shortText}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="offer-shape">
        <img src="/images/shape/services-shape/1.png" alt="Image" />
        <img src="/images/shape/services-shape/2.png" alt="Image" />
        <img src="/images/shape/services-shape/3.png" alt="Image" />
        <img src="/images/shape/services-shape/4.png" alt="Image" />
        <img src="/images/shape/services-shape/5.png" alt="Image" />
        <img src="/images/shape/services-shape/6.png" alt="Image" />
      </div>
    </section>
  );
};

export default Services;
