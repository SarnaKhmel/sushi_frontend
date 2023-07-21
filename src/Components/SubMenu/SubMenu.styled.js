import styled from "styled-components";

export const SubMenuBlock = styled.div`
  color: #fff;
  width: 60wv;
  margin: 0px 20px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  ${"" /* border: 1px solid red; */}
`;

export const Items = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow: show;
  overflow-x: auto;
  border-top: 1px solid white;
  padding-top: 20px;

  @media (min-width: 340px) and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Item = styled.div`
  display: inline-block;
  margin: 0px 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
