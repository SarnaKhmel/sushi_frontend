import React from "react";
import {
  ProductBlock,
  ImageBlock,
  TitleBlock,
  ProductImage,
  Label,
  Weight,
  SaleBlock,
  Sale,
  Name,
  Title,
  Price,
  FakePrice,
  Basket,
} from "./Product.style";

const Product = ({ product }) => {
  return (
    <ProductBlock>
      <ImageBlock>
        <ProductImage src={product.imageUrl} />
      </ImageBlock>
      <TitleBlock>
        <Label>
          <Weight>{product.weight}</Weight>
          <SaleBlock>
            {product.sale ? <Sale>Акція</Sale> : <Sale></Sale>}
          </SaleBlock>
        </Label>
        <Label>
          <Name>{product.name}</Name>
        </Label>
        <Label>
          <Title>{product.text}</Title>
        </Label>
        <Label>
          <Price>{product.price}</Price>
          <FakePrice>
            {product.sale ? <>{product.old_price}</> : <></>}
          </FakePrice>
          <Basket>В КОШИК</Basket>
        </Label>
      </TitleBlock>
    </ProductBlock>
  );
};

export default Product;
