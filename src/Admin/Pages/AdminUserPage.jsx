import React, { useState, useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, changePassword } from "../../Redux/slices/auth";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const AdminUserPage = () => {
  const [me, setMe] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const notify = (text) =>
    toast(text, {
      style: {
        borderRadius: "5px",
        background: "#333",
        color: "#fff",
      },
    });

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await dispatch(fetchAuthMe());
        const data = await response.payload;
        setMe(data);
        notify("Завантажено!");
      } catch (error) {
        notify("Помилка!");
        console.error("Error:", error);
      }
    };

    fetchMe();
  }, [dispatch]);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword) {
      notify("Будь ласка, введіть поточний і новий паролі");
      return;
    }

    dispatch(changePassword({ currentPassword, newPassword, id: me._id }))
      .unwrap()
      .then((response) => {
        notify("Пароль змінено успішно!");
        setCurrentPassword("");
        setNewPassword("");
      })
      .catch((error) => {
        notify("Сталася помилка при зміні пароля");
        console.error("Error:", error);
      });
  };

  if (!me) {
    return (
      <LayoutAdmin>
        <StylesToaster position="bottom-right" reverseOrder={false} />
        <LoadingContainer>
          <LoadingText>Завантаження...</LoadingText>
        </LoadingContainer>
      </LayoutAdmin>
    );
  }

  return (
    <LayoutAdmin>
      <StylesToaster position="bottom-right" reverseOrder={false} />
      <Container>
        <Label>Ім'я: {me._id}</Label>
        <Label>Ім'я: {me.fullName}</Label>
        <Label>Пошта: {me.email}</Label>
        <Block>
          <Label>Змінити пароль</Label>
          <Input
            type="password"
            minLength={6}
            placeholder="Поточний пароль"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
          <Input
            type="password"
            minLength={6}
            placeholder="Новий пароль"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <Button onClick={handleChangePassword}>Змінити</Button>
        </Block>
      </Container>
    </LayoutAdmin>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const LoadingText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 500px;

  /* Mobile styles */
  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

const Label = styled.p`
  color: black;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const Block = styled.div`
  border-radius: 10px;
  border: 1px solid red;
  padding: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  color: darkGray;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid red;
  cursor: pointer;
  margin-top: 10px;
`;

const StylesToaster = styled(Toaster)`
  background-color: lightGrey;
  color: #007bff;
`;

export default AdminUserPage;
