import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/auth";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const LayoutAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  // Отримуємо початковий стан теми з localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    if (!storedToken) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Зберігаємо тему в localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const onClickLogout = () => {
    if (window.confirm("Ви дійсно хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleThemeToggle = () => setDarkMode(!darkMode);

  const links = [
    { to: "/admin/home", text: "Головна" },
    { to: "/admin/products", text: "Продукти" },
    { to: "/admin/posts", text: "Пости" },
    { to: "/admin/orders", text: "Замовлення" },
    { to: "/admin/me", text: "Про мене" },
    {
      href: "https://www.google.com/maps/d/edit?mid=1nfbGMQRsiJ_u540DNb56mfzaiuYZ3nw",
      text: "Мапа",
      external: true,
    },
  ];

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
            <IconButton color="inherit" onClick={handleThemeToggle}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {token && (
                <>
                  <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                    {links.map((link, index) =>
                        link.external ? (
                            <Button
                                key={index}
                                color="inherit"
                                component="a"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              {link.text}
                            </Button>
                        ) : (
                            <Button key={index} color="inherit" component={Link} to={link.to}>
                              {link.text}
                            </Button>
                        )
                    )}
                    <Button color="error" variant="contained" onClick={onClickLogout}>
                      Вийти
                    </Button>
                  </Box>
                  <IconButton
                      color="inherit"
                      edge="end"
                      sx={{ display: { sm: "none" } }}
                      onClick={toggleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                </>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
          <List>
            {links.map((link, index) =>
                link.external ? (
                    <ListItem
                        button
                        key={index}
                        component="a"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <ListItemText primary={link.text} />
                    </ListItem>
                ) : (
                    <ListItem
                        button
                        key={index}
                        component={Link}
                        to={link.to}
                        onClick={toggleMenu}
                    >
                      <ListItemText primary={link.text} />
                    </ListItem>
                )
            )}
            <ListItem button onClick={onClickLogout}>
              <ListItemText primary="Вийти" sx={{ color: "error.main" }} />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ mt: 8, p: 2 }}>
          {children}
        </Box>
      </ThemeProvider>
  );
};

export default LayoutAdmin;