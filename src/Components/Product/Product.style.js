import styled from "styled-components";

export const ProductBlock = styled.div`
  width: 400px;
  height: 400px;
  margin: 20px;
  border-radius: 10px 10px 0px 0px;
  color: #fff;
`;

export const ImageBlock = styled.div`
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

export const TitleBlock = styled.div`
  height: 200px;
  padding: 10px;
  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  box-shadow: -10px 100px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
`;

export const ProductImage = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 400px;
  height: 200px;
  transition: transform 0.5s;
  cursor: zoom-in;
  max-width: 100%;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Label = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;
export const Weight = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
export const SaleBlock = styled.div``;
export const Sale = styled.div`
  width: 59px;
  height: 26px;

  background: #ff0b0b;
  border-radius: 2px;
  text-align: center;
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
export const FakePrice = styled.div`
  margin-left: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: line-through;

  color: #ffffff;
`;
export const Basket = styled.button`
  width: 130px;
  height: 43px;

  background: #ff4700;
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
