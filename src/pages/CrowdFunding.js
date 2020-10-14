import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import BlogContent from '../components/BlogTemplet/BlogContent'
import styles from '../stylesheets/templet.module.scss'
import Img from 'gatsby-image'
import SEO from "../components/seo"

const Home = (props) => {
    return(
    <>
             <SEO title="CrowdFunding Campaign Case study | Targeting investors"
                  description="See how we raised an extra 100K pounds when doing a equity crowdfunding campaign targeting investors in UK - Case study"/>
            
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'International Institutes'}
                color={'#2F80ED'}
             >

             <div className={styles.headingContainer} style={{backgroundColor:"#2566BA"}}>
                <h1 className={styles.heading}>B2B Lead Generation through ABM Strategy</h1>
                <h2 className={styles.Mobheading}><b>B2B Lead Generation through ABM Strategy</b></h2>
             </div>

             <div className={styles.blogContainer}>             
                <div className={styles.blogContainer2}>
                  <h2 style={{fontFamily:"Roboto" }}>About The Client:</h2>
                  <p>Our client offers a secure and real-time communication solution. It enables doctors, nurses and the wider team in UK to communicate and collaborate more effectively, accelerating productivity, reducing costs, and improving patient outcomes.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Scenario:</h2>
                  <p>The client wanted to raise capital for their project through crowdfunding  campaigns in UK. The client had already generated 30-40% of their crowdfunding target but faced problems in acquiring rest of the leads. </p>

                  <h2 style={{fontFamily:"Roboto" }}>Target:</h2>
                  <p>Investors in United Kingdom.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Channel:</h2>
                  <p>Cold Emails + LinkedIn
                  Here is the complete process overview of our successful crowdfunding campaign.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Process Overview:</h2>
                  <p>1. We collected the data from different sources like LinkedIn and various data  enrichment tools.<br></br> 
                    2. Established connections with the targets on LinkedIn using the automated tool  from the Client’s profile. <br></br>
                    3. Our team reached out to Tech based investors in UK by sending them invites.  A donation link was sent to them along with the description of client’s service. <br></br>
                    4. The campaign was then extended to the other non-tech based investors in UK and rest of the Europe.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Accomplishments:</h2>
                  <p>• The client was able to get 150 investors on board with them. <br></br>
                    • They were able to raise 150% of their crowdfunding target i.e. 100 thousand pounds more than the set target.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Client outreach replies</h2>  
                  <div className={styles.BlogimageContainer}><Img className={styles.image} fluid={props.data.Img1.childImageSharp.fluid}/></div>

                </div>
              </div>
                   
    
             </BlogLayout> 
              
    </>
    )
}

export default Home;

export const BlogLedgenQuery = graphql`
  query {

      logo: file(relativePath: { eq: "LogoPurple.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bg1: file(relativePath: { eq: "CrowdFundingBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mobbg: file(relativePath: { eq: "CrowdingFundingMobBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    text: file(relativePath: { eq: "InternationalInstitutesText.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    founder: file(relativePath: { eq: "person.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Img1: file(relativePath: { eq: "CrowdFundingImg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog1: file(relativePath: { eq: "CS1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog2: file(relativePath: { eq: "CS2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog3: file(relativePath: { eq: "CS3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

}
`;