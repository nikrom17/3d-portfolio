import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';

function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#ffffff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            className="w=[60%] h-[60%] object-contain"
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold !m-0">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            key={index}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  return (
    <SectionWrapper sectionId="experience">
      <SectionHeader
        headerText="Work Experience"
        subText="What I have done so far"
      />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
}

export default Experience;
