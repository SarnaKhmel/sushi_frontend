import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  Button,
  Tabs,
  Tab,
  useTheme,
  CircularProgress
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { fetchOrders } from "../../Redux/slices/orders";
import OrdersTable from "../OrdersTable/OrdersTable";
import OrdersTableAll from "../OrdersTable/OrdersTableAll";
import OrdersTableFin from "../OrdersTable/OrdersTableFin";
import ExelOrders from "../Exel/ExelOrders";

import orderBell from "./orderBell.mp3";

const AdminOrderPage = () => {
  const theme = useTheme();
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstInteraction, setIsFirstInteraction] = useState(false);
  const [prevOrderCount, setPrevOrderCount] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders?.status === "loaded") {
      const currentOrderCount = orders.items.length;
      if (currentOrderCount > prevOrderCount) {
        setIsPlaying(true);
      }
      setPrevOrderCount(currentOrderCount);
    }
  }, [orders, prevOrderCount]);

  useEffect(() => {
    if (isPlaying && isFirstInteraction) {
      const audio = new Audio(orderBell);
      audio.play();
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  }, [isPlaying, isFirstInteraction]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            dispatch(fetchOrders());
            return 30;
          }
          return prevSeconds - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, dispatch]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const newOrders = orders?.items.filter((item) => item.status === "new") || [];
  const sortedNewOrders = [...newOrders].sort(
      (a, b) => b.orderNumber - a.orderNumber
  );

  const sortedNewOrdersAll = [...(orders?.items || [])].sort(
      (a, b) => b.orderNumber - a.orderNumber
  );

  const finishedOrders = orders?.items.filter((item) => item.status === "fin") || [];
  const rejectedOrders = orders?.items.filter((item) => item.status === "cancel") || [];

  return (
      <LayoutAdmin>
        <audio ref={audioRef} src={orderBell} muted />

        <Paper
            elevation={2}
            sx={{
              width: '100%',
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="primary">
              {isActive ? <AddCircleIcon /> : <RemoveCircleIcon color="error" />}
            </IconButton>

            <Typography variant="h6">
              Залишилось секунд: {seconds}
            </Typography>

            <IconButton
                color="error"
                onClick={handleToggle}
            >
              {isActive ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Box>
        </Paper>

        {orders?.status === "loaded" ? (
            <Container maxWidth="xl">
              <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      '& .MuiTab-root': {
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }
                    }}
                >
                  <Tab label="Нові замовлення" />
                  <Tab label="Всі замовлення" />
                  <Tab label="Виконані замовлення" />
                  <Tab label="Відхилені замовлення" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                  {activeTab === 0 && (
                      <Box>
                        <ExelOrders products={sortedNewOrders} name="Нові" />
                        <OrdersTable newOrders={sortedNewOrders} title="Нові замовлення" />
                      </Box>
                  )}

                  {activeTab === 1 && (
                      <Box>
                        <ExelOrders products={sortedNewOrdersAll} name="Всі" />
                        <OrdersTableAll newOrders={sortedNewOrdersAll} title="Всі замовлення" />
                      </Box>
                  )}

                  {activeTab === 2 && (
                      <Box>
                        <ExelOrders products={finishedOrders} name="Завершені" />
                        <OrdersTableFin newOrders={finishedOrders} title="Завершені замовлення" />
                      </Box>
                  )}

                  {activeTab === 3 && (
                      <Box>
                        <ExelOrders products={rejectedOrders} name="Відхилені" />
                        <OrdersTableFin newOrders={rejectedOrders} title="Відхилені замовлення" />
                      </Box>
                  )}
                </Box>
              </Paper>
            </Container>
        ) : (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="50vh"
            >
              <CircularProgress />
            </Box>
        )}
      </LayoutAdmin>
  );
};

export default AdminOrderPage;