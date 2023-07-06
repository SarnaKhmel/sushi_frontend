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
  OrderBtnDis,
} from "./Order.styled";

import toast, { Toaster } from "react-hot-toast";

import { createOrder, clearOrderState } from "../../Redux/slices/orders";
import { useDispatch, useSelector } from "react-redux";

import OrderModalList from "../OrderModalList/OrderModalList";

import OrderCompleteModal from "../OrderCompleteModal/OrderCompleteModal";

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.order);

  const [openModal, setOpenModal] = useState(false);

  const openFinModal = () => {
    setOpenModal(true);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "lviv",
    street: "",
    house: "",
    paymentMethod: "cash",
    changeAmount: "",
    comment: "",
    orderList: order,
    status: "new",
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
    if (!isFormValid()) {
      // notify("Заповніть обов'язкові поля!");
      toast.error("Заповніть обов'язкові поля!");

      return;
    }
    // console.log("Form Data:", formData);
    dispatch(createOrder(formData));
    dispatch(clearOrderState());
    openFinModal();
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 3 &&
      formData.phone.trim().length === 10 &&
      !isNaN(formData.phone.trim()) &&
      formData.street.trim().length > 0 &&
      formData.house.trim().length > 0
    );
  };

  const notify = (text) => {
    // console.log("Order fail");
    alert(text);
  };

  return (
    <>
      <OrderBox>
        <Toaster position="top-center" reverseOrder={false} />
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
                    <InputLabel> Ел. скринька</InputLabel>
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
              </InfoBlock>
              <InfoBlock>
                <Label>Деталі доставки</Label>
                <InputBlock>
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
                  <InputItem>
                    <InputComent
                      type="text"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                    />
                    <InputLabel>Коментар до замовлення</InputLabel>
                  </InputItem>
                </InputBlock>
                <InputBlock>
                  <InputItemComent></InputItemComent>
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
                  <Info>Всього: {order.sum}грн.</Info>
                  <Info>Вага: {order.weight}г.</Info>
                </OrderBtnInfoBlock>

                {order.items.length > 0 ? (
                  <>
                    <OrderBtn type="submit" onClick={handleSubmit}>
                      ЗАМОВИТИ
                    </OrderBtn>
                  </>
                ) : (
                  <OrderBtnDis>ЗАМОВИТИ</OrderBtnDis>
                )}
              </OrderBtnBlock>
            </OrderListBlock>
          </ListBlock>
        </Block>
      </OrderBox>
      {openModal && <OrderCompleteModal />}
    </>
  );
};

export default Order;
