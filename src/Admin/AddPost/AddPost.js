import { useState } from "react";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Container,
  Input as MuiInput,
  styled
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

const AddPost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const notify = (text) => toast(text);

  const [formFields, setFormFields] = useState({
    title: "",
    text: "",
  });

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
        .post("/upload/posts", formData)
        .then((response) => {
          setImageUrl(response.data.imageUrl);
          setImageProductUrl(response.data.url);
          setCheckUpload(true);
        })
        .catch((error) => {
          console.log(error);
          setCheckUpload(false);
        });
  };

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (imageProductUrl === null) {
      return notify("‼ Завантажте зображення!");
    }

    const productData = {
      imageUrl: imageProductUrl,
      title: formFields.title,
      text: formFields.text,
    };

    axios
        .post("/auth/posts", productData)
        .then(() => {
          handleClearImage();
          notify("👍 Пост додано!");
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    setImageProductUrl(null);
    setCheckUpload(false);
    notify("Зображення відкріплено");
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    if (selectedFile !== null) {
      handleClearImage();
    }
    setFormFields({
      title: "",
      text: "",
    });
    notify("Форму очищено ‼️");
  };

  return (
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 3, my: 2 }}>
          {/* Image Upload Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Крок 1: завантажити зображення
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <VisuallyHiddenInput
                  type="file"
                  id="file-upload"
                  onChange={handleFileSelect}
              />
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <label htmlFor="file-upload">
                  <Button
                      variant="contained"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                  >
                    Вибрати файл
                  </Button>
                </label>

                {!checkUpload && selectedFile && (
                    <Button
                        variant="contained"
                        onClick={handleFileUpload}
                        startIcon={<SaveIcon />}
                    >
                      Завантажити
                    </Button>
                )}

                {imageUrl && (
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleClearImage}
                        startIcon={<DeleteIcon />}
                    >
                      Очистити
                    </Button>
                )}
              </Box>

              {imageUrl && (
                  <Box
                      component="img"
                      src={imageUrl}
                      alt="Uploaded"
                      sx={{
                        width: 200,
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                  />
              )}
            </Box>
          </Box>

          {/* Form Section */}
          <Box component="form" onSubmit={handleFormSubmit}>
            <Typography variant="h6" gutterBottom>
              Крок 2: заповнити поля
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                  fullWidth
                  label="Назва поста"
                  name="title"
                  value={formFields.title}
                  onChange={handleFormFieldChange}
                  required
                  variant="outlined"
              />

              <TextField
                  fullWidth
                  label="Текст поста"
                  name="text"
                  value={formFields.text}
                  onChange={handleFormFieldChange}
                  required
                  variant="outlined"
                  multiline
                  rows={4}
              />

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                >
                  Створити
                </Button>

                <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    onClick={handleClearForm}
                    startIcon={<ClearIcon />}
                >
                  Очистити
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Toaster position="bottom-right" reverseOrder={false} />
      </Container>
  );
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default AddPost;