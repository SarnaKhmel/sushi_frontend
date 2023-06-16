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
import { Link } from "react-router-dom";

import { baseUrl } from "../../Utils/baseUrl";

const Product = ({ product }) => {
  console.log(product);
  return (
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
              {product.sale === true ? <>{product.old_price}грн</> : <></>}
            </FakePrice>
          </PriceBlock>

          <Basket>В КОШИК</Basket>
        </Label4>
      </TitleBlock>
    </ProductBlock>
  );
};

export default Product;
