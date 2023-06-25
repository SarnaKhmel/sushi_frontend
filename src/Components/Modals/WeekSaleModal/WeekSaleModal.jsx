import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../Utils/baseUrl";
import InBasket from "../../InBasket/InBasket";
import { useSelector } from "react-redux";

const WeekSaleModal = () => {
  const products = useSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const filteredItems = products.items.filter(
      (item) => item.week_sale === true
    );
    setFilteredProducts(filteredItems);
  }, [products.items]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {filteredProducts.length > 0 && (
        <ModalBox>
          <ModalContent isOpen={isModalOpen}>
            {isModalOpen && (
              <ModalContentInner>
                <ProductBlock>
                  <Label2>
                    <Name>{filteredProducts[0].name}</Name>
                  </Label2>
                  <ImageBlock>
                    <Link to={`/product/${filteredProducts[0]._id}`}>
                      <ProductImage
                        src={`${baseUrl}${filteredProducts[0].imageUrl}`}
                      />
                    </Link>
                  </ImageBlock>
                  <TitleBlock>
                    <Label1>
                      <PriceBlock>
                        <Price>{filteredProducts[0].price}грн</Price>
                        <FakePrice>
                          {filteredProducts[0].sale === true &&
                          filteredProducts[0].old_price !== ""
                            ? filteredProducts[0].old_price + "грн"
                            : null}
                        </FakePrice>
                      </PriceBlock>
                      <SaleBlock>
                        {filteredProducts[0].sale === true ? (
                          <Sale>Акція</Sale>
                        ) : null}
                      </SaleBlock>
                    </Label1>
                    <Label3>
                      <InBasket product={filteredProducts[0]}>В КОШИК</InBasket>
                    </Label3>
                  </TitleBlock>
                </ProductBlock>
              </ModalContentInner>
            )}
          </ModalContent>
          <ModalTongue isOpen={isModalOpen} onClick={toggleModal}>
            <ModalTongueContent>
              Акційна пропозиція
              {isModalOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </ModalTongueContent>
          </ModalTongue>
        </ModalBox>
      )}
    </>
  );
};

const ModalBox = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10vw;
  top: 105px;
  z-index: 1000;
  @media (min-width: 340px) and (max-width: 767px) {
    top: 74px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 95px;
  }
  @media (min-width: 1919px) {
    top: 116px;
  }
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
  transition: height 0.3s ease-in-out;
`;

const ModalContentInner = styled.div`
  border-radius: 12.294px;
  background: linear-gradient(
    135deg,
    rgba(22, 21, 21, 0.9) 0%,
    rgba(46, 46, 46, 0.9) 100%
  );
  backdrop-filter: blur(2px);
`;

const ProductBlock = styled.div`
  width: 100%;
  height: 290px;
  border-radius: 10px;
  color: #fff;
`;

const ModalTongue = styled.div`
  width: 250px;
  height: 25px;
  background-color: #ff4700;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  border-radius: 0 0 20px 20px;
  cursor: pointer;
`;

const ModalTongueContent = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageBlock = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TitleBlock = styled.div`
  height: 50%;
  padding: 0px 15px;
  background: linear-gradient(104.51deg, #161515 0.89%, #313131 98.21%);
  box-shadow: -10px 100px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
`;

const ProductImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 175px;
  object-fit: cover;
  object-position: center;
  cursor: zoom-in;
`;

const Label1 = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;

const Label2 = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const Label3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const SaleBlock = styled.div`
  margin-bottom: 15px;
`;

const Sale = styled.div`
  width: 59px;
  height: 26px;
  background: #ff0b0b;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  color: #ffffff;
`;

const Name = styled.div`
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
  color: #ffffff;
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;

const FakePrice = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  font-weight: 300;
  line-height: 16px;
  text-decoration-line: line-through;
  color: rgba(255, 255, 255, 0.75);
  font-size: 14.753px;
  font-family: Montserrat;
`;

export default WeekSaleModal;
