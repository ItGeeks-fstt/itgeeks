import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.jpg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { Link } from "react-router-dom";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

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
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>It Geeks</LogoText>
          </LogoContainer>
          <LinksContainer>
           <Link to="/"> <Linkspan >Home</Linkspan></Link>
            <Link to="/aboutus"><Linkspan >About</Linkspan></Link>
            <Link to="/contactus"><Linkspan >Contact Us</Linkspan></Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink rel="noreferrer"  target="_blank" href="https://www.instagram.com/it_geeks_fstt">
              <InstagramIcon fill={"white".toString()} />
            </SocialLink>
            <SocialLink  rel="noreferrer"  target="_blank" href="https://github.com/sohaibMan">
              <GithubIcon />
            </SocialLink>
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
