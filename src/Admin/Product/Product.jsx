import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ product }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const [checkUploadPost, setCheckUploadPost] = useState(false);
  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  const {
    name = "",
    text = "",
    type = "set",
    sale = false,
    weight = "",
    price = "",
    old_price = "",
  } = product || {};

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
    name: "",
    text: "",
    type: "set",
    sale: false,
    weight: "",
    price: "",
    old_price: "",
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
        name: formFields.name,
        price: formFields.price,
        old_price: formFields.old_price,
        sale: formFields.sale,
        text: formFields.text,
        type: formFields.type,
        weight: formFields.weight,
        week_sale: false,
      };
      console.log(productData);

      axios
        .post("/auth/products", productData)
        .then((response) => {
          console.log(response);
          notify("👍 Товар додано!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    notify("Зображення відкріплено");
  };
  const handleClearForm = (e) => {
    if (selectedFile !== null) {
      handleClearImage();
    }
    formFields.imageUrl = "";
    formFields.name = "";
    formFields.text = "";
    formFields.type = "set";
    formFields.sale = false;
    formFields.weight = "";
    formFields.price = "";
    formFields.old_price = "";
    notify("Форму очищено");
  };

  console.log(product);
  return (
    <AddProductBlock>
      <AddProductImage>
        <h3>Крок 1 завантажити зображення:</h3>
        <MiniBlock>
          <input type="file" onChange={handleFileSelect} />
          {imageUrl && <ProductImage src={imageUrl} alt="Uploaded" />}
        </MiniBlock>
        <MiniBlock>
          {!checkUpload && <Btn onClick={handleFileUpload}>Upload</Btn>}
          {imageUrl && <Btn onClick={handleClearImage}>Clear</Btn>}
        </MiniBlock>
      </AddProductImage>
      <AddProductForm onSubmit={handleFormSubmit}>
        <h3>Крок 2 завантажити поля:</h3>
        <MiniBlock>
          <Label htmlFor="name">1. Назва продукту:</Label>
          <Input
            type="text"
            name="name"
            value={formFields.name}
            onChange={handleFormFieldChange}
            placeholder={name}
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="text">2. Опис продукту:</Label>
          <Input
            type="text"
            name="text"
            placeholder={text}
            value={formFields.text}
            onChange={handleFormFieldChange}
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="type">3. Тип селектор зроби продукту:</Label>
          <Select name="type" value={type} onChange={handleFormFieldChange}>
            <option value="set">Cет</option> <option value="rolls">Рол</option>
            <option value="sushi">Суші</option>{" "}
            <option value="soup">Суп</option>
            <option value="hot">Гарячий</option>
            <option value="drinks">Напій</option>
            <option value="adds">Додаток</option>
          </Select>
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="weight">4. Вага продукту:</Label>
          <Input
            type="number"
            name="weight"
            value={formFields.weight}
            onChange={handleFormFieldChange}
            placeholder={weight}
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="price">5. Ціна продукту:</Label>
          <Input
            type="number"
            name="price"
            value={formFields.price}
            onChange={handleFormFieldChange}
            placeholder={price}
          />
        </MiniBlock>
        <br />
        <br />
        <br />
        <MiniBlock>
          <Label htmlFor="sale">6. Акція на продукт:</Label>
          <Input
            type="checkbox"
            name="sale"
            value={sale}
            onChange={handleFormFieldChange}
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="old_price">7. Акційна ціна продукту:</Label>
          <Input
            type="number"
            name="old_price"
            value={formFields.old_price}
            onChange={handleFormFieldChange}
            placeholder="Акційна ціна продукту"
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

const Th = styled.th`
  border: 1px solid violet;
  margin: 20px;
  &:hover {
    color: #007bff;
  }
`;

const Td = styled.td`
  width: 150px;
`;

const Btn = styled.button`
  &:hover {
    color: #007bff;
  }
`;

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

export default Product;
