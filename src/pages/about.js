import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout> 
    <SEO title="about" />     
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto magnam laudantium quia possimus eaque dolorem perspiciatis animi id sint at voluptates, 
          eligendi corporis iure placeat, soluta quidem debitis tempora.</p>
    </div>
    </Layout>
  )
}

export default AboutPage