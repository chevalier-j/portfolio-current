/*
 * path: /src/components/common/navbar.jsx
 */
import { useState } from "react"
// import { Link } from "react-router-dom"
import { Link } from "gatsby"
import { navLinks } from "@constants"
// import { logo, menu, close } from '@assets'
import { menu, close } from "@assets"
import { styles } from "@styles"

const Navbar = ({ siteTitle }) => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} 
        w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          {/* <img
						src={logo}
						alt="Chevalier's logo"
						className="w-9 h-9 object-contain"
					/> */}
          <p className="flex text-white text-[18px] font-bold cursor-pointer bg-red-700">
            Chevalier&nbsp;
            <span className="sm:block hidden bg-gray-700">
              |&nbsp;Software&nbsp;Engineer
            </span>
            {/* {siteTitle} */}
          </p>
        </Link>
        {/* Desktop view: */}
        {/*  this will be used again on mobile menu, so best to refactor this to keep code DRY */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(navLink => (
            <Link
              to={`#${navLink.id}`}
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              {navLink.title}
            </Link>
          ))}
        </ul>

        {/* Mobile (hamburger) view: */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img src={toggle ? close : menu} alt="menu icon" />
          </button>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map(navLink => (
                <Link
                  to={`${navLink.id}`}
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(navLink.title)
                  }}
                >
                  {navLink.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
