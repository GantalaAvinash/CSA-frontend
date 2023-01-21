'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { academics } from '../constants';
import { Academic, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Academics = () => (
  <section className={`${styles.paddings} overflow-hidden relative z-10`} id="academics">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Academics" />
        <TitleText title={<>Academics</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {academics.map((feature) => (
            <Academic key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <div
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/acd.svg"
          alt="Academics"
          className="w-[90%] h-[90%] object-contain"
        />
      </div>
    </motion.div>
  </section>
);

export default Academics;
