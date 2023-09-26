import * as React from "react"
import { Layout } from "@common/layout"
import { Seo } from "@common/seo"
import { Hero } from "@home/hero"
import { About } from "@home/about"
import { Experience } from "@home/experience"
import { Projects } from "@home/projects"
import { Contact } from "@home/contact"
import { StarsCanvas } from "@canvas/stars"

const IndexPage = () => (
  <Layout>
    <div className="relative z-0 bg-primary">
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <StarsCanvas />
      </header>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
