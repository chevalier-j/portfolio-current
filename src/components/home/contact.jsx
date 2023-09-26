/*
 * path: /src/components/home/contact.jsx
 */
import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { send } from "@emailjs/browser"
import { styles } from "@styles/styles"
import { PlanetCanvas } from "@canvas/planet"
import { slideIn } from "@utils/motion"
import { SectionWrapper } from "@utils"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleFormChange = e => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

  const handleFormSubmit = async e => {
    e.preventDefault()

    // form validation start
    if (
      form.name.trim() === "" ||
      form.email.trim() === "" ||
      form.message.trim() === ""
    ) {
      alert("Please fill in all the fields.")
      return
    }

    if (!emailRegex.test(form.email)) {
      alert("Please provide a valid email address.")
      return
    }

    if (form.name.length > 50 || form.message.length > 500) {
      alert("Name should be less than 50 and message less than 500 characters.")
      return
    }
    // form validation end, therefore continue with...

    try {
      // This sets loading to true, which could be used to show a loading spinner or disable the form submit button
      setLoading(true)
      // This makes a request to the emailjs service to send an email
      await send(
        "service_vnjoh7w",
        "template_a9io3ty",
        {
          from_name: form.name,
          to_name: "Alex",
          from_email: form.email,
          to_email: "adelgibert@gmail.com",
          message: form.message,
        },
        "RYXXr0rTV02WKnvRj"
      )
      setLoading(false)
      alert("Thanks! Will get back to you ASAP :)")
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert("Something went wrong 😩")
    }
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.1, 1)}
        className={`flex-[0.75] bg-black-100 p-8 rounded-2xl`}
      >
        {/* <p className={`${styles.sectionSubText}`}>Contact</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Get in touch</h2>
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className={`mt-12 flex flex-col gap-8`}
        >
          {/* form name: */}
          <label htmlFor="name" className={`flex flex-col`}>
            <span className={`text-white font-medium mb-4`}>Your name</span>
            <input
              required
              id="name"
              maxLength="35"
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="e.g. John Smith"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
							text-white rounded-lg outline-none border-none font-medium 
							${styles.focusHighlight}`}
            />
          </label>
          {/* form email: */}
          <label htmlFor="email" className={`flex flex-col`}>
            <span className={`text-white font-medium mb-4`}>
              Your email address
            </span>
            <input
              id="email"
              required
              onChange={handleFormChange}
              name="email"
              type="email"
              value={form.email}
              placeholder="e.g. johnsmith@example.com"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
							text-white rounded-lg outline-none border-none font-medium 
							${styles.focusHighlight} `}
              maxLength="35"
            />
          </label>
          {/* form message: */}
          <label htmlFor="message" className="flex flex-col">
            <span className={`text-white font-medium mb-4`}>Message</span>
            <textarea
              required
              rows={7}
              id="message"
              type="text"
              name="message"
              value={form.message}
              maxLength="500"
              onChange={handleFormChange}
              placeholder="What would you like to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
							text-white rounded-lg outline-none border-none font-medium 
							${styles.focusHighlight}`}
            />
          </label>
          {/* <motion.div
						variants={slideIn('left', 'tween', 0.3, 1.5)}
						// className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
					> */}
          <button
            type="submit"
            tabIndex="0" // Added tabIndex for focusability
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit 
						text-white font-bold shadow-md shadow-primary focus:bg-myblue 
						${styles.focusHighlight} `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {/* </motion.div> */}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.01, 1)}
        className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px]`}
      >
        <PlanetCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, "contact")

export { WrappedContact as Contact }
