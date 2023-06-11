import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';

function ServiceCard({ title, index, icon }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img className="w-16 h-16 object-contain" src={icon} alt={title} />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <SectionWrapper sectionId="about">
      <SectionHeader headerText="Overview" subText="Introduction" />
      <motion.p
        className="mt-4 text-secondary text-base max-w-3xl leading-[30px]"
        variants={fadeIn(', ', 0.1, 1)}
      >
        This is some text about my experience. This is some text about my
        experience. This is some text about my experience. This is some text
        about my experience. This is some text about my experience. This is some
        text about my experience. This is some text about my experience. This is
        some text about my experience. This is some text about my experience.
        This is some text about my experience.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(({ title, icon }, index) => (
          <ServiceCard title={title} icon={icon} index={index} key={title} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default About;
