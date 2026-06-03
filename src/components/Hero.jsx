import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The <span className="highlight">thinkers</span> and <br />
        doers were <span className="highlight2">changing</span> <br />
        the <span className="highlight">status quo</span> with
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We are a team of strategists, designers, communicators and researchers.
      </motion.p>

      <motion.div
        className="avatars"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <img src="https://randomuser.me/api/portraits/men/1.jpg" />
        <img src="https://randomuser.me/api/portraits/women/2.jpg" />
        <img src="https://randomuser.me/api/portraits/men/3.jpg" />
      </motion.div>

    </section>
  );
};

export default Hero;