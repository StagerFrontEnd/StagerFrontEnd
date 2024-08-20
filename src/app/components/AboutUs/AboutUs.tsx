'use client';

import styles from "./AboutUs.module.scss"
import aboutUsImg from "@public/aboutUs.png"
import accordionArrow from "@public/accordionArrow.png"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AboutUs = () => {
  const [firstAccordionIsVisible, setFirstAccordionVisible] = useState(false);
  const [secondAccordionIsVisible, setSecondAccordionVisible] = useState(false);
  const [thirdAccordionIsVisible, setThirdAccordionVisible] = useState(false);

  const handlefirstAccordionVisible = () => {
    setFirstAccordionVisible(!firstAccordionIsVisible);
  }
  const handleSecondAccordionVisible = () => {
    setSecondAccordionVisible(!secondAccordionIsVisible);
  }
  const handleThirdAccordionVisible = () => {
    setThirdAccordionVisible(!thirdAccordionIsVisible);
  }

  const firstAccordionArrowAnimateVariables = {
    open: {
      rotate: firstAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const secondAccordionArrowAnimateVariables = {
    open: {
      rotate: secondAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const thirdAccordionArrowAnimateVariables = {
    open: {
      rotate: thirdAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const accordionTextAnimateVariables = {
    hidden: {
      height: 0,
      opacity: 0
    },
    show: {
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "linear"
      }
    },
    close: {
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "linear"
      }
    }
  }

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__heading}>About us</div>
      <div className={styles.aboutUs__box}>
        <div className={styles.aboutUs__textBox}>
          <p className={styles.aboutUs__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <br />
          <p className={styles.aboutUs__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Image
          src={aboutUsImg}
          alt="about us"
          className={styles.aboutUs__Img}
        />
      </div>
      <div className={styles.aboutUs__box}>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: firstAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handlefirstAccordionVisible}>
            <div >
              Lorem ipsum dolor sit amet.
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={firstAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {firstAccordionIsVisible && (
              <motion.div
                initial={"hidden"}
                animate={"show"}
                exit={"close"}
                variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod neque voluptatibus, perspiciatis nisi consequatur?
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: secondAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handleSecondAccordionVisible}>
            <div >
              Lorem ipsum dolor sit amet.
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={secondAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {secondAccordionIsVisible && (
              <motion.div
              initial={"hidden"}
              animate={"show"}
              exit={"close"}
              variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod neque voluptatibus, perspiciatis nisi consequatur?
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: thirdAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handleThirdAccordionVisible}>
            <div >
              Lorem ipsum dolor sit amet.
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={thirdAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {thirdAccordionIsVisible && (
              <motion.div
              initial={"hidden"}
              animate={"show"}
              exit={"close"}
              variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod neque voluptatibus, perspiciatis nisi consequatur?
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div >
  )
}

export default AboutUs;
