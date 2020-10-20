import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from "gatsby"
import Img from 'gatsby-image'


import Navbar from "../components/navbar/Navbar";
import styles from '../stylesheets/thankyou.module.scss';
import Location from "../components/Location/Location";
import Footer from '../components/Footer/footer'



const Thankyou = (props) =>{

    return(
        <>
            <BackgroundImage fluid={props.data.BG.childImageSharp.fluid}  className={styles.container} >
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                    <div className={styles.bgText}>
                         <h1 style={{fontSize:"3rem"}}>Thank you - Your stuff is on its way!</h1>
                         <button className={styles.button} style={{backgroundColor:"#001735"}}>DOWNLOAD GUIDE</button>
                    </div>


            </BackgroundImage >

            <div className={styles.videoContainer}>
                   <iframe width="800" height="450" src="https://www.youtube.com/embed/WMUHIPwca4Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className={styles.callContainer}>
                <h2>Book a call with Akshat</h2>
                {/* <button className={styles.button}>SEE TIME SLOTS</button> */}
                <a href="https://calendly.com/akshatkharbanda/30min?month=2020-06" target="_blank"><button className={styles.button}>SEE TIME SLOTS</button></a>
            </div>

            <div className={styles.personContainer}>
                <div className={styles.person}>
                    <p>"Akshat knows digital marketing, in and out. <br></br>It’s every worth your while to use BizAmps for your digital marketing initiatives. <br></br>Akshat holds an edge over others in delivering on performance marketing and SEO targets."</p>
                    <div className={styles.image}>
                        <Img fluid={props.data.image.childImageSharp.fluid} />
                    </div>
                    <p><b>Aishwarya Vardhan Chaturvedi</b></p>
                    <p>Head of Business Development HR SaaS Company</p>
                </div>
            </div>

            <Location first="Home" second="Expertise" third="Privacy Policy" />

            <Footer />
        </>
    )

}

export default Thankyou;

export const IndexPageQuery = graphql`
  query {

    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    BG: file(relativePath: { eq: "ThankyouBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }

    image: file(relativePath: { eq: "aishwarya1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }
}`