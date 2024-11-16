import React, { useState, useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { useDispatch } from "react-redux";
import { fetchAuthMe, changePassword } from "../../Redux/slices/auth";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

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
        .then(() => {
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
          <Toaster position="bottom-right" reverseOrder={false} />
          <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="300px"
          >
            <CircularProgress />
          </Box>
        </LayoutAdmin>
    );
  }

  return (
      <LayoutAdmin>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Container maxWidth="sm" sx={{ mt: 10 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Профіль користувача
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">Ім'я: {me.fullName}</Typography>
            <Typography variant="body1">Пошта: {me.email}</Typography>
            <Box
                sx={{
                  border: "1px solid red",
                  borderRadius: 2,
                  p: 2,
                  mt: 2,
                }}
            >
              <Typography variant="h6" gutterBottom>
                Змінити пароль
              </Typography>
              <TextField
                  type="password"
                  label="Поточний пароль"
                  variant="outlined"
                  fullWidth
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                  sx={{ mb: 2 }}
              />
              <TextField
                  type="password"
                  label="Новий пароль"
                  variant="outlined"
                  fullWidth
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  sx={{ mb: 2 }}
              />
              <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleChangePassword}
              >
                Змінити
              </Button>
            </Box>
          </Stack>
        </Container>
      </LayoutAdmin>
  );
};

export default AdminUserPage;
