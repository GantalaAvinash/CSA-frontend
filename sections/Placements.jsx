'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { placements } from '../constants';
import { staggerContainer } from '../utils/motion';
import { PlacementCard, TitleText, TypingText } from '../components';

const Placements = () => {
  const [active, setActive] = useState('placement-3');

  return (
    <section className={`${styles.paddings}`} id="placements">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Placements" textStyles="text-center" />
        <TitleText
          title={<>Discover the opportunities that await you</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {placements.map((placement, index) => (
            <PlacementCard
              key={placement.id}
              {...placement}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Placements;
