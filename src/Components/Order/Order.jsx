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
  InputComment,
  InputItemComment,
  InputLabel,
  InputItem,
  OrderListBlock,
  OrderBtnBlock,
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

const PACKAGING_COST = 10;

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.order);
  const [openModal, setOpenModal] = useState(false);

  const openFinModal = () => {
    setOpenModal(true);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "0",
    email: "",
    city: "",
    street: "",
    house: "",
    paymentMethod: "cash",
    changeAmount: "",
    comment: "",
    orderList: order,
    status: "new",
    device: "1",
    fixators: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotalCost = () => {
    return order.sum + PACKAGING_COST + (formData.fixators * 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    try {
      const response = await dispatch(createOrder({
        ...formData,
        totalCost: calculateTotalCost(),
      }));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(clearOrderState());
        openFinModal();
      } else {
        toast.error("Помилка. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const isFormValid = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Ім'я повинно бути більше 3 символів!");
      return false;
    }

    if (!/^\d+$/.test(formData.phone.trim())) {
      toast.error(
          "Некоректний формат номеру телефону. Введіть номер телефону у форматі 098 11 22 333."
      );
      return false;
    }

    const phoneNumber = formData.phone.replace(/\s/g, "");
    if (phoneNumber.length !== 10) {
      toast.error(
          "Не коректний номер телефону. Введіть номер телефону у форматі 098 11 22 333."
      );
      return false;
    }

    if (formData.city.trim().length === 0) {
      toast.error("Оберіть місто");
      return false;
    }

    if (formData.street.trim().length === 0) {
      toast.error("Не коректна вулиця");
      return false;
    }

    if (formData.house.trim().length === 0) {
      toast.error("Не коректний номер будинку");
      return false;
    }

    return true;
  };

  const styles = {
    select: {
      border: "none",
      background: "rgb(49, 49, 49)",
      borderBottom: "1px solid white",
      width: "160px",
      color: "rgba(255, 255, 255, 0.8)",
      opacity: "0.8",
    },
    option: {
      border: "none",
      background: "rgb(49, 49, 49)",
      borderBottom: "1px solid white",
      width: "160px",
      color: "rgba(255, 255, 255, 0.8)",
    },
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
                      <InputLabel>Ел. скринька</InputLabel>
                    </InputItem>
                  </InputBlock>
                </InfoBlock>

                <InfoBlock>
                  <Label>Кур'єрська доставка</Label>
                  <InputBlock>
                    <InputItem>
                      <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                      />
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
                      <select
                          style={styles.select}
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                      >
                        <option style={styles.option} value="cash">
                          Готівкою
                        </option>
                        <option style={styles.option} value="card">
                          Карткою
                        </option>
                      </select>
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
                </InfoBlock>
                <InfoBlock>
                  <InputBlock>
                    <InputItem>
                      <Input
                          type="number"
                          name="device"
                          min="0"
                          step="1"
                          max="100"
                          value={formData.device}
                          onChange={handleChange}
                      />
                      <InputLabel>Кількість приборів</InputLabel>
                    </InputItem>
                    <InputItem>
                      <Input
                          type="number"
                          name="fixators"
                          min="0"
                          step="1"
                          max="100"
                          value={formData.fixators}
                          onChange={handleChange}
                      />
                      <InputLabel>К-ть фіксаторів (1 грн/шт)</InputLabel>
                    </InputItem>
                  </InputBlock>
                </InfoBlock>

                <InfoBlock>
                  <InputBlock>
                    <InputItemComment>
                      <InputComment
                          type="text"
                          name="comment"
                          value={formData.comment}
                          onChange={handleChange}
                      />
                      <InputLabel>Коментар до замовлення</InputLabel>
                    </InputItemComment>
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
                    <Info>Вартість замовлення: {order.sum} грн</Info>
                    <Info>Упакування: {PACKAGING_COST} грн</Info>
                    <Info>Фіксатори: {formData.fixators * 1} грн</Info>
                    <Info>Загальна сума: {calculateTotalCost()} грн</Info>
                    <Info>Вага: {order.weight}г.</Info>
                  </OrderBtnInfoBlock>

                  {order.items.length > 0 ? (
                      <OrderBtn type="submit" onClick={handleSubmit}>
                        ЗАМОВИТИ
                      </OrderBtn>
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