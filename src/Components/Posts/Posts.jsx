import {
  CarouselContainer,
  DotContainer,
  DotElement,
  Slide,
  SlideContainer,
} from "./Posts.styled";
import { useState } from "react";

const Dot = ({ active, onClick }) => (
  <DotElement active={active} onClick={onClick} />
);

const Posts = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <SlideContainer key={index} active={index === activeIndex}>
          <Slide
            src={image.picture}
            alt={`Slide ${index}`}
            onClick={() => handleDotClick(index)}
            style={{ display: index === activeIndex ? "block" : "none" }}
          />
        </SlideContainer>
      ))}

      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default Posts;
