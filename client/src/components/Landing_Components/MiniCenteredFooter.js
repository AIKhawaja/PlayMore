import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "./misc/Layouts.js"
import { ReactComponent as FacebookIcon } from "./images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "./images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedin-icon.svg";


const Container = tw(ContainerBase)`bg-white h-24  text-black -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl  mx-auto py-4 lg:py-2`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const SocialLinksContainer = tw.div`mt-4`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-black hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-1 font-medium tracking-wide text-sm text-black`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <CopyrightText>
             2020 Vinyl Inc.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
