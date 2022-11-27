import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-5 lg:py-6`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Linkspan = tw.span`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default ({links,socialLinks}) => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>It Geeks</LogoText>
          </LogoContainer>
          <LinksContainer>
              {
                links.map((link,key )=> {
                 return <Link key={key} to={link.link}> <Linkspan >{link.name}</Linkspan></Link>
                })
              }
          </LinksContainer>
          <SocialLinksContainer>
          {
                socialLinks.map((socialLink,key) => {
                  return  <SocialLink key={key} rel="noreferrer"  target="_blank" href={socialLink.link}>
                  {socialLink.icon}
               </SocialLink>
                })
              }       
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, Itgeeks Inc. All Rights Reserved.
            This web site is made by our team  <a href="https://www.instagram.com/it_geeks_fstt" rel="noreferrer"  target="_blank">Itgeeks</a> 
             &nbsp; if you face any problem, please contact us. &nbsp; 
             <a href = "mailto: support@itgeeks.social">support@itgeeks.social</a>
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
