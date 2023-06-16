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
  width: 1140px;
`;
const Label = styled.label`
  width: 400px;
  min-width: 300px;
  margin-left: 50px;

  width: 401px;
  height: 39px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;
`;
const Text = styled.p`
  width: 80vw;
  height: 95px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;

export default DeliveryPage;
