import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/auth";
import { useState, useEffect } from "react";

const LayoutAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const onClickLogout = () => {
    if (window.confirm("Ви дійсно хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <Container>
      <Header>
        <Logo>Admin Panel</Logo>
        {token ? (
          <>
            <Links>
              <StyledLink to="/admin/home">Головна</StyledLink>
              <StyledLink to="/admin/products">Продукти</StyledLink>
              <StyledLink to="/admin/posts">Пости</StyledLink>
              <StyledLink to="/admin/orders">Замовлення</StyledLink>
              {/* <StyledLink to="/admin/statistics">Статистика</StyledLink> */}
              <StyledLink to="/admin/me">Про мене</StyledLink>
              <Button onClick={onClickLogout} variant="contained" color="error">
                Выйти
              </Button>
            </Links>
          </>
        ) : (
          <>
            <StyledLink to="/admin/login">Авторизація</StyledLink>
          </>
        )}
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header`
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    color: #007bff;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: red;
    color: #fff;
    font-weight: bold;
  }
`;

const Content = styled.div`
  margin-top: 80px;
  min-height: 90vh;
`;
export default LayoutAdmin;
