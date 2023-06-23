import React, { useState } from "react";
import {
  OrderBox,
  Block,
  FormBlock,
  ListBlock,
  Label,
  Form,
  InfoBlock,
  InputBlock,
  Input,
  InputLabel,
  InputItem,
  Select,
  Option,
  OrderListBlock,
  OrderBtnBlock,
  InputComent,
  InputItemComent,
  OrderBtnInfoBlock,
  Info,
  OrderBtn,
} from "./Order.styled";

import { createOrder } from "../../Redux/slices/orders";
import { useDispatch, useSelector } from "react-redux";

import OrderModalList from "../OrderModalList/OrderModalList";

const Order = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "Oleksa",
    phone: "0932607352",
    email: "olsa@gmail.com",
    city: "lviv",
    street: "Khmelnitskogo",
    house: "62",
    floor: "1",
    apartment: "2",
    entrance: "1",
    deliveryType: "quick",
    paymentMethod: "cash",
    changeAmount: "500",
    comment: "Hi",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch(createOrder(formData));
  };

  return (
    <OrderBox>
      <Block onSubmit={handleSubmit}>
        <FormBlock>
          <Form>
            <InfoBlock>
              <Label>Персональні дані</Label>
              <InputBlock>
                <InputItem>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputLabel>Ім'я*</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <InputLabel>Телефон*</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputLabel>Ел. скринька</InputLabel>
                </InputItem>
              </InputBlock>
            </InfoBlock>
            <InfoBlock>
              <Label>Кур’єрська доставка</Label>
              <InputBlock>
                <InputItem>
                  <Select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}>
                    <Option value="lviv">Львів</Option>
                    <Option value="z-voda">Зимна Вода</Option>
                    <Option value="operator">Уторчнити з оператором</Option>
                  </Select>
                  <InputLabel>Місто*</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                  <InputLabel>Вулиця*</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="text"
                    name="house"
                    value={formData.house}
                    onChange={handleChange}
                    required
                  />
                  <InputLabel>Будинок*</InputLabel>
                </InputItem>
              </InputBlock>
              <InputBlock>
                <InputItem>
                  <Input
                    type="text"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                  />
                  <InputLabel>Поверх</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                  />
                  <InputLabel>Квартира</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="text"
                    name="entrance"
                    value={formData.entrance}
                    onChange={handleChange}
                  />
                  <InputLabel>Під'їзд</InputLabel>
                </InputItem>
              </InputBlock>
            </InfoBlock>
            <InfoBlock>
              <Label>Деталі доставки</Label>
              <InputBlock>
                <InputItem>
                  <Select
                    name="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleChange}>
                    <Option value="quick">40-59хв.</Option>
                    <Option value="slow">1-1:30год.</Option>
                    <Option value="operator">Уторчнити з оператором</Option>
                  </Select>
                  <InputLabel>Тип доставки*</InputLabel>
                </InputItem>
                <InputItem>
                  <Select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}>
                    <Option value="cash">Готівкою.</Option>
                    <Option value="card">Карткою.</Option>
                  </Select>
                  <InputLabel>Форма оплати*</InputLabel>
                </InputItem>
                <InputItem>
                  <Input
                    type="text"
                    name="changeAmount"
                    value={formData.changeAmount}
                    onChange={handleChange}
                  />
                  <InputLabel>Підготувати решту з</InputLabel>
                </InputItem>
              </InputBlock>
              <InputBlock>
                <InputItemComent>
                  <InputComent
                    type="text"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                  <InputLabel>Коментар до замовлення</InputLabel>
                </InputItemComent>
              </InputBlock>
            </InfoBlock>
          </Form>
        </FormBlock>
        <ListBlock>
          <Label>Оформити замовлення</Label>
          <OrderListBlock>
            <OrderModalList />
            <OrderBtnBlock>
              <OrderBtnInfoBlock>
                <Info>Всього: 9999грн.</Info>
                <Info>Вага: 1111г.</Info>
              </OrderBtnInfoBlock>
              <OrderBtn type="submit" onClick={handleSubmit}>
                ЗАМОВИТИ
              </OrderBtn>
            </OrderBtnBlock>
          </OrderListBlock>
        </ListBlock>
      </Block>
    </OrderBox>
  );
};

export default Order;
