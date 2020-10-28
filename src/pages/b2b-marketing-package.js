import React from 'react'
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Testimonial from "../components/Testimonial/Testimonial"
import Team from "../components/Team/Team"
import Navbar from "../components/navbar/Navbar"
import B2BMarketingCard from "../components/B2BMarketingPage/B2BMarketingCard"
import WeAreCard from "../components/B2BMarketingPage/WeAreCard"
import Location from "../components/Location/Location"
import Footer from '../components/Footer/footer'

import FreeConsult from "../assets/B2BMarketingPackages/FreeConsult"
import PaidConsult from "../assets/B2BMarketingPackages/PaidConsult"
import Card1Img from "../assets/B2BMarketingPackages/Card1Img"
import Card2Img from "../assets/B2BMarketingPackages/Card2Img"
import Card3Img from "../assets/B2BMarketingPackages/Card3Img"
import Card4Img from "../assets/B2BMarketingPackages/Card4Img"
import WeAreBg from "../assets/B2BMarketingPackages/WeAreBg"
import LeadIcon from "../assets/B2BMarketingPackages/LeadIcon"
import LeadIconMob from "../assets/B2BMarketingPackages/LeadIconMob"
import RevenueIcon from "../assets/B2BMarketingPackages/RevenueIcon"
import RevenueIconMob from "../assets/B2BMarketingPackages/RevenueIconMob"
import NamedAccountWorkflow from "../assets/B2BMarketingPackages/NamedAccountWorkflow"
import LeadsPredictWorkflow from "../assets/B2BMarketingPackages/LeadsPredictWorkflow"
import PaidConsultMob from "../assets/B2BMarketingPackages/PaidConsultMob"
import SEO from "../components/seo"

import styles from "../stylesheets/b2bMarketingPackage.module.scss"

const B2BMarketingPackagePage = (props) => {
  const cards=[{img:Card1Img ,
    key:"one",
    heading:"We want to get into big must-have named accounts",
    who:"Companies selling $100,000+ deals and the key focus is account engagement",
    concept1:"1) Whole marketing campaign targeted towards a single account or a cluster of 5 similar accounts.",
    concept2:"2) Research + personalization drive results from even non-performing channels." ,
    whyWorks:"When we narrow our focus to the point of a laser then better & creative ideas come." ,
    timeline:"3 months for Proof of concept and 3 months after that for scaling number of accounts.", 
    monthlyPrice:"From $1499 to $2499 based on goals." ,
    whyBiz:"Sufficient knowledge for each channel and personalization to execute the campaign right." ,
    channels:"Usually LinkedIn & Display Ads + BoFu Content + Outreach + Direct mail + Misc.",  
    workflow:NamedAccountWorkflow},
  { img:Card2Img ,
    key:"two",
  heading:"We want 200 qualified B2B Leads/month",
  who:"Companies who already have a sales team who want to assure results fast.",
  concept1:"1) Prove a model where one low-cost human resource generates 5-20 leads/month easily.",
  concept2:"2) Scaling that lead generation team." ,
  whyWorks:"80% of the workflow is templatized & automated. Human Resources just have to do personalizations for higher response rates.+ India has English speaking low-cost human resources." ,
  timeline:"3 months for Proof of concept and 3 months after that for scaling the team by hiring and training." ,
  monthlyPrice:"From $999 to $2499 based on market difficulty." ,
  whyBiz:"Ran such Proof-of-concept campaign 10+ times." ,
  channels:"Email Outreach, LinkedIn Outreach, Tele-sales." , 
  workflow:""},
  {img:Card3Img ,
    key:"three",
  heading:"We want instant scalablity & automated marketing",
  who:"You are competing with Silicon valley Self-serve B2B SaaS companies targeting micro as well as large businesses.",
  concept1:"1) Identify accounts automatically based on buying signals. ",
  concept2:"2) Personalize website, outreach, ads on autopilot." ,
  whyWorks:"When we narrow our focus to the point of a laser then better & creative ideas come." ,
  timeline:"6 months for Proof of concept and 3 months after that for scaling." ,
  monthlyPrice:"Contact Akshat." ,
  whyBiz:"This is an experimental system that needs tweaks and focus. We understand it." ,
  channels:"Intent Signals + AI Personalization + Chatbots + Marketing Automation." , 
  workflow:""},
  {img:Card4Img ,
    key:"four",
  heading:"We just need some leads predicatably in our inbox",
  who:"Startups and bootstrapping companies.",
  concept1:"1) Automated emails and LinkedIn messages with new-age copywriting and BizAmps Secrets.",
  concept2:"2) Generate leads from affordable sources like FB Lead Ads (If applicable).", 
  whyWorks:"Usually, 3% of any market is always looking to buy." ,
  timeline:"45 days to start generating leads or we work for free." ,
  monthlyPrice:"From $999+ based on goals." ,
  whyBiz:"Done this ever since we re-branded in 2017." ,
  channels:"Email Outreach or LinkedIn Outreach or Tele-sales." , 
  workflow:LeadsPredictWorkflow}]
    return (
        <Layout>
          <SEO title="B2B Marketing Packages & Pricing Strategy| 90 Days Plan"
               description="We set up B2B outbound marketing systems that generate sales leads within 90 days or we work for free - see our automatic client acquisition setup."/>
          
          <BackgroundImage alt={"Lead generation system"} fluid={props.data.bg2.childImageSharp.fluid} className={styles.container} >
               <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                    <div className={styles.headerContent}>
                        <h1 className={styles.headerTitle}>Transform your Marketing & LeadGen</h1>
                        <div className={styles.headerSubtitle}>Marketing so good that you will ask us to PAUSE!</div>
                        <button className={styles.headerButton}><a href="/form" style={{textDecoration:"none",color:"#ffffff"}} > Find How</a></button>
                    </div>
          </BackgroundImage >

          <BackgroundImage alt={"Lead generation system"} fluid={props.data.bg4.childImageSharp.fluid} className={styles.container2} >
               <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                    <div className={styles.headerContent2}>
                        <h1 className={styles.headerTitle2}>Transform your Marketing & LeadGen</h1>
                        <div className={styles.headerSubtitle2}>Marketing so good that you will ask us to PAUSE!</div>
                        <button className={styles.headerButton2}><a href="/form" style={{textDecoration:"none",color:"#ffffff"}} > Find How</a></button>
                    </div>
          </BackgroundImage >

          <div className={styles.weAreContainer}>
            <div className={styles.weAreBg}><WeAreBg /></div>
            <div className={styles.weAreContent}>
              <div className={styles.weAreHeading}>We Are</div>
              <div className={styles.weAreCards}>
              <WeAreCard icon={LeadIcon} iconMob={LeadIconMob} title="Lead Generation Experts" subtitle="No generalists here" />
              <WeAreCard icon={RevenueIcon} iconMob={RevenueIconMob} title="Revenue Focused" subtitle="Growing your top-line" caption="Setting systems for life" />
              </div>
              <div className={styles.weAreSubHeading}>We setup B2B marketing outbound marketing systems that generate sales leads within 90 days or we work for free</div>
          </div>
          </div>

          <div className={styles.cardsContainer}>
            {
              cards.map((card)=>{
                return (<B2BMarketingCard key={card.key} img={card.img} heading={card.heading} who={card.who} concept1={card.concept1} concept2={card.concept2}
                  whyWorks={card.whyWorks} timeline={card.timeline} monthlyPrice={card.monthlyPrice} whyBiz={card.whyBiz} channels={card.channels}
                  workflow={card.workflow} />)
              })
            }
            
          </div>

          <div className={styles.paidConsultContainer}>
            <div className={styles.paidConsultImgDiv}>< PaidConsult /></div>
            <div className={styles.paidConsultMobImgDiv}><PaidConsultMob /></div>
            <div className={styles.paidConsultContent}>
              <div className={styles.paidConsultHeading}>
                <span>Paid Consultation with Akshat</span>
                <Img fluid={props.data.akshat.childImageSharp.fluid} className={styles.akshat} />
              </div>
              <div className={styles.paidConsultSub1}>
                <span>Who is it for:  </span>
                <span> Consultants/ Agencies/ Founders</span>
              </div>
              <div className={styles.paidConsultSub2}>
                <span>Price: </span>
                <span> From $1/min</span>
              </div>
              <button className={styles.paidConsultButton}><a href="https://calendly.com/akshatkharbanda/30min?month=2020-10" target="blank" style={{textDecoration:"none",color:"#ffffff"}} >Select a Date</a></button>
            </div>
          </div>

           <div className={styles.freeConsultContainer}><FreeConsult />
           <div className={styles.freeConsult} >
             <div className={styles.freeConsultContent}>
             <div >Book a free consultation today</div>
             <button><a href="/form" style={{textDecoration:"none",color:"#ffffff"}} > Get Started </a></button>
             </div>
           </div>
           </div>
            
            <div>
        <Testimonial conor={props.data.conor.childImageSharp.fluid} gautam={props.data.gautam.childImageSharp.fluid} />
            </div>

        <Team akshat={props.data.akshat.childImageSharp.fluid} 
        mehvish={props.data.mehvish.childImageSharp.fluid} 
        anvishka={props.data.anvishka.childImageSharp.fluid} 
        shweta={props.data.shweta.childImageSharp.fluid}
        />

        <Location first="Home" second="Pricing" third="B2B Marketing Packages" />

        <Footer />

        </Layout>
    )
}

export default B2BMarketingPackagePage

export const B2BMarketingPackagePageQuery = graphql`
  query {
    bg2: file(relativePath: { eq: "bgMarketingPackage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bg4: file(relativePath: { eq: "bg4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    akshat: file(relativePath: { eq: "akshat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    conor: file(relativePath: { eq: "conor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gautam: file(relativePath: { eq: "gautam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mehvish: file(relativePath: { eq: "mehvish.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    anvishka: file(relativePath: { eq: "anvishka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    shweta: file(relativePath: { eq: "shweta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
