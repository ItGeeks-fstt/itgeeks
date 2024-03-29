import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter";
import {links, socialLinks} from "../config/constants/footer/MiniCentredFooterConstants"
import CustomizeIconImage from "../images/customize-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    const cards = [

        {
            imageSrc: CustomizeIconImage,
            title: "Project Organisation Team",
            description: "This team focuses on planning and executing various events that are relevant to the club's mission and interests. ",
            more: "Key Responsibilities: Event Planning: They plan and coordinate events such as Informatique bdarija, Hackathons, and ice breakers, ensuring that they align with the club's objectives. Sponsorship: Identifying and securing sponsorships for club events, which includes creating sponsorship proposals, negotiating agreements, and managing sponsor relationship",
            isMore: false
        },
        {
            imageSrc: ReliableIconImage,
            title: "Media & Design Team",
            description: "This team is responsible for all aspects of design and media promotion for your club.",
            more: "Key Responsibilities: Graphic Design: They create visuals, posters, flyers, and any graphic materials needed for club events and promotions. Social Media Management: This team manages the club's social media accounts, including Instagram, and posts content regularly to keep members and the public informed. Content Creation: They develop and curate content for various platforms, ensuring that the club's message is effectively communicated.",
            isMore: false
        },
    ];


    return (
        <AnimationRevealPage>
            <Hero
                title={<span>IT Geeks do better than rest <span
                    className="text-primary-500">put us to test </span></span>}
                content={<>Welcome to IT Geeks Club
                    <br></br>
                    IT Geeks is an approved club of the faculty of science and technology – tangier . Founded in 2022 by
                    six founding meembers.
                    <br></br>
                    So are you passionate about technology ? do you code ? do you design ? are you a debugger ? If you
                    answered ‘yes ‘ to any of these questions and you want to learn more, join us now and don’t miss the
                    chance.
                </>}
                roundedHeaderButton={true}/>
            <Features
                cards={cards}
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
            <MainFeature2/>

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
                        answer: "IT (Information technology ) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create process, store, secure and exchange all forms of electronic data ,a Geek is a person who discuss computer-related tasks obsessively or with great attention to technical detail."
                    },
                    {
                        question: "Why you should join IT Geeks club ?",
                        answer: "Our club is the perfect place to grow your network and meet new people with different skills and experiences in differents IT domains (backend developement ,frontend developement , IA … ) You'll as well gain knowledge, skills and experiences in leadership,presentation, communication and problem-solving."
                    },
                    {
                        question: "What are club activities ?",
                        answer: "IT Geeks club offers a multitude of events for university students with an interest in computer science such as hackathons, competitions and university events during all the academic year.Events and competitions will be posted in our instagram, facebook and LinkdIn accounts."
                    },
                ]}
            />
            <GetStarted/>
            <Footer
                links={links}
                socialLinks={socialLinks}
            />
        </AnimationRevealPage>
    );
}
