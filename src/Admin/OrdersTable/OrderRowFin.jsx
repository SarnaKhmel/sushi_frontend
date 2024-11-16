import React, { useState } from 'react';
import {
  TableCell,
  TableRow,
  Collapse,
  Box,
  Typography,
  IconButton,
  Table,
  TableHead,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { fetchRemoveOrder } from '../../Redux/slices/orders';
import { toast } from 'react-hot-toast';
import { baseUrl } from '../../Utils/baseUrl';

const OrderRowFin = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [orderNumberInput, setOrderNumberInput] = useState('');
  const dispatch = useDispatch();

  const handleDeleteOrder = () => {
    if (parseInt(orderNumberInput) === item.orderNumber) {
      dispatch(fetchRemoveOrder(item._id))
          .then(() => {
            toast.success("👍 Замовлення видалено!");
            setDialogOpen(false);
          })
          .catch(() => {
            toast.error("❌ Помилка");
          });
    } else {
      toast.error("❌ Невірний номер замовлення");
    }
  };

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
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div" sx={{ color: 'primary.main' }}>
                  Деталі замовлення
                </Typography>

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
                      <TableCell>{item.email || " - "}</TableCell>
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
                <Table size="small" sx={{ backgroundColor: 'background.paper', mb: 2 }}>
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

                {/* Action Button */}
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ mt: 2 }}
                >
                  <Button
                      variant="contained"
                      color="error"
                      onClick={() => setDialogOpen(true)}
                      sx={{
                        minWidth: 120,
                        '&:hover': { backgroundColor: 'error.dark' }
                      }}
                  >
                    Видалити замовлення
                  </Button>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>

        {/* Confirmation Dialog */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Підтвердження видалення</DialogTitle>
          <DialogContent>
            <Typography sx={{ mb: 2 }}>
              Для підтвердження видалення введіть номер замовлення: {item.orderNumber}
            </Typography>
            <TextField
                fullWidth
                type="number"
                value={orderNumberInput}
                onChange={(e) => setOrderNumberInput(e.target.value)}
                label="Номер замовлення"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Скасувати
            </Button>
            <Button onClick={handleDeleteOrder} color="error" variant="contained">
              Видалити
            </Button>
          </DialogActions>
        </Dialog>
      </>
  );
};

export default OrderRowFin;