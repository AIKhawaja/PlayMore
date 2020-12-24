import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";


import { ReactComponent as SvgDecoratorBlob1 } from "./images/svg-decorator-blob-1.svg";
import DesignIllustration from "./assets/streaming_vector_3.jpeg";
import CustomersLogoStripImage from "./assets/streaming_platform_support.png"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 pl-8 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight tracking-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-10`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-0 w-7/12 lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

const Landing_One =  () => {
  return (
    <>
      <Container id="about-section">
        <TwoColumn>
          <LeftColumn>
            <Heading>
            Stream popular music 
              <span tw="text-primary-700"> without worrying about DMCAs</span>
            </Heading>
            <Paragraph tw="tracking-normal font-body text-gray-700 font-bold text-2xl" >
               Play the music you want to . We handle all the legal stuff so you can focus on <span tw="text-primary-100">creating great content </span>
            </Paragraph>
            <CustomersLogoStrip>
              <p>Platforms We Support</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};

export default Landing_One