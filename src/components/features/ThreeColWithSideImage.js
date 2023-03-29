import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { useState } from "react";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
// import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
// import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-2xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: SupportIconImage,
      title: "Formation",
      description:
        "Coding is what we do and love. And we want for all students who are interested in computer science to ",
      more: "understand the concepts and write better code by learning and teaching each other. By choosing this team, you will be helping other students in developing applications, learning programming languages and solving problems… You should know the basic coding languages such as C++ and JavaScript. More over you should know how to write and debug code, as well as having an experience in front-end or back-end software development.",
      isMore: false,
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Organization",
      description:
        "This team should organize all the events hosted by the club in the most efficient way possible. ",
      more: " It should manage the event planning process, manage the budget parameters and develop networks with other event organizers so we can collaborate on other events. As a requirement, you should have the ability to work on a team, flexibility, motivation and the sense of responsibility.",
      isMore: false,
    },
    {
      imageSrc: ReliableIconImage,
      title: "Media",
      description:
        "Social media provides a platform for direct communication between coders throughout the world. It can ",
      more: "be a key driver of content distribution. Our strategy is to create a community of people interested in technology. So this team will be responsible for creating and publishing original content, sharing memories of the club, and promoting our projects in the social media. This will be for sure an opportunity to develop your skills through post-processing and video editing.",
      isMore: false,
    },
    {
      imageSrc: ShieldIconImage,
      title: "Design",
      description:
        "your club will be hosting various activities and events.So you will be working with a team of designers ",
      more: " in order to achieve a common design goal for the club projects. As well, the team should work on improving and integrating better user feedback into the design process. As a requirement: Creativity, Visual Communication, and a portfolio of illustrations or other graphics will be a plus.",
      isMore: false,
    },
  ];
  if (!cards) {
    cards = defaultCards;
  }
  const [listCards, setListCards] = useState(cards);
  // if (!cards) {
  //   cards = defaultCards
  //   setListCards(defaultCards)
  // }else{
  //   setListCards(cards)
  // }
  function handleIsMore(card) {
    let tmpCards = listCards;
    tmpCards.forEach((c) => {
      if (c.title === card.title) {
        c.isMore = !card.isMore;
      } else {
        c.isMore = false;
      }
    });
    setListCards([...tmpCards]);
  }

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {listCards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title grid grid-flow-col">
                  <img
                    className="block"
                    src={card.imageSrc || defaultCardImage}
                    alt=""
                  />
                  <span className="place-self-start">
                    {card.title || "Fully Secure"}
                  </span>
                </span>
                <p className="description">
                  {card.description || ""}
                  {card.isMore ? card.more : ""}
                </p>

                <button
                  className="cursor-pointer text-lg text-primary-900 hover:text-xl hover:text-blue-500"
                  onClick={() => handleIsMore(card)}
                >
                  {card.isMore ? "show less" : "show more"}
                </button>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
