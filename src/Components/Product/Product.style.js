import styled from "styled-components";

export const ProductBlock = styled.div`
  width: 400px;
  height: 400px;
  margin: 20px;
  border-radius: 10px 10px 0px 0px;
  color: #fff;
  @media (max-width: 500px) {
    display: flex;
    margin: 5px;
    width: 90vw;
    max-height: 160px;
    margin-top: 20px;
  }
`;

export const ImageBlock = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  @media (max-width: 500px) {
    border-radius: 10px;
    height: 132px;
    width: 191px;
    min-height: 131px;
    min-width: 190px;
  }
`;

export const TitleBlock = styled.div`
  height: 200px;
  padding: 10px 20px;

  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  box-shadow: -10px 100px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    background: transparent;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 400px;
  height: 200px;
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

export const Label1 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    order: 2;
    margin-top: 10px;
  }
`;
export const Label2 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    order: 1;
    margin-top: 0px;
  }
`;
export const Label3 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Label4 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    order: 3;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
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
  font-weight: 700;
  font-size: 16px;
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
export const PriceBlock = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: flex;
  }
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
  @media (max-width: 500px) {
    margin-top: 10px;
    width: 120px;
    height: 33px;
  }
`;
