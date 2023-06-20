import styled from "styled-components";

export const OrderModalBlock = styled.div`
  position: absolute;
  width: 700px;
  height: 558px;
  right: 10px;
  top: 110px;

  background: linear-gradient(180deg, #100f0f 0%, rgba(49, 49, 49, 0.8) 100%);
  box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  z-index: 1000;
`;

export const CloseBlock = styled.div`
  width: 35px;
  height: 35px;
  ${"" /* margin-left: 90%; */}
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  color: #fff;

  &:hover {
    color: #ff4700;
  }
`;
export const Line = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: space-around;
  margin: 30px;
  width: 90%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;
export const ClearBtn = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);

  &:hover {
    color: #c74716;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const List = styled.div`
  border: 1px solid green;
  min-height: 60%;
  margin: 0px 30px;
  width: 90%;
  .element {
    overflow-y: auto;
  }
`;

export const OrderBottom = styled.div`
  position: absolute;
  bottom: 0;
  border: 1px solid yellow;
  width: 100%;
  height: 100px;

  background: #c74716;
  border-radius: 0 0 10px 10px;
`;
