import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
`;

export const PostBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  @media (max-width: 500px) {
    display: flex;
    margin: 5px;
    width: 90vw;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 600px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;
  cursor: zoom-in;
  max-width: 100%;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
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

export const TitleBlock = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  @media (max-width: 500px) {
    display: flex;
    margin-top: 20px;
  }
`;
