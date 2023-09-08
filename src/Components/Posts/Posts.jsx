import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSwipeable } from "react-swipeable";
import { baseUrl } from "../../Utils/baseUrl";
import { Link } from "react-router-dom";

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

const SlideContainer = styled.div`
  position: relative;
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
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

const SlideList = styled.div`
  display: flex;
  transition: all 750ms ease;
  left: ${({ activeIndex }) => -activeIndex * 100}%;
`;

const SlideItem = styled.div`
  width: 100%;
  height: 100%;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  z-index: ${({ active }) => (active ? 100 : 1)};
  animation-name: ${({ active }) =>
    active ? fadeInAnimation : fadeOutAnimation};
`;

const SlideImage = styled.img`
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

const PostsBlock = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, min(170px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
`;

const Dot = ({ active, onClick }) => (
  <DotElement active={active} onClick={onClick} />
);

const Posts = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (posts.length || 1));
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [posts.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

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
    <PostsBlock>
      <SlideContainer {...handlers}>
        <SlideList activeIndex={activeIndex}>
          {posts.map((post, index) => (
            <SlideItem key={post._id} active={index === activeIndex}>
              <Link to={`/post/${post._id}`}>
                <SlideImage
                  src={`${baseUrl}${post.imageUrl}`}
                  alt={`Slide ${index}`}
                  loading="auto"
                />
              </Link>
            </SlideItem>
          ))}
        </SlideList>
      </SlideContainer>

      <DotContainer>
        {posts.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </PostsBlock>
  );
};

export default Posts;
