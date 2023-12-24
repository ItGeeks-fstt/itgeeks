import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/blogs/cards/ProfileThreeColGrid.js";
import {
    links,
    socialLinks,
} from "../config/constants/footer/MiniCentredFooterConstants";
import {ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";


// importing the images
import img1 from "images/team/1.png";
import img2 from "images/team/2.png";
import img3 from "images/team/3.png";
import img4 from "images/team/4.png";
import img5 from "images/team/5.png";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
    return (
        <AnimationRevealPage>
            <Header/>
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
                        imageSrc: img3,
                        position: "President",
                        name: "Badr Benabdellah ",
                        links: [
                            {
                                url: "https://www.linkedin.com/in/badr-benabdellah-75a682241/",
                                icon: LinkedinIcon,
                            },

                        ],
                    },
                    {
                        imageSrc: img2,
                        position: "Vise-president ",
                        name: "Abderrazzak El Bourkadi",
                        links: [
                            {
                                url: "https://ma.linkedin.com/in/abderrazzak-el-bourkadi-88b6b9252",
                                icon: LinkedinIcon,
                            },
                        ],
                    },
                    {
                        imageSrc: img5,
                        position: "RH",
                        name: "Marouan Daghmoumi",
                        links: [
                            {
                                url: "https://www.linkedin.com/in/marouan-daghmoumi-b75b4921a/",
                                icon: LinkedinIcon,
                            },
                        ],
                    }, {
                        imageSrc: img4,
                        position: "Community manager",
                        name: "Ismail oukha",
                        links: [
                            {
                                url: "https://www.linkedin.com/in/ismail-oukha-90a070227/",
                                icon: LinkedinIcon,
                            },
                        ],
                    }, {
                        imageSrc: img1,
                        position: "RH",
                        name: "Abdellah Bouaamoud",
                        links: [
                        ],
                    },

                ]}
            />

            <Footer links={links} socialLinks={socialLinks}/>
        </AnimationRevealPage>
    );
};
