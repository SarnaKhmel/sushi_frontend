import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";
import styled, { css } from "styled-components";

import { uploadProductImG, createProduct } from "../../Redux/slices/products";

const AddPost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const [checkUploadPost, setCheckUploadPost] = useState(false);
  const dispatch = useDispatch();
  const notify = (text) => toast(text);

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
        // console.log(response);
        setImageUrl(response.data.imageUrl);
        setImageProductUrl(response.data.url);
        setCheckUpload(true);
      })
      .catch((error) => {
        console.log(error);
        setCheckUpload(false);
      });
  };
  const [formFields, setFormFields] = useState({
    title: "",
    text: "",
  });
  const handleFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [fieldName]: fieldValue,
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (imageProductUrl === null) {
      return notify("‼ Завантажте зображення!");
    } else {
      const productData = {
        imageUrl: imageProductUrl,
        title: formFields.title,
        text: formFields.text,
      };
      axios
        .post("/auth/posts", productData)
        .then((response) => {
          handleClearImage();
          notify("👍 Пост додано!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
    <AddProductBlock>
      <AddProductImage>
        <h3>Крок 1 завантажити зображення:</h3>
        <MiniBlock>
          <input type="file" onChange={handleFileSelect} />
          {imageUrl && <ProductImage src={imageUrl} alt="Uploaded" />}
        </MiniBlock>
        <MiniBlock>
          {!checkUpload && <Btn onClick={handleFileUpload}>Завантажити</Btn>}
          {imageUrl && <Btn onClick={handleClearImage}>Очистити</Btn>}
        </MiniBlock>
      </AddProductImage>
      <AddProductForm onSubmit={handleFormSubmit}>
        <h3>Крок 2 завантажити поля:</h3>
        <MiniBlock>
          <Label htmlFor="name">1. Назва поста:</Label>
          <Input
            type="text"
            name="title"
            placeholder="Назва поста"
            value={formFields.title}
            onChange={handleFormFieldChange}
            required
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="text">2. Текст поста:</Label>
          <Input
            type="text"
            name="text"
            placeholder="Опис поста"
            value={formFields.text}
            onChange={handleFormFieldChange}
            required
          />
        </MiniBlock>
        <MiniBlock>
          <Btn className="btn-create">Створити</Btn>
          <Btn className="btn-del" type="reset" onClick={handleClearForm}>
            Очистити
          </Btn>
        </MiniBlock>
      </AddProductForm>
      <Toaster position="bottom-right" reverseOrder={false} />
    </AddProductBlock>
  );
};

const AddProductBlock = styled.div`
  margin: 20px 50px;
`;
const AddProductImage = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AddProductForm = styled.form`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MiniBlock = styled.div`
  display: flex;
  margin: 10px 50px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
`;

const ProductImage = styled.img`
  height: 200px;
  width: 200px;
`;

const LabelBlock = styled.div``;
const Label = styled.label`
  width: 400px;
  min-width: 300px;
  margin-right: 10px;
`;
const Input = styled.input`
  width: 100%;
`;
const Select = styled.select`
  width: 100%;
`;

const Text = styled.p``;
const Btn = styled.button`
  &:hover {
    color: #007bff;
  }
`;

export default AddPost;
