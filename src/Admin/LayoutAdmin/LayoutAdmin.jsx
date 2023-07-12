import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LayoutAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    setToken(localStorage.getItem("token"));
    if (token === null || token === undefined) {
      navigate("/admin/login");
    }
  }, []);

  const onClickLogout = () => {
    if (window.confirm("Ви дійсно хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              <StyledLink
                as="a"
                href="https://www.google.com/maps/d/u/0/viewer?mid=1stv2s4gZ0HnC7rfZz2FqxZxtB9fh0DE&ll=49.8184077019921%2C23.938815850000026&z=12"
                target="_blank"
                rel="noopener noreferrer">
                Мапа
              </StyledLink>
              <Button onClick={onClickLogout} variant="contained" color="error">
                Вийти
              </Button>
            </Links>
            <MenuLink onClick={toggleMenu}>Меню</MenuLink>
            {menuOpen && (
              <LinksMobile>
                <StyledLink to="/admin/home">Головна</StyledLink>
                <StyledLink to="/admin/products">Продукти</StyledLink>
                <StyledLink to="/admin/posts">Пости</StyledLink>
                <StyledLink to="/admin/orders">Замовлення</StyledLink>
                {/* <StyledLink to="/admin/statistics">Статистика</StyledLink> */}
                <StyledLink to="/admin/me">Про мене</StyledLink>
                <StyledLink
                  as="a"
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1stv2s4gZ0HnC7rfZz2FqxZxtB9fh0DE&ll=49.8184077019921%2C23.938815850000026&z=12"
                  target="_blank"
                  rel="noopener noreferrer">
                  Мапа
                </StyledLink>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error">
                  Вийти
                </Button>
              </LinksMobile>
            )}
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

const Container = styled.div`
  width: 100vw;
`;

const Header = styled.header`
  width: 100vw;
  height: 80px;
  position: absolute;
  top: 0;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const MenuLink = styled.button`
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #007bff;
  }

  display: none;
  @media (max-width: 768px) {
    margin-bottom: 10px;

    display: contents;
    flex-direction: column;
    z-index: 9999;
  }
`;

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  display: contents;
  width: 300px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksMobile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  display: none;
  @media (max-width: 768px) {
    display: contents;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  margin-top: 80px;
  min-height: 90vh;
  @media (max-width: 768px) {
    margin-top: 100px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default LayoutAdmin;
