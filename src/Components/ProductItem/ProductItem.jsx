import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  ProductItemBlock,
  Block,
  ImageBlock,
  InfoBlock,
  ProductBlock,
  TitleBlock,
  ProductImage,
  Label1,
  Label2,
  Label3,
  Label4,
  Weight,
  SaleBlock,
  Sale,
  Name,
  Title,
  PriceBlock,
  Price,
  FakePrice,
  Basket,
  MobileInfoBlock,
} from "./ProductItem.styles";
import { baseUrl } from "../../Utils/baseUrl";

const ProductItem = ({ product }) => {
  //const product
  console.log(product);

  return (
    <ProductItemBlock>
      <Block>
        <ImageBlock>
          <ProductImage src={`${baseUrl}${product.imageUrl}`} />
        </ImageBlock>
        <InfoBlock>
          <Label1>
            <Name>{product.name}</Name>
            <SaleBlock>
              {product.sale === true ? <Sale>Акція</Sale> : <></>}
            </SaleBlock>
          </Label1>
          <Label2>
            <Weight>{product.weight}г.</Weight>
          </Label2>
          <Label3>
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
            <Basket>В КОШИК</Basket>
          </Label3>
          <Label4>
            <Title>
              <b>Склад: </b>
              {product.text}
            </Title>
          </Label4>
        </InfoBlock>
        <MobileInfoBlock>
          <Label1>
            <Weight>{product.weight}г.</Weight>
            <SaleBlock>
              {product.sale === true ? <Sale>Акція</Sale> : <></>}
            </SaleBlock>
          </Label1>
          <Label2>
            <Name>{product.name}</Name>

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
          </Label2>
          <Label3>
            <Title>
              <b>Склад: </b>
              {product.text}
            </Title>
          </Label3>
          <Label4>
            <Basket>В КОШИК</Basket>
          </Label4>
        </MobileInfoBlock>
      </Block>
    </ProductItemBlock>
  );
};

export default ProductItem;
