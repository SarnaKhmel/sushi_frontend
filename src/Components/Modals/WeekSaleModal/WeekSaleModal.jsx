import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";

import { baseUrl } from "../../../Utils/baseUrl";

import InBasket from "../../InBasket/InBasket";
const WeekSaleModal = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalBox>
      <ModalContent isOpen={isModalOpen}>
        {isModalOpen && (
          <ModalContentInner>
            <ProductBlock>
              <ImageBlock>
                <Link to={`/product/${product._id}`}>
                  <ProductImage src={`${baseUrl}${product.imageUrl}`} />
                </Link>
              </ImageBlock>
              <TitleBlock>
                <Label1>
                  <Weight>{product.weight}г.</Weight>

                  <SaleBlock>
                    {product.sale === true ? <Sale>Акція</Sale> : <></>}
                  </SaleBlock>
                </Label1>
                <Label2>
                  <Name>{product.name}</Name>
                </Label2>
                <Label3>
                  <Title>{product.text}</Title>
                </Label3>
                <Label4>
                  <PriceBlock>
                    <Price>{product.price}грн</Price>
                    <FakePrice>
                      {product.sale === true && product.old_price !== "" ? (
                        <>{product.old_price}грн</>
                      ) : (
                        <></>
                      )}
                    </FakePrice>
                  </PriceBlock>

                  <InBasket product={product}>В КОШИК</InBasket>
                </Label4>
              </TitleBlock>
            </ProductBlock>
          </ModalContentInner>
        )}
      </ModalContent>
      <ModalTongue isOpen={isModalOpen} onClick={toggleModal}>
        <ModalTongueContent>
          Акційна пропозиція
          {isModalOpen === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ModalTongueContent>
      </ModalTongue>
    </ModalBox>
  );
};

const expandAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 350px;
  }
`;

const ModalBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10vw;
  top: 105px;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 100%;
  border-radius: 12.294px;
  background: linear-gradient(
    135deg,
    rgba(22, 21, 21, 0.9) 0%,
    rgba(46, 46, 46, 0.9) 100%
  );
  backdrop-filter: blur(2px);
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
  animation: ${({ isOpen }) => (isOpen ? expandAnimation : "none")} 0.3s
    ease-in-out;
`;

const ModalContentInner = styled.div`
  height: 350px;
`;

const ModalTongue = styled.div`
  width: 300px;
  height: 30px;
  background-color: orange;
  border-radius: 0px 0px 20px 20px;
  cursor: pointer;
`;

const ModalTongueContent = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProductBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  border-radius: 10px 10px 0px 0px;
  color: #fff;
`;

const ImageBlock = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
`;

const TitleBlock = styled.div`
  height: 50%;
  padding: 10px 20px;

  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  box-shadow: -10px 100px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 350px;
  height: 175px;
  object-fit: cover;
  object-position: center;
  cursor: zoom-in;
  max-width: 100%;
`;

const Label1 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;
const Label2 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;
const Label3 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;
const Label4 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;
const Weight = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
const SaleBlock = styled.div``;
const Sale = styled.div`
  width: 59px;
  height: 26px;

  background: #ff0b0b;
  border-radius: 2px;
  text-align: center;
`;
const Name = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;

  color: #ffffff;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
const PriceBlock = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
const FakePrice = styled.div`
  margin-left: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: line-through;

  color: #ffffff;
`;

export default WeekSaleModal;
