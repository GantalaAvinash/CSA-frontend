'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const EventCard = ({ image, title, description, driveLink, index }) => {
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    // Fetch data from API
    fetch("https://csa-backend-iuwv.onrender.com/api/events")
      .then(response => response.json())
      .then(data => {
        setDataFetched(true);
      });
  }, []);

  if (!dataFetched) {
    return (
      <img 
        src="/globe-loading.gif"
        alt="Loading"
        className=" md:w-[330px] w-full h-[230px] object-cover"
      />
    )
  }

  return (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.25, 0.5)}
    className="flex md:flex-row flex-col gap-4 glassmorphism rounded-[32px] p-[32px] mb-[32px]"
  >
    <a target="_Blank" rel="noreferrer" href={driveLink}>
      <img
        src={image}
        alt="Event Image"
        className="cursor-pointer md:w-[330px] h-[230px] rounded-[32px] object-cover"
      />
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[600px]">
        <a target="_Blank" rel="noreferrer" href={driveLink}>
          <h4 className="cursor-pointer font-serif font-extrabold lg:text-[36px] text-[22px]">
            {title}
          </h4>
        </a>
        <p className="mt-[12px] font-sans font-medium lg:text-[16px] text-[10px] text-white">
          {description}
        </p>
      </div>

      <a target="_Blank" rel="noreferrer" href={driveLink}>
        <div
          className="lg:flex hidden items-center justify-center mr-8 pr-8 w-[90px] h-[90px] rounded-full bg-transparent border-[1px] border-white"
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
};

export default EventCard;
