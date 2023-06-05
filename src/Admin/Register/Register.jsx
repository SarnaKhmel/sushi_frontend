import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nickname,
      email,
      password,
    };

    console.log(formData);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setErrors({ ...errors, nickname: "" });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };

  return (
    <FormContainer>
      <FormTitle>Реєстрація користувача</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="nickname">Ім'я</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
        </FormField>
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
        <SubmitButton type="submit">Зареєструватися</SubmitButton>
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

export default Register;
