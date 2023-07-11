import React, { useState } from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";

import { fetchRemoveOrder } from "../../Redux/slices/orders";

const OrderRowFin = ({ item }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const notify = (text) => toast(text);
  const dispatch = useDispatch();
  const handleViewOrder = (orderNumber) => {
    if (selectedOrder === orderNumber) {
      setSelectedOrder(null);
    } else {
      setSelectedOrder(orderNumber);
    }
  };

  const handleFinishOrder = (id, number) => {
    const question = +prompt(
      "Ви хочете видалити замовлення? Введіть номер замовлення"
    );
    if (question === number)
      dispatch(fetchRemoveOrder(id))
        .then((data) => {
          console.log(data);
          notify("👍 Замовлення видалено!");
        })
        .catch((error) => {
          console.log(error);
          notify("❌ Помилка ");
        });
    //{ id: item._id, updatedItem: updatedItem }
  };

  return (
    <React.Fragment>
      <Tr>
        <Td>{item.orderNumber}.</Td>
        <Td>{item.name}</Td>
        <Td>{item.phone}</Td>
        <Td>
          {item.city === "lviv" && <>Львів</>}
          {item.city === "z-voda" && <>З. Вода</>}
          {item.city === "operator" && <>Інше</>}
        </Td>
        <Td>{item.street}</Td>
        <Td>{item.house}</Td>
        <Td>
          <Button onClick={() => handleViewOrder(item.orderNumber)}>
            Переглянути
          </Button>
        </Td>
      </Tr>
      {selectedOrder === item.orderNumber && (
        <>
          <TrDetails>
            {/* <Td>Тип доставки</Td> */}
            <Td>Ел. пошта</Td>
            <Td>Метод оплати</Td>
            <Td>Решта</Td>
            {/* <Td>Підїзд</Td>
            <Td>Поверх</Td>
            <Td>Квартира</Td> */}
          </TrDetails>
          <TrDetails>
            {/* <Td>
              {item.deliveryType === "quick" && <>до 59хв.</>}
              {item.deliveryType === "slow" && <>до 1:30год.</>}
              {item.deliveryType === "operator" && <>уточнити</>}
            </Td> */}
            <Td>{item.email}</Td>
            <Td>
              {item.paymentMethod === "card" && <>Карткою</>}
              {item.paymentMethod === "cash" && <>Готівкою</>}
            </Td>
            <Td>{item.changeAmount}</Td>
            {/* <Td>{item.entrance}</Td>
            <Td>{item.floor}</Td>
            <Td>{item.apartment}</Td> */}
          </TrDetails>

          <TrDetails>
            <Td>№</Td>
            <Td>Зображення</Td>
            <Td>Назва</Td>
            <Td>Вага</Td>
            <Td>Ціна</Td>
            <Td>Кількість</Td>
          </TrDetails>
          {item.orderList.items.map((product, index) => (
            <TrDetails key={index}>
              <Td>{index + 1}</Td>
              <Td>
                <Image src={`${baseUrl}${product.imageUrl}`} />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.weight}</Td>
              <Td>{product.price}</Td>
              <Td>{product.quantity}</Td>
            </TrDetails>
          ))}
          <TrDetails>
            <Td>
              <b>Сума:</b>
            </Td>
            <Td>
              <b>{item.orderList.sum}</b>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <ButtonRed
                onClick={() => {
                  handleFinishOrder(item._id, item.orderNumber);
                }}>
                Видалити
              </ButtonRed>
            </Td>
          </TrDetails>
        </>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </React.Fragment>
  );
};

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
`;

const TableHeader = styled.thead`
  margin: 20px 0px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  text-align: center;

  &:nth-child(even) {
    background-color: lightGray;
  }
`;

const TrDetails = styled.tr`
  display: flex;
  align-items: center;
  background-color: lightBlue;
  text-align: center;
`;

const TrHead = styled.tr`
  display: flex;
  align-items: center;
`;

const Th = styled.th`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  overflow-x: scroll;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Td = styled.td`
  width: 200px;
  overflow-x: scroll;
  height: 80px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 40px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;
const ButtonRed = styled.button`
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: red;
  color: white;

  &:hover {
    color: #007bff;
  }
`;

// Media queries for mobile devices
const mediaQuery = "@media (max-width: 767px)";

const TrResponsive = styled(Tr)`
  flex-direction: column;

  ${mediaQuery} {
    align-items: flex-start;
    padding: 10px;
  }
`;

const TdResponsive = styled(Td)`
  ${mediaQuery} {
    height: auto;
    font-size: 1rem;
  }
`;

const TrDetailsResponsive = styled(TrDetails)`
  flex-direction: column;

  ${mediaQuery} {
    align-items: flex-start;
    padding: 10px;
  }
`;

const TdDetailsResponsive = styled(Td)`
  ${mediaQuery} {
    height: auto;
    font-size: 1rem;
  }
`;

const ThResponsive = styled(Th)`
  ${mediaQuery} {
    font-size: 1rem;
  }
`;

const TdButtonResponsive = styled(Td)`
  ${mediaQuery} {
    flex-basis: 100%;
  }
`;

export default OrderRowFin;
