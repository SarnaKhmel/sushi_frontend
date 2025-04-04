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
} from "./Product.style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import InBasket from "../InBasket/InBasket";
const Product = ({ product, handleScrollPosition }) => {
  const formattedText = product.text.replace(/\n/g, "<br>");

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;
  return (
    <ProductBlock>
      <ImageBlock>
        <StyledLink
          to={`/product/${product._id}`}
          onClick={handleScrollPosition}>
          <ProductImage
            src={`${baseUrl}${product.imageUrl}`}
            alt={product.name}
            loading="lazy"
          />
        </StyledLink>
      </ImageBlock>
      <TitleBlock>
        <Label1>
          <Weight>
            {product.weight} {product.type === "drink" ? <>л.</> : <> г.</>}
          </Weight>

          <SaleBlock>
            {product.sale === true ? <Sale>Акція</Sale> : <></>}
          </SaleBlock>
        </Label1>
        <Label2>
          <StyledLink
            to={`/product/${product._id}`}
            onClick={handleScrollPosition}>
            <Name>{product.name}</Name>
          </StyledLink>
        </Label2>
        <Label3>
          <Title>
            {product.type !== "drink" ? (
              <div dangerouslySetInnerHTML={{ __html: formattedText }} />
            ) : (
              <></>
            )}
          </Title>
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
  );
};

export default Product;
