import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "../../Utils/baseUrl";
import { updateProduct } from "../../Redux/slices/products";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const Product = ({ product, setUpdate, update }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [imageProductUrl, setImageProductUrl] = useState(product.imageUrl);
  const [checkUpload, setCheckUpload] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.imageUrl);
  const [newImage, setNewImage] = useState("");

  const [formFields, setFormFields] = useState({
    _id: product._id,
    name: product.name,
    text: product.text,
    type: product.type,
    sub_type: product.sub_type,
    sale: product.sale,
    weight: product.weight,
    price: product.price,
    old_price: product.old_price,
    week_sale: product.week_sale,
  });

  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  // Функція для обробки вибору нового зображення
  const handleNewImageChangeA = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewImage(reader.result);
    };

    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
      reader.readAsDataURL(file);
      handleFileSelect(file);
    } else {
      notify("Будь ласка, виберіть правильний формат зображення (png, jpg, jpeg)");
    }
  };

  // Функція для вибору файлу
  const handleFileSelect = (file) => {
    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
      const newName = `${Date.now()}_${file.name}`;
      const renamedFile = new File([file], newName, { type: file.type });
      setSelectedFile(renamedFile);
      setImageUrl(URL.createObjectURL(renamedFile));
      notify("Зображення вибрано");
    } else {
      notify("Будь ласка, виберіть правильний формат зображення (png, jpg, jpeg)");
    }
  };

  // Функція для завантаження файлу на сервер
  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios
        .post("/upload/products", formData)
        .then((response) => {
          setImageUrl(response.data.imageUrl);
          setImageProductUrl(response.data.url);
          notify("Зображення звантажено ！");
          setCheckUpload(true);
        })
        .catch((error) => {
          notify("Зображення не звантажено ‼️ Розмір файлу до 5Мб");
          setCheckUpload(false);
        });
  };

  // Обробник зміни полів форми
  const handleFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [fieldName]: fieldValue,
    }));
  };

  // Функція для відправки оновленого продукту на сервер
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const productData = {
      _id: product._id,
      name: formFields.name,
      price: formFields.price,
      old_price: formFields.old_price,
      sale: formFields.sale,
      text: formFields.text,
      type: formFields.type,
      sub_type: formFields.sub_type,
      weight: formFields.weight,
      week_sale: formFields.week_sale,
      imageUrl: imageProductUrl,
    };

    dispatch(updateProduct({ id: productData._id, productData: productData }))
        .then(() => {
          notify("👍 Продукт оновлено!");
          setUpdate(!update);
        })
        .catch(() => {
          notify("❌ Помилка при оновленні продукту");
        });
  };

  // Функція для видалення зображення
  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    notify("Зображення відкріплено");
  };

  return (
      <Paper sx={{ p: 10 }}>
        <Typography variant="h6" gutterBottom>
          Крок 1: Завантажити зображення
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {!checkUpload && (
              <>
                <img src={`${baseUrl}${currentImage}`} alt="Зображення" style={{ width: 200, height: 200, objectFit: "cover" }} />
                <input type="file" accept="image/*" onChange={handleNewImageChangeA} />
              </>
          )}

          {newImage && (
              <>
                <img src={newImage} alt="Нове зображення" style={{ width: 200, height: 200, objectFit: "cover" }} />
                {!checkUpload && (
                    <Button variant="contained" color="primary" onClick={handleFileUpload}>
                      Завантажити нове зображення
                    </Button>
                )}
              </>
          )}
        </Box>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Крок 2: Заповнити поля продукту
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <TextField
                  label="1. Назва продукту"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formFields.name}
                  onChange={handleFormFieldChange}
                  required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                  label="2. Опис продукту"
                  variant="outlined"
                  fullWidth
                  name="text"
                  value={formFields.text}
                  onChange={handleFormFieldChange}
                  required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>3. Тип продукту</InputLabel>
                <Select
                    name="type"
                    value={formFields.type}
                    onChange={handleFormFieldChange}
                    label="3. Тип продукту"
                >
                  <MenuItem value="set">Cет</MenuItem>
                  <MenuItem value="rolls">Рол</MenuItem>
                  <MenuItem value="soup">Суп</MenuItem>
                  <MenuItem value="hot">Гарячий</MenuItem>
                  <MenuItem value="drinks">Напій</MenuItem>
                  <MenuItem value="adds">Додаток</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>4. Підтип для ролів</InputLabel>
                <Select
                    name="sub_type"
                    value={formFields.sub_type}
                    onChange={handleFormFieldChange}
                    label="4. Підтип для ролів"
                >
                  <MenuItem value="no"> - </MenuItem>
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
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                  label="5. Вага продукту"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="weight"
                  value={formFields.weight}
                  onChange={handleFormFieldChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                  label="6. Ціна продукту"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="price"
                  value={formFields.price}
                  onChange={handleFormFieldChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                  control={
                    <Checkbox
                        name="sale"
                        checked={formFields.sale}
                        onChange={handleFormFieldChange}
                    />
                  }
                  label="7. Акція на продукт"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                  label="8. Акційна ціна продукту"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="old_price"
                  value={formFields.old_price}
                  onChange={handleFormFieldChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                  control={
                    <Checkbox
                        name="week_sale"
                        checked={formFields.week_sale}
                        onChange={handleFormFieldChange}
                    />
                  }
                  label="9. Товар тижня"
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Оновити
              </Button>
            </Grid>
          </Grid>
        </form>

        <Toaster position="bottom-right" reverseOrder={false} />
      </Paper>
  );
};

export default Product;
