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
  border-radius: 10px 10px 10px 10px;
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

  @media (max-width: 500px) {
    border-radius: 10px;
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
