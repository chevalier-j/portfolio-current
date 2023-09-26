/*
 * path: /src/components/home/about.jsx
 */
/* Bugs:
	ServiceCards are not aligned properly in small screens.
	There a "jumps" when shrinking / expanding the window.
*/
/* eslint-disable react/no-unknown-property */
import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "@styles/styles"
import { services } from "@constants"
import { fadeIn, textVariant } from "@utils/motion"
import { SectionWrapper } from "@utils"

const ServiceCard = ({ title, icon, index }) => {
  return (
    /* tilt parallax effect */
    <Tilt className="xs:w-[250px] w-full">
      {/* motion effects */}
      <motion.div
        /* using the index * 0.5, each card fades in one after the other */
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          /* tilt options: */
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {`My journey through various technology jobs and hobbies has exposed me to a diverse spectrum of technologies and skills. While my primary focus has been React web development, I've ventured into other realms of the tech landscape, broadening my expertise along the way`}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about")
export { WrappedAbout as About }
