import React from "react";

const teamData = [
  {
    image: "/images/team/team1.png",
    name: "qwert",
    designation: "CEO & Founder",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
     ,
    ],
  },
  {
    image: "/images/team/team2.png",
    name: "qwert",
    designation: "Executive",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    
    ],
  },
  {
    image: "/images/team/team3.png",
    name: "Muhammad",
    designation: "Lawyer",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
     
    ],
  },
  {
    image: "/images/team/team4.png",
    name: "Muhammad",
    designation: "Lawyer",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
      
    ],
  },
];

const Team = () => {
  return (
    <>
      <section className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Team</span>
            <h2>Meet Our Expert Team</h2>
            <p>
            Professional Stuffs Ready to Help Your Business
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <img src={value.image} alt="Image" />

                      <div className="team-img">
                        <img src="/images/team/team-shape.png" alt="Image" />
                      </div>
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
