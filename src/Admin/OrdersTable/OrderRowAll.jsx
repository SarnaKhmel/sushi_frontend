import React, { useState } from 'react';
import {
  TableCell,
  TableRow,
  Collapse,
  Box,
  Typography,
  IconButton,
  Chip,
  Table,
  TableHead,
  TableBody,
  Alert
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { finOrder } from '../../Redux/slices/orders';
import { toast } from 'react-hot-toast';
import { baseUrl } from '../../Utils/baseUrl';

const OrderRowAll = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFinishOrder = () => {
    const updatedItem = { ...item, status: "fin" };
    dispatch(finOrder({ id: item._id, updatedItem }))
        .then(() => {
          toast.success("👍 Замовлення виконано!");
        })
        .catch(() => {
          toast.error("❌ Помилка");
        });
  };

  console.log("item", item);
  const getCityName = (city) => {
    const cities = {
      'lviv': 'Львів',
      'z-voda': 'З. Вода',
      'operator': 'Інше'
    };
    return cities[city] || city;
  };

  return (
      <>
        <TableRow
            sx={{
              '& > *': { borderBottom: 'unset' },
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
            }}
        >
          <TableCell>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell>{item.orderNumber}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.phone}</TableCell>
          <TableCell>{getCityName(item.city)}</TableCell>
          <TableCell>{item.street}</TableCell>
          <TableCell>{item.house}</TableCell>
          {item.status === "new" && (
              <TableCell>
                <Chip
                    label="Виконати"
                    onClick={handleFinishOrder}
                    color="primary"
                    variant="outlined"
                    sx={{ '&:hover': { backgroundColor: 'primary.light', color: 'white' } }}
                />
              </TableCell>
          )}
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div" sx={{ color: 'primary.main' }}>
                  Деталі замовлення
                </Typography>

                {/* Comment Section */}
                {item.comment && item.comment !== "" && (
                    <Alert
                        severity="info"
                        sx={{
                          mb: 2,
                          '& .MuiAlert-message': {
                            width: '100%'
                          }
                        }}
                    >
                      <Typography variant="subtitle2" gutterBottom>
                        Коментар клієнта:
                      </Typography>
                      <Typography variant="body2">
                        {item.comment}
                      </Typography>
                    </Alert>
                )}

                {/* Customer Details */}
                <Table size="small" sx={{ mb: 2, backgroundColor: 'background.paper' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Ел. пошта</TableCell>
                      <TableCell>Метод оплати</TableCell>
                      <TableCell>Решта з</TableCell>
                      <TableCell>Сума</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>
                        {item.paymentMethod === 'card' ? 'Карткою' : 'Готівкою'}
                      </TableCell>
                      <TableCell>{item.changeAmount}</TableCell>
                      <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>
                        {item.orderList.sum}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Order Items */}
                <Table size="small" sx={{ backgroundColor: 'background.paper' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>№</TableCell>
                      <TableCell>Зображення</TableCell>
                      <TableCell>Назва</TableCell>
                      <TableCell>Вага</TableCell>
                      <TableCell>Ціна</TableCell>
                      <TableCell>Кількість</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.orderList.items.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            <Box
                                component="img"
                                src={`${baseUrl}${product.imageUrl}`}
                                sx={{
                                  height: 80,
                                  width: 80,
                                  objectFit: 'cover',
                                  borderRadius: 1
                                }}
                            />
                          </TableCell>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.weight}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.quantity}</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
  );
};

export default OrderRowAll;