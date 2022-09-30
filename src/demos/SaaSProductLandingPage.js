import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
// import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter";
// import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as Terminal } from "feather-icons/dist/icons/terminal.svg";
import { ReactComponent as Team } from "feather-icons/dist/icons/user-check.svg";
import { ReactComponent as Cooperat } from "feather-icons/dist/icons/pocket.svg";
import {links,socialLinks} from "../config/constants/footer/MiniCentredFooterConstants"

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero 
      title ={<span>IT Geeks do better than rest <span className="text-primary-500">put us to test </span></span>}
      content = {<>Welcome to IT Geeks Club 
        <br></br>
        IT Geeks is an approved club of the faculty of science and technology – tangier . Founded in 2022  by six founding meembers.
        <br></br>
        So are you passionate about technology ? do you code ? do you design ? are you a debugger ? If you answered ‘yes ‘ to any of these questions and you want to learn more, join us now and don’t miss the chance.
        </> }
      roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Teams</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Teams.</HighlightedText>
          </>
        }
      />
      
      {/* <MainFeature2 /> */}
      {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
       
    
          {
            Icon: Cooperat,
            title: "Cooperat",
            description: "We promise to offer you the best knowledge we can .",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          
          {
            Icon: Team,
            title: "Professionalism",
            description: "	We are a social environment where people with various technology experiences come together and share informations with one another.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },
          {
            Icon: Terminal,
            title: "geeks ",
            description: "	We believe in the power of the computer science community.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
        ]}
      />

      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "IT Geeks meaning ?",
            answer:"IT (Information technology ) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create process, store, secure and exchange all forms of electronic data ,a Geek is a person who discuss computer-related tasks obsessively or with great attention to technical detail."
          },
          {
            question: "Why you should join IT Geeks club ?",
            answer:"Our club is the perfect place to grow your network and meet new people with different skills and experiences in differents IT domains (backend developement ,frontend developement , IA … ) You'll as well gain knowledge, skills and experiences in leadership,presentation, communication and problem-solving." 
          },
          {
            question: "What are club activities ?",
            answer:"IT Geeks club offers a multitude of events for university students with an interest in computer science such as hackathons, competitions and university events during all the academic year.Events and competitions will be posted in our instagram, facebook and LinkdIn accounts." 
          },
        ]}
      />
      {/* <GetStarted/> */}
      <Footer 
       links = {links}
       socialLinks ={socialLinks}
      />
    </AnimationRevealPage>
  );
}
