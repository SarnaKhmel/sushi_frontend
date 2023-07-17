import React, { useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";

import { finOrder } from "../../Redux/slices/orders";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrderRow = ({ item }) => {
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

  const handleCancelOrder = () => {
    const updatedItem = { ...item, status: "cancel" };
    console.log({ id: item._id, item: updatedItem });
    dispatch(finOrder({ id: item._id, updatedItem: updatedItem }))
      .then((data) => {
        console.log(data);
        notify("🥲 Замовлення відхилено!");
      })
      .catch((error) => {
        console.log(error);
        notify("❌ Помилка");
      });
  };

  const handleFinishOrder = () => {
    const updatedItem = { ...item, status: "fin" };
    console.log({ id: item._id, item: updatedItem });
    dispatch(finOrder({ id: item._id, updatedItem: updatedItem }))
      .then((data) => {
        console.log(data);
        notify("👍 Замовлення виконано!");
      })
      .catch((error) => {
        console.log(error);
        notify("❌ Помилка ");
      });
  };

  return (
    <React.Fragment>
      <Table>
        <Thead>
          <Tr>
            <Th>Номер</Th>
            <Th>Ім'я</Th>
            <Th>Телефон</Th>
            <Th>Місто</Th>
            <Th>Вулиця</Th>
            <Th>Будинок</Th>
            <Th>Дії</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <TdStyled>{item.orderNumber}.</TdStyled>
            <TdStyled>{item.name}</TdStyled>
            <TdStyled>{item.phone}</TdStyled>
            <TdStyled>
              {item.city === "lviv" && <>Львів</>}
              {item.city === "z-voda" && <>З. Вода</>}
              {item.city === "operator" && <>Інше</>}
            </TdStyled>
            <TdStyled>{item.street}</TdStyled>
            <TdStyled>{item.house}</TdStyled>
            <TdStyled>
              <Button onClick={() => handleViewOrder(item.orderNumber)}>
                Переглянути
              </Button>
            </TdStyled>
          </Tr>
        </Tbody>
      </Table>
      {selectedOrder === item.orderNumber && (
        <OpenTable>
          <Table>
            <Thead>
              <Tr>
                {/* <Td>Тип доставки</Td> */}
                <Th>Ел. пошта:</Th>
                <Th>Метод оплати:</Th>
                <Th>Решта з:</Th>
                <Th>Сума:</Th>
                {/* <Td>Підїзд</Td>
                <Td>Поверх</Td>
                <Td>Квартира</Td> */}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <TdStyled>{item.email}</TdStyled>
                <TdStyled>
                  {item.paymentMethod === "card" && <>Карткою</>}
                  {item.paymentMethod === "cash" && <>Готівкою</>}
                </TdStyled>
                <TdStyled>{item.changeAmount} </TdStyled>
                <TdStyled
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    backgroundColor: "white",
                  }}>
                  {item.orderList.sum}
                </TdStyled>
              </Tr>
            </Tbody>
          </Table>
          <Table>
            <Thead>
              <Tr>
                <Th>№</Th>
                <Th>Зображення</Th>
                <Th>Назва</Th>
                <Th>Вага</Th>
                <Th>Ціна</Th>
                <Th>Кількість</Th>
              </Tr>
            </Thead>
            <Tbody>
              {item.orderList.items.map((product, index) => (
                <Tr key={index}>
                  <TdStyled>{index + 1}</TdStyled>
                  <TdStyled>
                    <Image src={`${baseUrl}${product.imageUrl}`} />
                  </TdStyled>
                  <TdStyled>{product.name}</TdStyled>
                  <TdStyled>{product.weight}</TdStyled>
                  <TdStyled>{product.price}</TdStyled>
                  <TdStyled>{product.quantity}</TdStyled>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <BtnBlock>
            <Button
              style={{ color: "red", marginRight: "50px" }}
              onClick={handleCancelOrder}>
              Відхилити
            </Button>

            <Button
              style={{ color: "green", marginRight: "50px" }}
              onClick={handleFinishOrder}>
              Прийняти
            </Button>
          </BtnBlock>
        </OpenTable>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </React.Fragment>
  );
};

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const OpenTable = styled.div`
  background-color: lightBlue;
  height: 100%;
  overflow: scroll;
`;

const BtnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const TdStyled = styled(Td)`
  text-align: center;
`;

const Button = styled.button`
  height: 40px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;
export default OrderRow;
