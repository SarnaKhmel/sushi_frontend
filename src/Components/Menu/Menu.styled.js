import styled from "styled-components";

export const MenuBlock = styled.div`
  color: #fff;
  width: 100wv;
  margin: 100px 20px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const Items = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow: show;
  overflow-x: auto;

  @media (min-width: 340px) and (max-width: 700px) {
    width: 90vw;
  }
`;

export const Item = styled.div`
  display: inline-block;
  margin: 10px 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:nth-child(1) {
    color: #ff4700;
  }
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isUnderlined &&
    `
    color: #fff;
    font-weight: 500;
    text-decoration: underline;
  `}
`;
