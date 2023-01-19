'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const EventCard = ({ image, title, Description, driveLink, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.25, 0.5)}
    className="flex md:flex-row flex-col gap-3 "
  >
    <a target="_Blank" rel="noreferrer" href={driveLink}>
      <img
        src={image}
        alt="Events"
        className="cursor-pointer md:w-[330px] h-[230px] rounded-[32px] object-cover"
      />
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[600px]">
        <a target="_Blank" rel="noreferrer" href={driveLink}>
          <h4 className="cursor-pointer font-mono lg:text-[36px] text-[22px] text-white">
            {title}
          </h4>
        </a>
        <p className="mt-[12px] font-serif lg:text-[16px] text-[10px] text-secondary-white">
          {Description}
        </p>
      </div>

      <a target="_Blank" rel="noreferrer" href={driveLink}>
        <div
          className="lg:flex hidden items-center justify-center w-[90px] h-[90px] rounded-full bg-transparent border-[1px] border-white"
        >
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[35%] h-[35%] object-contain"
          />
        </div>
      </a>
    </div>
  </motion.div>
);

export default EventCard;
