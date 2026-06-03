import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        What our customer says <span className="highlight">About Us</span>
      </motion.h2>

      <motion.div
        className="testimonial-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          "Elementum delivered the site within timeline and increased traffic by 50%."
        </p>
      </motion.div>
    </section>
  );
};

export default Testimonials;