import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../src/Utils/axios";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "../../Utils/baseUrl";

import { updateProduct } from "../../Redux/slices/products";

const Product = ({ product, setUpdate, update }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [imageProductUrl, setImageProductUrl] = useState(product.imageUrl);
  const [checkUpload, setCheckUpload] = useState(false);

  const [currentImage, setCurrentImage] = useState(product.imageUrl);
  const [newImage, setNewImage] = useState("");

  const handleNewImageChangeA = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewImage(reader.result);
    };

    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
      reader.readAsDataURL(file);
      handleFileSelect(file);
    }
  };

  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  const handleFileSelect = (file) => {
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
        console.log(response);
        setImageUrl(response.data.imageUrl);
        setImageProductUrl(response.data.url);

        notify("Зображення звантажено ！");
        setCheckUpload(true);
      })
      .catch((error) => {
        console.log(error);
        notify("Зображення не звантажено ‼️ Розмір файлу до 5Мб");
        setCheckUpload(false);
      });
  };

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
  const handleFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [fieldName]: fieldValue,
    }));
  };
  const handleFormSubmit = (event, id) => {
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
    console.log({ id: product._id, productData: productData });

    dispatch(updateProduct({ id: productData._id, productData: productData }))
      .then((data) => {
        notify("👍 Продукт оновлено!");
        setUpdate(!update);
      })
      .catch((error) => {
        console.log(error);
        notify("❌ Помилка при оновленні продукту");
      });
  };
  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    notify("Зображення відкріплено");
  };

  return (
    <AddProductBlock>
      <AddProductImage>
        <h3>Крок 1 завантажити зображення:</h3>
        <MiniBlockImage>
          <ImageAddBlock>
            {!checkUpload && (
              <>
                <ProductImage
                  src={`${baseUrl}${currentImage}`}
                  alt="Зображення"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleNewImageChangeA}
                />
              </>
            )}
          </ImageAddBlock>

          {newImage && (
            <ImageAddBlock>
              <ProductImage src={newImage} alt="Нове зображення" />

              {!checkUpload && (
                <button onClick={handleFileUpload}>
                  Завантажити нове зображення
                </button>
              )}
            </ImageAddBlock>
          )}
        </MiniBlockImage>
        <MiniBlock></MiniBlock>
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
          <Label htmlFor="type">3. Тип продукту:</Label>
          <Select
            name="type"
            value={formFields.type}
            onChange={handleFormFieldChange}>
            <option value="set">Cет</option> <option value="rolls">Рол</option>
            <option value="soup">Суп</option>
            <option value="hot">Гарячий</option>
            <option value="drinks">Напій</option>
            <option value="adds">Додаток</option>
          </Select>
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="sub_type">
            4. Підтип <u>для ролів</u>:
          </Label>
          <Select
            name="sub_type"
            value={formFields.sub_type}
            onChange={handleFormFieldChange}>
            <option value="no"> - </option>
            <option value="philadelphia">Філадельфії</option>
            <option value="california">Каліфорнії</option>
            <option value="inkuri">Ікури</option>
            <option value="firm">Фірмові</option>
            <option value="dragons">Дракони</option>
            <option value="alaska">Аляска</option>
            <option value="futomaki">Футомакі</option>
            <option value="maki">Макі</option>
          </Select>
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="weight">5. Вага продукту:</Label>
          <Input
            type="number"
            name="weight"
            value={formFields.weight}
            onChange={handleFormFieldChange}
            placeholder="Вага продукту"
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="price">6. Ціна продукту:</Label>
          <Input
            type="number"
            name="price"
            value={formFields.price}
            onChange={handleFormFieldChange}
            placeholder="Ціна продукту"
          />
        </MiniBlock>
        <br />
        <br />
        <br />
        <MiniBlock>
          <Label htmlFor="sale">7. Акція на продукт:</Label>

          <Input
            type="checkbox"
            name="sale"
            checked={formFields.sale}
            onChange={handleFormFieldChange}
          />
        </MiniBlock>

        <MiniBlock>
          <Label htmlFor="old_price">8. Акційна ціна продукту:</Label>
          <Input
            type="number"
            name="old_price"
            value={formFields.old_price}
            onChange={handleFormFieldChange}
            placeholder="Акційна ціна продукту"
          />
        </MiniBlock>
        <MiniBlock>
          <Btn className="btn-create">Оновити</Btn>
        </MiniBlock>
        <br />
        <br />
        <br />
        <MiniBlockRed>
          <Label htmlFor="week_sale">9. Товар тижня:</Label>

          <Input
            type="checkbox"
            name="week_sale"
            checked={formFields.week_sale}
            onChange={handleFormFieldChange}
          />
        </MiniBlockRed>
      </AddProductForm>
      <Toaster position="bottom-right" reverseOrder={false} />
    </AddProductBlock>
  );
};

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

const MiniBlockImage = styled.div`
  display: flex;
  margin: 10px 50px;
  align-items: center;
  justify-content: center;
  width: 80vw;
`;

const ImageAddBlock = styled.div`
  display: inline-block;
  margin: 10px 50px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw;
`;

const MiniBlockRed = styled.div`
  display: flex;
  margin: 10px 50px;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
  border: 1px solid red;
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
