'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const EventCard = ({ image, title, Description, driveLink, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.5)}
    className="flex md:flex-row flex-col gap-4"
  >
    <a target="_Blank" rel="noreferrer" href={driveLink}>
      <img
        src={image}
        alt="planet-01"
        className="cursor-pointer md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <a target="_Blank" rel="noreferrer" href={driveLink}>
          <h4 className="cursor-pointer font-mono lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
        </a>
        <p className="mt-[16px] font-serif lg:text-[20px] text-[14px] text-secondary-white">
          {Description}
        </p>
      </div>

      <a target="_Blank" rel="noreferrer" href={driveLink}>
        <div
          className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
        >
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </a>
    </div>
  </motion.div>
);

export default EventCard;
