import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import {links,socialLinks} from "../config/constants/footer/MiniCentredFooterConstants"


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About It geeks</Subheading>}
        heading="We are a modern club ."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        primaryButtonUrl="/"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        description="This group is dedicated to the technology enthusiast, and the sharing of ideas and experiences between computer science students in order to create a community."
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to have an It community ."
        buttonRounded={false}
        primaryButtonUrl="/contactus"
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        description="We want to create a social environment where students with various technology experiences come together and share information with one another."
      />
    
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer
      links = {links}
      socialLinks ={socialLinks}
       />
    </AnimationRevealPage>
  );
};
