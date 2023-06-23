import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";
import styled, { css } from "styled-components";

import { uploadProductImG, createProduct } from "../../Redux/slices/products";
const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const [checkUploadPost, setCheckUploadPost] = useState(false);

  const [isCheckedSale, setIsCheckedSale] = useState(false);
  const handleInputChange = () => {
    setIsCheckedSale(!isCheckedSale);
  };
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
      .post("/upload/products", formData)
      .then((response) => {
        setImageUrl(response.data.imageUrl);
        setImageProductUrl(response.data.url);
        setCheckUpload(true);
        notify("Зображення завантажено");
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
    sale: isCheckedSale,
    weight: "",
    price: "",
    old_price: "",
    week_sale: false,
  });
  const handleFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // if (fieldName === "sale") console.log(fieldValue);
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
        sale: isCheckedSale,
        text: formFields.text,
        type: formFields.type,
        weight: formFields.weight,
        week_sale: false,
      };
      // console.log(productData);

      axios
        .post("/auth/products", productData)
        .then((response) => {
          // console.log(response);
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
    formFields.sale = setIsCheckedSale(false);
    formFields.weight = "";
    formFields.price = "";
    formFields.old_price = "";
    formFields.week_sale = false;

    notify("Форму очищено");
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
            placeholder="Назва продукту"
            value={formFields.name}
            onChange={handleFormFieldChange}
            required
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="text">2. Опис продукту:</Label>
          <Input
            type="text"
            name="text"
            placeholder="Опис продукту"
            value={formFields.text}
            onChange={handleFormFieldChange}
            required
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="type">3. Тип селектор зроби продукту:</Label>
          <Select
            name="type"
            value={formFields.type}
            onChange={handleFormFieldChange}>
            <option value="set">Cет</option>
            <option value="rolls">Рол</option>
            <option value="sushi">Суші</option>
            <option value="soup">Суп</option>
            <option value="hot">Гарячий</option>
            <option value="drink">Напій</option>
            <option value="add">Додаток</option>
            <option value="appetizer">Закуски</option>
          </Select>
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="weight">4. Вага продукту:</Label>
          <Input
            type="number"
            name="weight"
            value={formFields.weight}
            onChange={handleFormFieldChange}
            placeholder="Вага продукту"
            required
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="price">5. Ціна продукту:</Label>
          <Input
            type="number"
            name="price"
            value={formFields.price}
            onChange={handleFormFieldChange}
            placeholder="Ціна продукту"
            required
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
            checked={isCheckedSale}
            value={isCheckedSale}
            onClick={handleInputChange}
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

export default AddProduct;
