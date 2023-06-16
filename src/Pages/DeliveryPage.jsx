import React from "react";
import Layout from "../Layout/Layout";
import Delivery from "../Components/Delivery/Delivery";
import styled, { css } from "styled-components";

const DeliveryPage = () => {
  return (
    <Layout>
      <DeliveryPageBlock>
        <PageBlock>
          <Label>Доставка та оплата</Label>
          <Text>
            <strong>Доставка безкоштовна.</strong> Замовлення приймаються з
            10:00 до 21:00, в межах Зеленої та Червної зони мінімальна сумма
            замовлення 350 грн, за межі зазначених зон мінімальну вартість
            уточнюйте у оператора.
          </Text>
          <Delivery />
        </PageBlock>
      </DeliveryPageBlock>
    </Layout>
  );
};

const DeliveryPageBlock = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageBlock = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80vw;
  max-width: 1140px;
`;
const Label = styled.label`
  width: 400px;
  min-width: 150px;
  margin-left: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;

  @media (max-width: 500px) {
    margin-left: 0px;
    font-size: 32px;
    line-height: 39px;
    width: 80vw;
    max-width: 500px;
  }
`;
const Text = styled.p`
  width: 80vw;
  height: 95px;
  max-width: 1140px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
  margin-bottom: 70px;
`;

export default DeliveryPage;