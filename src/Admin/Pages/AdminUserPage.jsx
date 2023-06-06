import React from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../Redux/slices/auth";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
const AdminUserPage = () => {
  const [me, setMe] = useState("");
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

  // console.log(me);
  return (
    <LayoutAdmin>
      <StylesToaster position="bottom-right" reverseOrder={false} />
      <Container>
        <Label>Ім'я: {me.fullName}</Label>
        <Label>Пошта: {me.email}</Label>
      </Container>
    </LayoutAdmin>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 500px;
`;

const Label = styled.p`
  color: darkGray;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const StylesToaster = styled(Toaster)`
  background-color: lightGrey;
  color: #007bff;
`;
// const Text = styled.p`
//   color: black;
//   text-decoration: none;
//   display: block;
//   &:hover {
//     color: #007bff;
//   }
// `;

// const Btn = styled.button`
//   color: red;
//   text-decoration: none;
//   &:hover {
//     color: #007bff;
//   }
// `;

export default AdminUserPage;
