'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} overflow-hidden relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Why Cyber Security?" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-sans sm:text-[32px] text-[18px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">In today's world,</span> Cybersecurity is very important because of some security threats and cyber-attacks. For data protection, many companies develop software. This software protects the data. <br></br>
        <span className="font-extrabold text-white">
        Cybersecurity
        </span> is important because not only it helps to secure information but also our system from virus attack.{' '}<br></br>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
