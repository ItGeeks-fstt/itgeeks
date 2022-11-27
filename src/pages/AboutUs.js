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
import TeamCardGrid from "components/blogs/cards/ProfileThreeColGrid.js";
import {
  links,
  socialLinks,
} from "../config/constants/footer/MiniCentredFooterConstants";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

// importing the images
import img1 from "images/team/G1/img1.jpeg";
import img2 from "images/team/G1/img2.jpeg";
import img3 from "images/team/G1/img3.jpeg";
import img4 from "images/team/G1/img4.jpeg";
import img5 from "images/team/G1/img5.jpeg";
import img6 from "images/team/G1/img6.jpeg";

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

      <TeamCardGrid
        subheading={<Subheading>Our Team</Subheading>}
        cards={[
          {
            imageSrc: img5,
            position: "Team leader",
            name: "Manal Zback ",
            links: [
              {
                url: " https://www.instagram.com/manal__zbakh/",
                icon: InstagramIcon,
              },
              {
                url: "https://www.linkedin.com/in/manal-zbakh-5218041",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com/manal-zbakh",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc: img1,
            position: "Vice-Team Leader",
            name: "mohammed berbar",
            links: [
              {
                url: "https://www.instagram.com/mouad_barrou",
                icon: InstagramIcon,
              },
              {
                url: " https://www.linkedin.com/in/mouad-barrou-41b180196/",
                icon: LinkedinIcon,
              },
              {
                url: " https://github.com/barrou-mouad",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc: img2,
            position: "Human Resources Manger",
            name: "Nouhaila El Hriki",
            links: [
              {
                url: "https://www.instagram.com/nouhaila__elh/",
                icon: InstagramIcon,
              },
              {
                url: "https://www.linkedin.com/in/nouhaila-el-hriki-b401b61bb/",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com/nouhaila-elh",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc: img3,
            position: "Communiy Manger",
            name: " Nora Youssefi",
            links: [
              {
                url: "https://www.instagram.com/nora_youssefi/",
                icon: InstagramIcon,
              },
              {
                url: "https://www.linkedin.com/in/nora-youssefi-041485200/",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com/NoraYoussefi",
                icon: GithubIcon,
              },
            ],
          },
          {
            imageSrc: img4,
            position: "Genral Secretary",
            name: "Moaud Barrou",
            links: [
              {
                url: "https://www.instagram.com/mouad_barrou",
                icon: InstagramIcon,
              },
              {
                url: "https://www.linkedin.com/in/mouad-barrou-41b180196/",
                icon: LinkedinIcon,
              },
              {
                url: "https://github.com/barrou-mouad",
                icon: GithubIcon,
              },
            ],
          },

          {
            imageSrc: img6,
            position: "Treasuer",
            name: "Nassima El Jazouli",
            links: [
              {
                url: "https://www.instagram.com/nassima_eljazouli/",
                icon: InstagramIcon,
              },
              {
                url: "https://www.linkedin.com/in/nassima-el-jazouli-58547b211/",
                icon: LinkedinIcon,
              },
              {
                url: " https://github.com/Nassima-el-jazouli",
                icon: GithubIcon,
              },
            ],
          },
        ]}
      />
     
           <Footer links={links} socialLinks={socialLinks} />
    </AnimationRevealPage>
  );
};
