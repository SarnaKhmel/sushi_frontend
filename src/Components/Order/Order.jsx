import React from "react";
import {
  OrderBox,
  Block,
  FormBlock,
  ListBlock,
  Label,
  Form,
} from "./Order.styled";

const Order = () => {
  return (
    <OrderBox>
      <Block>
        <FormBlock>
          <Form>
            <Label>Оформити замовлення</Label>
            <Label>Кур’єрська доставка</Label>
            <Label>Деталі доставки</Label>
          </Form>
        </FormBlock>
        <ListBlock>
          <Label>Оформити замовлення</Label>
        </ListBlock>
      </Block>
    </OrderBox>
  );
};

export default Order;
