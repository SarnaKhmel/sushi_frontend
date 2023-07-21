import styled from "styled-components";

export const ProductItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60vh;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 180px;
    min-height: 60vh;
    margin-top: 70px;
    margin-bottom: 150px;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 80vw;
  height: 40vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 100%;
  max-height: 250px;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-top: 180px;
    max-height: 250px;
    width: 90vw;
    height: 100%;
  }
`;
export const InfoBlock = styled.div`
  display: flex;

  flex-direction: column;

  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

// export const ProductBlock = styled.div`
//   width: 400px;
//   height: 400px;
//   margin: 20px;
//   border-radius: 10px 10px 0px 0px;
//   color: #fff;
//   @media (max-width: 500px) {
//     display: flex;
//     margin: 5px;
//     width: 90vw;
//     max-height: 160px;
//     margin-top: 20px;
//     margin-bottom: 20px;
//   }
// `;

export const TitleBlock = styled.div`
  height: 200px;
  padding: 10px 20px;

  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  box-shadow: -10px 100px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    background: transparent;
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
    padding-left: 10px;
    ${"" /* justify-content: center; */}
    ${"" /* border: 1px solid blue; */}
    height: 132px;
  }
`;

export const ProductImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;
  cursor: zoom-in;
  max-width: 100%;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Label1 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;

    margin-top: 20px;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
  }
`;
export const Label2 = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
  }
`;
export const Label3 = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;

    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const Label4 = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;

    margin-top: 20px;
    display: flex;
    align-items: space-between;
    justify-content: space-around;
  }
`;
export const Weight = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const SaleBlock = styled.div``;
export const Sale = styled.div`
  width: 120px;
  height: 50px;
  background: #ff0b0b;
  border-radius: 5px;
  text-align: center;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 59px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    background: #ff0b0b;
    border-radius: 2px;
    text-align: center;
  }
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 20.4422px;
    line-height: 25px;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  @media (max-width: 768px) {
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const PriceBlock = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: flex;
  }
`;

export const Price = styled.div`
  font-style: normal;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;
export const FakePrice = styled.div`
  margin-left: 35px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: line-through;

  color: #ffffff;

  @media (max-width: 768px) {
    ont-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: line-through;

    color: #ffffff;
  }
`;
export const Basket = styled.button`
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  width: 250px;
  height: 46px;

  background: #ff4700;
  border-radius: 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (max-width: 500px) {
    height: 42px;
    width: 228.26px;
    background: #ff4700;
    border-radius: 9.13043px;
  }
`;

export const MobileInfoBlock = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: contents;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
  }
`;
