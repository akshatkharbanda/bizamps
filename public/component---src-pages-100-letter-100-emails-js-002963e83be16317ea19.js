(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0SW5":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("bHgC"),r=a.n(o);a("YwZP"),a("Wbzz");t.a=function(){var e=Object(l.useState)(""),t=e[0],a=e[1],o=Object(l.useState)(""),i=o[0],m=o[1],s=Object(l.useState)(""),c=s[0],u=s[1],d=Object(l.useState)(""),g=d[0],h=d[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new XMLHttpRequest,l={fields:[{name:"email",value:t},{name:"website",value:i},{name:"phone",value:c},{name:"message",value:g}],context:{pageUri:"www.Bizamps.com",pageName:"BizAmps"}};console.log(l);var n=JSON.stringify(l);a.open("POST","https://api.hsforms.com/submissions/v3/integration/submit/1779155/0f533596-d32d-4d43-9d0a-e629c90f0610"),a.setRequestHeader("Content-Type","application/json");a.onreadystatechange=function(){4===a.readyState&&200===a.status?window.open("/b2b-digital-sales-marketing-agency-that-actually-delivers-good-results-in-delhi-ncr/"):(4===a.readyState&&403===a.status||4===a.readyState&&404===a.status)&&alert(a.responseText)},a.send(n)},className:r.a.formcontainer},n.a.createElement("div",{className:r.a.formTitle},"Leave a Reply"),n.a.createElement("div",{className:r.a.formSubtitle}," Your email address will not be published. Required fields are marked*"),n.a.createElement("div",{className:r.a.formContainer2},n.a.createElement("input",{className:r.a.input,type:"text",id:"email",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Email*",required:!0}),n.a.createElement("input",{className:r.a.input,type:"text",id:"website",value:i,onChange:function(e){return m(e.target.value)},placeholder:"Website URL *",required:!0}),n.a.createElement("input",{className:r.a.input,type:"text",id:"phone",value:c,onChange:function(e){return u(e.target.value)},placeholder:"Phone *",required:!0}),n.a.createElement("input",{className:r.a.message,type:"text",id:"message",value:g,onChange:function(e){return h(e.target.value)},placeholder:"Message",required:!0}),n.a.createElement("button",{className:r.a.SubmitButtom,type:"submit",value:"submit"}," SUBMIT")))}},WnYO:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("bHgC"),r=a.n(o),i=a("1eu9"),m=a.n(i),s=a("LAYS"),c=a("jTV7"),u=a("0SW5"),d=a("9eSz"),g=a.n(d),h=function(e){var t=[{image:e.blog1,title:"B2B Case Study Targeting International Schools",link:"/b2b-case-study-schools"},{image:e.blog2,title:"Targeting Investors for Crowd Funding Campaigns in UK",link:"/crowd-funding-case-study"},{image:e.blog3,title:"How a U.S. based blockchain tech company enhanced sales through BizAmps. ",link:"/blockchain-web-development-case-study"}],a=[{image:e.blog4,title:"Targeting Senior HRs of Top Indian companies",link:"/targeting-senior-hrs-of-top-indian-companies-b2b-enterprise-case-study"},{image:{},title:"",link:""},{image:{},title:"",link:""}];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r.a.checkoutContent},t.map((function(e,t){return n.a.createElement("div",{key:t,className:r.a.checkoutGroup},n.a.createElement(g.a,{className:r.a.checkoutImage,fluid:e.image}),n.a.createElement("div",{className:r.a.checkoutText},n.a.createElement("a",{href:e.link},e.title)," "))}))),n.a.createElement("div",{className:r.a.checkoutContent},a.map((function(e,t){return n.a.createElement("div",{key:t,className:r.a.checkoutGroup},n.a.createElement(g.a,{className:r.a.checkoutImage,fluid:e.image}),n.a.createElement("div",{className:r.a.checkoutText},n.a.createElement("a",{href:e.link},e.title)," "))}))))},p=function(e){var t=[{image:e.blog1,title:"[BLOG] ‘Value’ in Sales?",link:"/wth-does-value-even-mean-in-sales-how-to-really-deliver-it"},{image:e.blog2,title:"[BLOG] When To Outsource Lead Generation?",link:"/when-to-outsource-leadgen-in-house-or-agency-if-the-cost-is-same"},{image:e.blog3,title:"[BLOG] 100 Direct Mails vs 100 Cold Emails?",link:"/100-letter-100-emails"}],a=[{image:e.blog4,title:"[BLOG] After Starting a Sales Agency",link:"/what-to-do-after-starting-a-sales-agency"},{image:e.blog5,title:"[BLOG] Bofu Content",link:"/b2b-sales-funnel-strategy"},{image:e.blog6,title:"[BLOG] Expectations for Outsourcing Leadgen?",link:"/what-to-expect-when-outsourcing-leadgen-is-it-worth-it-cost"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r.a.checkoutContent},t.map((function(e,t){return n.a.createElement("div",{key:t,className:r.a.checkoutGroup},n.a.createElement(g.a,{className:r.a.checkoutImage,fluid:e.image}),n.a.createElement("div",{className:r.a.checkoutText},n.a.createElement("a",{href:e.link},e.title)," "))}))),n.a.createElement("div",{className:r.a.checkoutContent},a.map((function(e,t){return n.a.createElement("div",{key:t,className:r.a.checkoutGroup},n.a.createElement(g.a,{className:r.a.checkoutImage,fluid:e.image}),n.a.createElement("div",{className:r.a.checkoutText},n.a.createElement("a",{href:e.link},e.title)," "))}))))},b=a("sL2v"),f=a("B1WW");t.a=function(e){var t=Object(l.useState)(e.checkoutBlog),a=t[0];t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{alt:e.altForBG,fluid:e.bg,className:r.a.container1},n.a.createElement(s.a,{logo:e.logo,color:e.color,hamburger:e.hamburger})),n.a.createElement(m.a,{fluid:e.mobbg,className:r.a.container2},n.a.createElement(s.a,{logo:e.logo,hamburger:e.hamburger}),n.a.createElement(g.a,{fluid:e.blogMobText,className:r.a.blogMobText})),n.a.createElement("main",null,e.children),!0===a?n.a.createElement("div",{className:r.a.checkoutContainer},n.a.createElement("div",{className:r.a.checkoutTitle},"Checkout Our Other Blogs"),n.a.createElement(p,{blog1:e.blog1,blog2:e.blog2,blog3:e.blog3,blog4:e.blog4,blog5:e.blog5,blog6:e.blog6})):n.a.createElement("div",{className:r.a.checkoutContainer},n.a.createElement("div",{className:r.a.checkoutTitle},"Checkout Our Other Case Stories"),n.a.createElement(h,{blog1:e.blog1,blog2:e.blog2,blog3:e.blog3,blog4:e.blog4})),n.a.createElement("div",{className:r.a.personContainer},n.a.createElement(c.a,{person:e.founder})),n.a.createElement("div",{className:r.a.formcontainer},n.a.createElement(u.a,null)),n.a.createElement("div",{className:r.a.location1},n.a.createElement(b.a,{first:"Home",second:"Expertise",third:e.current})),n.a.createElement(f.a,null))}},bHgC:function(e,t,a){e.exports={container1:"templet-module--container1--kd8VM",container2:"templet-module--container2--wEfR3",blogMobText:"templet-module--blogMobText--2cixG",desktopText:"templet-module--desktopText--1LYWH",blogContainer:"templet-module--blogContainer--1krV6",blogContainer2:"templet-module--blogContainer2--1XrRW",QuestionBlog2:"templet-module--QuestionBlog2--1Zuwa",BlogimageContainer:"templet-module--BlogimageContainer--2LBC6",image:"templet-module--image--2mayK",imageText:"templet-module--imageText--14oio",CSimageContainer:"templet-module--CSimageContainer--FvVpY",videoContainer:"templet-module--videoContainer--2s1B9",checkoutContainer:"templet-module--checkoutContainer--2Zefm",checkoutContent:"templet-module--checkoutContent--2wKOb",checkoutGroup:"templet-module--checkoutGroup--2bGim",checkoutImage:"templet-module--checkoutImage--354fc",checkoutTitle:"templet-module--checkoutTitle--UsIlY",checkoutText:"templet-module--checkoutText--3TtBu",personContainer:"templet-module--personContainer--3qARd",box:"templet-module--box--2brHI",imageContainer:"templet-module--imageContainer--2RE1f",table:"templet-module--table--2QkN-",personAlign:"templet-module--personAlign--IHiGg",boxalign:"templet-module--boxalign--1VNLS",personTitle:"templet-module--personTitle--2ML1e",personSubtitle:"templet-module--personSubtitle--25rPj",formcontainer:"templet-module--formcontainer--yPu06",formTitle:"templet-module--formTitle--2m7LT",formSubtitle:"templet-module--formSubtitle--3NYkT",formContainer2:"templet-module--formContainer2--U3rCy",input:"templet-module--input--3jotW",message:"templet-module--message--2JcOn",SubmitButtom:"templet-module--SubmitButtom--3hJAJ",location1:"templet-module--location1--WGQlq",headingContainer:"templet-module--headingContainer--1nJer",Mobheading:"templet-module--Mobheading--1_F7C",heading:"templet-module--heading--3Pxdb"}},gLo8:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogLedgenQuery",(function(){return u}));var l=a("q1tI"),n=a.n(l),o=a("WnYO"),r=a("bHgC"),i=a.n(r),m=a("9eSz"),s=a.n(m),c=a("vrFN");t.default=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"100 letters VS 100 emails, what is better?",description:"Is old really gold? The best way to reach executives is via Direct Mail, but is it? See results of our experiment"}),n.a.createElement(o.a,{logo:e.data.logo.childImageSharp.fluid,hamburger:e.data.hamburger.childImageSharp.fluid,bg:e.data.bg1.childImageSharp.fluid,mobbg:e.data.mobbg.childImageSharp.fluid,blogMobText:e.data.text.childImageSharp.fluid,founder:e.data.founder.childImageSharp.fluid,current:"[BLOG] Direct Mails vs Cold emails",blog1:e.data.blog1.childImageSharp.fluid,blog2:e.data.blog2.childImageSharp.fluid,blog3:e.data.blog3.childImageSharp.fluid,blog4:e.data.blog4.childImageSharp.fluid,blog5:e.data.blog5.childImageSharp.fluid,blog6:e.data.blog6.childImageSharp.fluid,checkoutBlog:!0},n.a.createElement("div",{className:i.a.blogContainer},n.a.createElement("div",{className:i.a.blogContainer2},n.a.createElement("p",null,"We conducted an experiment where we sent 100 letter and 100 emails to cold prospects to see which one yields better results, here's the process and result:"),n.a.createElement("p",{style:{display:"flex",justifyContent:"center",fontSize:"2rem",margin:"2rem"}},n.a.createElement("b",null,"Process overview:")),n.a.createElement("p",null,"While conducting the experiment, I kept certain things constant for better results."),"   ",n.a.createElement("p",null," 1. I customized the first two lines of the emails and letters both.",n.a.createElement("br",null),"2. Budget: INR 5,000 each",n.a.createElement("br",null),"3. Key performance indicator: Leads",n.a.createElement("br",null),"4. Detailed Breakdown"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"The following table shows the detailed breakdown of the 2 processes."),n.a.createElement("br",null),n.a.createElement("div",{className:i.a.BlogimageContainer},n.a.createElement(s.a,{className:i.a.table,fluid:e.data.table1.childImageSharp.fluid})),n.a.createElement("br",null),n.a.createElement("p",null,"Clearly, email wins! Even though the net result is the same, emails save time! And well, time is money… right?"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:i.a.QuestionBlog2},"But why did I even consider direct mail in the first place?"),n.a.createElement("p",null,"Why should one waste time, money, and efforts in sending out letters to clients when emails can get the job done in seconds."),n.a.createElement("p",null,"“Envelopes actually addressed by hand often outperform all others in controlled split-tests.” - Dan Kennedy"),n.a.createElement("p",null,"Dan Kennedy, whom I respect a lot, is a traditional marketer and a very notable copywriter."),n.a.createElement("p",null,"He believes that various old school methods get the work done better than modern digitized ones."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"Secondly, direct mail stands out."),n.a.createElement("p",null,"The average lifespan of an email is now just 2 seconds and brand recall directly after seeing a digital ad is just 44%, compared to direct mail which has a brand recall of 75%. This helps in account-based marketing."),n.a.createElement("p",null,"However, over the years printing costs have fallen but the postage costs have increased considerably, and thus direct mail cannot be used as the only means to approach people."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"One can use direct mails when approaching a group of people who are not tech-savvy."),n.a.createElement("p",null,"Direct mail also works well when the motive is to grab the attention of people holding top positions like the CFO or CMO of a company. Their attention is super valuable but scarce."),n.a.createElement("p",null,"Imagine getting 800 emails every day versus getting a letter addressed specifically to you. Wouldn’t you opt for the letter too?"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"We can use direct mails when the target market is small."),n.a.createElement("p",null,"You can see it as a small field of crops. When the field is small, the farmer can manually sow the seeds and thus does not need heavy machinery."),n.a.createElement("p",null,"A small target allows you to customize your letters without incurring enormous costs."),n.a.createElement("p",null,"However, many businesses refrain from using it."),n.a.createElement("p",null,"This is because email with its low start-up costs still receives a larger return on investment despite the higher response rate of direct mail."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"Email marketing delivers over 5x higher ROI than direct mail."),n.a.createElement("p",null,"Emails are cheap and track-able unlike letters that might get lost in the post offices even after spending money on them. Besides, people are more comfortable in sharing their email ids as they can simply unsubscribe if they receive emails they are not interested in."),n.a.createElement("p",null,"Thus, if given a choice, I would rather send a gift across than wasting 7 hours in writing letters!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{style:{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}},"So, while small businesses are concerned, letters work; but to scale you have to switch to emails."),n.a.createElement("p",null,"We at BizAmps use email automation that ensures your emails are received by the right people and the right time. No waste of time or money!"),n.a.createElement("p",null,"We customize the first liners and also curate content that would please the reader and also generate a need for your service."),n.a.createElement("p",null,"Check out our B2B Marketing pricing and packages"),n.a.createElement("p",null,"So, when life gives you BizAmps, take the leads!"))),n.a.createElement("div",{className:i.a.videoContainer},n.a.createElement("iframe",{title:"100 letters VS 100 emails, what is better?",width:"560",height:"315",src:"https://www.youtube.com/embed/56GQPH9KJjE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))};var u="1219166759"},glye:function(e,t,a){e.exports={location:"location-module--location--3WxTy",end:"location-module--end--2IZAd"}},jTV7:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("bHgC"),r=a.n(o),i=a("9eSz"),m=a.n(i);t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r.a.box},n.a.createElement("div",{className:r.a.imageContainer},n.a.createElement(m.a,{className:r.a.personAlign,fluid:e.person})),n.a.createElement("div",{className:r.a.boxalign},n.a.createElement("div",{className:r.a.personTitle},"Akshat Kharbanda"),n.a.createElement("div",{className:r.a.personSubtitle},"Struggled with B2B leadgen for 3.5 years. Took 1.5 years to perfect a system that throws out hot leads at the end."))))}},sL2v:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("glye"),r=a.n(o);t.a=function(e){return n.a.createElement("div",{className:r.a.location},e.first," ",">>"," ",e.second," ",">>"," ",n.a.createElement("span",{className:r.a.end},e.third))}}}]);
//# sourceMappingURL=component---src-pages-100-letter-100-emails-js-002963e83be16317ea19.js.map