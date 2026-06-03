import { motion } from "framer-motion";

const Section = ({ title, text, img, reverse }) => {
  return (
    <motion.div
      className={`section ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div className="image">
        <img src={img} />
      </div>
    </motion.div>
  );
};

export default Section;