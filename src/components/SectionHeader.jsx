import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

function SectionHeader({ headerText, subText }) {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{headerText}</h2>
    </motion.div>
  );
}

export default SectionHeader;
