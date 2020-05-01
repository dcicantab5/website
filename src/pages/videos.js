import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <h1 >Videos {data.site.siteMetadata.title}
    </h1>
    
    <p>
      <h4>Resources for the effective management of COVID19 in the DOMHKL.</h4>
    </p>
    <p>
    <div>Etika Batuk</div>
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VQyAndApidY" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </p>  
    <p>
    <div>Donning and Doffing PPEs</div>
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/2JF4DUyPySQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
        </p>
    <p>
    <div>How infection spreads in healthcare facilities</div>
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/BMmCg2hsZqM" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
        </p>

    <p>
    <div>Progressive Muscle Relaxation</div>
    <iframe width="560" height="315" src="../psycho.mp4" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </p>

    <img src={`../../aaims_logo.jpeg`} 
         alt=""
         width="50" />
  </Layout> 
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`