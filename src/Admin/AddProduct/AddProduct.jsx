import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import { toast, Toaster } from "react-hot-toast";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Stack,
  IconButton
} from "@mui/material";
import { Delete, Upload, Clear } from "@mui/icons-material";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const [subBlockOpen, setSubBlockOpen] = useState(false);
  const [isCheckedSale, setIsCheckedSale] = useState(false);

  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  const handleInputChange = () => {
    setIsCheckedSale(!isCheckedSale);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
      const newName = `${Date.now()}_${file.name}`;
      const renamedFile = new File([file], newName, { type: file.type });
      setSelectedFile(renamedFile);
      setImageUrl(URL.createObjectURL(renamedFile));
      notify("Зображення вибрано");
    } else {
      notify("Please select a valid image file (png, jpg, jpeg)");
    }
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
        .post("/upload/products", formData)
        .then((response) => {
          setImageUrl(response.data.imageUrl);
          setImageProductUrl(response.data.url);
          setCheckUpload(true);
          notify("Зображення завантажено");
        })
        .catch((error) => {
          console.error(error);
          setCheckUpload(false);
        });
  };

  const [formFields, setFormFields] = useState({
    name: "",
    text: "",
    type: "set",
    sub_type: "no",
    sale: isCheckedSale,
    weight: "",
    price: "",
    old_price: "",
    week_sale: false,
  });

  const handleFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (fieldName === "type" && fieldValue === "rolls") setSubBlockOpen(true);
    if (fieldName === "type" && fieldValue !== "rolls") setSubBlockOpen(false);

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [fieldName]: fieldValue,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (imageProductUrl === null) {
      return notify("‼ Завантажте зображення!");
    }

    const productData = {
      imageUrl: imageProductUrl,
      name: formFields.name,
      price: formFields.price,
      old_price: formFields.old_price,
      sale: isCheckedSale,
      text: formFields.text,
      type: formFields.type,
      sub_type: formFields.sub_type,
      weight: formFields.weight,
      week_sale: false,
    };

    axios
        .post("/auth/products", productData)
        .then((response) => {
          notify("👍 Товар додано!");
          handleClearForm();
        })
        .catch((error) => {
          console.error(error);
        });
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    notify("Зображення відкріплено");
  };

  const handleClearForm = () => {
    if (selectedFile !== null) {
      handleClearImage();
    }
    setFormFields({
      name: "",
      text: "",
      type: "set",
      sub_type: "no",
      sale: false,
      weight: "",
      price: "",
      old_price: "",
      week_sale: false,
    });
    setIsCheckedSale(false);
    notify("Форму очищено");
  };

  return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, my: 4 }}>
          <Stack spacing={4}>
            {/* Image Upload Section */}
            <Box>
              <Typography variant="h6" gutterBottom>
                Крок 1: Завантажити зображення
              </Typography>
              <Stack spacing={2}>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<Upload />}
                >
                  Вибрати файл
                  <input
                      type="file"
                      hidden
                      onChange={handleFileSelect}
                      accept="image/*"
                  />
                </Button>

                {imageUrl && (
                    <Box sx={{ position: "relative", width: 200, height: 200 }}>
                      <img
                          src={imageUrl}
                          alt="Uploaded"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                      />
                      <IconButton
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            bgcolor: "background.paper"
                          }}
                          onClick={handleClearImage}
                      >
                        <Clear />
                      </IconButton>
                    </Box>
                )}

                {!checkUpload && selectedFile && (
                    <Button
                        variant="outlined"
                        onClick={handleFileUpload}
                        startIcon={<Upload />}
                    >
                      Завантажити
                    </Button>
                )}
              </Stack>
            </Box>

            {/* Product Form Section */}
            <Box component="form" onSubmit={handleFormSubmit}>
              <Typography variant="h6" gutterBottom>
                Крок 2: Заповнити інформацію
              </Typography>
              <Stack spacing={3}>
                <TextField
                    fullWidth
                    required
                    label="Назва продукту"
                    name="name"
                    value={formFields.name}
                    onChange={handleFormFieldChange}
                />

                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Опис продукту"
                    name="text"
                    value={formFields.text}
                    onChange={handleFormFieldChange}
                />

                <FormControl fullWidth>
                  <InputLabel>Тип продукту</InputLabel>
                  <Select
                      name="type"
                      value={formFields.type}
                      onChange={handleFormFieldChange}
                      label="Тип продукту"
                  >
                    <MenuItem value="set">Сет</MenuItem>
                    <MenuItem value="rolls">Рол</MenuItem>
                    <MenuItem value="soup">Суп</MenuItem>
                    <MenuItem value="hot">Гарячий</MenuItem>
                    <MenuItem value="drink">Напій</MenuItem>
                    <MenuItem value="add">Додаток</MenuItem>
                    <MenuItem value="appetizer">Закуски</MenuItem>
                  </Select>
                </FormControl>

                {subBlockOpen && (
                    <FormControl fullWidth>
                      <InputLabel>Підтип для ролів</InputLabel>
                      <Select
                          name="sub_type"
                          value={formFields.sub_type}
                          onChange={handleFormFieldChange}
                          label="Підтип для ролів"
                      >
                        <MenuItem value="no">-</MenuItem>
                        <MenuItem value="philadelphia">Філадельфії</MenuItem>
                        <MenuItem value="california">Каліфорнії</MenuItem>
                        <MenuItem value="inkuri">Ікури</MenuItem>
                        <MenuItem value="firm">Фірмові</MenuItem>
                        <MenuItem value="dragons">Дракони</MenuItem>
                        <MenuItem value="alaska">Аляска</MenuItem>
                        <MenuItem value="futomaki">Футомакі</MenuItem>
                        <MenuItem value="maki">Макі</MenuItem>
                      </Select>
                    </FormControl>
                )}

                <TextField
                    fullWidth
                    required
                    type="number"
                    label="Вага продукту"
                    name="weight"
                    value={formFields.weight}
                    onChange={handleFormFieldChange}
                />

                <TextField
                    fullWidth
                    required
                    type="number"
                    label="Ціна продукту"
                    name="price"
                    value={formFields.price}
                    onChange={handleFormFieldChange}
                />

                <FormControlLabel
                    control={
                      <Checkbox
                          checked={isCheckedSale}
                          onChange={handleInputChange}
                          name="sale"
                      />
                    }
                    label="Акція на продукт"
                />

                {isCheckedSale && (
                    <TextField
                        fullWidth
                        type="number"
                        label="Акційна ціна продукту"
                        name="old_price"
                        value={formFields.old_price}
                        onChange={handleFormFieldChange}
                    />
                )}

                <Stack direction="row" spacing={2}>
                  <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                  >
                    Створити
                  </Button>
                  <Button
                      variant="outlined"
                      color="error"
                      onClick={handleClearForm}
                      startIcon={<Delete />}
                  >
                    Очистити
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Paper>
        <Toaster position="bottom-right" reverseOrder={false} />
      </Container>
  );
};

export default AddProduct;