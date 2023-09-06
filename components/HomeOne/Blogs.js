import React from "react";
import Link from "next/link";

const Blogs = () => {
  

  return (
    <>
      <section className="industries-area pb-100 ">
      <div className="container">
          <div className="section-title">
            <span>Latest Blog</span>
            <h2>Our Recent Blog </h2>
            <p>
            Read The Latest Articles from Our Blog Post
            </p>
          </div>

         </div>
      <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news-details">
                    <img src="/images/blog/blog2.png" alt="Image" />
                  </Link>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/news-grid">
                        <i className="flaticon-user"></i> Admin
                      </Link>
                    </li>
                    
                  </ul>

                  <Link href="/news-details">
                    <h3>First Year Lawyer Salaries: A 2023 Guide</h3>
                  </Link>

                  <p className="blog-details">No matter how much you love the practice of law, the fact remains that money also matters—especially if you’re new to the profession and thinking about your first year lawyer salary</p>


                  <Link href="/" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
      </section>
    </>
  );
};

export default Blogs;
