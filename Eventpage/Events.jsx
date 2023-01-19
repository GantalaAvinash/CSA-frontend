'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { EventTitleText, TypingText } from '../components';
import EventsCard from './EventsCard';

const Eventspage = () => {
  const [data, setData] = useState([]);
  const baseUrl = 'https://csa-backend-iuwv.onrender.com/api/events';
  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setData(response.data.event);
      })
      .catch((error) => { console.error(error); });
  });
  return (
  <section className={`${styles.paddings} relative z-10` } id='events'>
    <motion.div
      variants={staggerContainer}
      initial="show"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <EventTitleText title={<>EVENTS</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[20px] pr-[50px]">
        {data.map((item, index) => (
          <EventsCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  );
};

export default Eventspage;
