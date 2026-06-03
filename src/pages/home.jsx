import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Tomorrow should be better than today"
        text="We are a team of strategists, designers and researchers."
        img="https://images.unsplash.com/photo-1556761175-b413da4baf72"
      />

      <Section
        title="See how we can help you progress"
        text="We add insights and actions that allow change makers to grow."
        img="https://images.unsplash.com/photo-1551434678-e076c223a692"
        reverse
      />

      <Offer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;