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
      <SectionHeader headerText="A Bit About Me" subText="hello_me.js" />
      <motion.p
        className="mt-4 text-secondary text-base max-w-3xl leading-[30px]"
        variants={fadeIn(', ', 0.1, 1)}
      >
        <p>
          I'm a product-focused lead frontend engineer with 9 years of
          engineering experience in strategic problem-solving that allows me to
          tackle any problem I'm faced with. I have a passion for frontend
          engineering and experience designing, developing, and deploying
          frontend microservices using Figma, React, and AWS.
        </p>
        <br />
        In my free time, I volunteer at Out In Tech. OIT is a non-profit that
        unites the LGBTQ+ tech community by creating opportunities for its
        members to advance their careers and grow their professional networks.
        I'm a part of the UI/UX leadership team and the solutions architect for
        the OIT Connect app.
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
