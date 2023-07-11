import React, { useState } from "react";
import styled from "styled-components";
import { fetchAuth, selectIsAuth } from "../../Redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginAdmin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const isAuth = useSelector(selectIsAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    const response = await dispatch(fetchAuth(formData));
    const data = await response;
    if (data.payload === undefined) {
      alert("Помилковий пароль");
      return;
    } else if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    //console.log(data.payload.token);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };
  if (isAuth) {
    return <Navigate to="/admin/home" />;
  }

  return (
    <FormContainer>
      <FormTitle>Авторизація користувача</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormField>
        <FormField>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormField>
        <SubmitButton type="submit">Увійти</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 300px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0bbcf0;
  }
`;

export default LoginAdmin;
