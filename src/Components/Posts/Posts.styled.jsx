import styled, { keyframes } from "styled-components";

export const PostsBlock = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, min(170px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media (min-width: 340px) and (max-width: 767px) {
    height: 200px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 300px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 400px;
  }
  @media (min-width: 1920px) {
    height: 600px;
  }
`;
export const CarouselContainer = styled.div`
  position: relative;
  ${"" /* margin: 0 auto; */}
`;

export const Slide = styled.img`
  @media (min-width: 340px) and (max-width: 767px) {
    width: 340px;
    height: 170px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 452px;
    height: 226px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    width: 750px;
    height: 333px;
  }
  @media (min-width: 1920px) {
    width: 1000px;
    height: 500px;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DotElement = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#C74716" : "#fff")};
`;

//----------------------------------------------------------------

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const SlideContainer = styled.div`
  animation-duration: 0.5s;
  animation-timing-function: ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  animation-name: ${({ active }) =>
    active ? fadeInAnimation : fadeOutAnimation};
`;
