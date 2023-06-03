import React from "react";
import {
  ProductBlock,
  ImageBlock,
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
} from "./Product.style";

const Product = ({ product }) => {
  return (
    <ProductBlock>
      <ImageBlock>
        <ProductImage src={product.imageUrl} />
      </ImageBlock>
      <TitleBlock>
        <Label1>
          <Weight>{product.weight}</Weight>
          <SaleBlock>
            {product.sale ? <Sale>Акція</Sale> : <Sale></Sale>}
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
              {product.sale ? <>{product.old_price}грн</> : <></>}
            </FakePrice>
          </PriceBlock>

          <Basket>В КОШИК</Basket>
        </Label4>
      </TitleBlock>
    </ProductBlock>
  );
};

export default Product;
