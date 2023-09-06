import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";

import About from "../components/HomeOne/About";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
import Services from "../components/HomeOne/Services";

import Team from "../components/HomeOne/Team";
import Blogs from "../components/HomeOne/Blogs";
import Testimonials from "../components/HomeOne/Testimonials";
import News from "../components/HomeOne/News";
import Footer from "../components/Layouts/Footer";
import MakeYourBooking from "../components/HomeOne/MakeYourBooking";
import ContactInfo from "../components/HomeOne/ContacInfo";


export default function Index() {
  return (
    <>
      <Navbar />

      <MainBanner />

     

      <About />

      <WhyChooseUs />

      <Services />

      <MakeYourBooking />
     
      {/* <Blogs /> */}
      <Team />
     

      <News />
     {/* <Testimonials /> */}

     < ContactInfo />
      <Footer />
    </>
  );
}
