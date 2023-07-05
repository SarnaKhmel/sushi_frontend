import React, { useState, useEffect } from "react";
import {
  CarouselContainer,
  DotContainer,
  DotElement,
  Slide,
  SlideContainer,
} from "./Posts.styled";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Utils/baseUrl";
import { useSwipeable } from "react-swipeable";

const Dot = ({ active, onClick }) => (
  <DotElement active={active} onClick={onClick} />
);

const Posts = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [posts.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % posts.length);
    } else if (direction === "right") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
      );
    }
  };

  return (
    <div {...handlers}>
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
    </div>
  );
};

export default Posts;
