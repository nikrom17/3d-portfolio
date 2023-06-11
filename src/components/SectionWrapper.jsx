import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

function SectionWrapper({ children, sectionId }) {
  return (
    <motion.div
      id={sectionId}
      className={`${styles.padding} max-w-7x mx-auto relative z-0`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;
