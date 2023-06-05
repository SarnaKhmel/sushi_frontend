import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.header`
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

const StyledLink = styled(Link)`
  margin-left: 10px;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Content = styled.div`
  margin-top: 80px;
  min-height: 90px;
`;

const LayoutAdmin = ({ children }) => {
  return (
    <Container>
      <Header>
        <Logo>Admin Panel</Logo>
        <Links>
          <StyledLink to="/admin/admins">Адміністратори</StyledLink>
          <StyledLink to="/admin/products">Продукти</StyledLink>
          <StyledLink to="/admin/posts">Пости</StyledLink>
          <StyledLink to="/admin/orders">Замовлення</StyledLink>
          <StyledLink to="/admin/statistics">Статистика</StyledLink>
          <StyledLink to="/admin/me">Про мене</StyledLink>
        </Links>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};
export default LayoutAdmin;
