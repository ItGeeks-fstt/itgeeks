import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import {css} from "styled-components/macro";
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import {SectionDescription} from "components/misc/Typography.js";
import {useState} from "react";

import defaultCardImage from "images/shield-icon.svg";

import {ReactComponent as SvgDecoratorBlob3} from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const TwoColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap  max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`max-w-sm`}
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


export default ({cards = null, heading = "Amazing Features", subheading = "Features", description = ""}) => {
    /*
     * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
     *  1) imageSrc - the image shown at the top of the card
     *  2) title - the title of the card
     *  3) description - the description of the card
     *  If a key for a particular card is not provided, a default value is used
     */


    const [listCards, setListCards] = useState(cards);
    // if (!cards) {
    //   cards = defaultCards
    //   setListCards(defaultCards)
    // }else{
    //   setListCards(cards)
    // }
    function handleIsMore(card) {
        let tmpCards = listCards;
        tmpCards.forEach(c => {
            if (c.title === card.title) {
                c.isMore = !card.isMore;
            }
        })
        setListCards([...tmpCards])
    }


    return (
        <Container>
            <TwoColumnContainer>
                {subheading && <Subheading>{subheading}</Subheading>}
                <Heading>{heading}</Heading>
                {description && <Description>{description}</Description>}
                <VerticalSpacer/>
                {listCards.map((card, i) => (
                    <Column key={i}>
                        <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt=""/>
              </span>
                            <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || ""}
                    {card.isMore ? card.more : ""}
                </p>

                <span className="cursor-pointer text-primary-900 text-lg hover:text-xl hover:text-primary-500"
                      onClick={() => handleIsMore(card)}>
                  {
                      card.isMore ? "show less" : "show more"
                  }</span>
              </span>
                        </Card>
                    </Column>
                ))}
            </TwoColumnContainer>
            <DecoratorBlob/>
        </Container>
    );
};
