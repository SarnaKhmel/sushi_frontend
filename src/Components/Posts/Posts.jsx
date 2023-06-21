import {
  CarouselContainer,
  DotContainer,
  DotElement,
  Slide,
  SlideContainer,
} from "./Posts.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

import { baseUrl } from "../../Utils/baseUrl";
const Dot = ({ active, onClick }) => (
  <DotElement active={active} onClick={onClick} />
);

const Posts = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <CarouselContainer>
      {posts.map((post, index) => (
        <SlideContainer key={post._id} active={index === activeIndex}>
          <Link to={`/post/${post._id}`}>
            <Slide
              src={`${baseUrl}${post.imageUrl}`}
              alt={`Slide ${index}`}
              onClick={() => handleDotClick(index)}
              style={{ display: index === activeIndex ? "block" : "none" }}
            />
          </Link>
        </SlideContainer>
      ))}

      <DotContainer>
        {posts.map((_, index) => (
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
