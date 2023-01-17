'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-8 relative`}
  >
    <div className="footer-gradient z-10" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[44px] text-[24px] text-white">
          Reach Us
        </h4>
        <Link type="button" href="mailto:csassociation@mrec.ac.in" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/gmail.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            csassociation@mrec.ac.in
          </span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[18px] text-white">
            CYBER SECURITY ASSOCIATION
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - MREC Cyber Security Assossation
          </p>

          <div className="flex gap-4 z-20">
            {socials.map((social) => (
              <Link target="_Blank" rel="noreferrer" href={social.link}>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[30px] h-[30px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
