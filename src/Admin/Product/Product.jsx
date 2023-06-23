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
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);

  //test

  const [currentImage, setCurrentImage] = useState(product.imageUrl);
  const [newImage, setNewImage] = useState("");

  const handleNewImageChangeA = (event) => {
    // Виконується при зміні значення в полі вибору нового зображення
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Оновлюємо стан компонента з новим зображенням
      setNewImage(reader.result);
    };

    if (file) {
      // Зчитуємо вибране зображення
      reader.readAsDataURL(file);
    }
    handleFileSelect(file);
  };

  //
  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  // console.log(weekSale);
  // console.log("_id", product._id);
  const handleFileSelect = (file) => {
    //const file = event.target.files[0];
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
        notify("Зображення звантажено");
        setCheckUpload(true);
      })
      .catch((error) => {
        console.log(error);
        setCheckUpload(false);
      });
  };

  const [formFields, setFormFields] = useState({
    _id: product._id,
    name: product.name,
    text: product.text,
    type: product.type,
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
    // if (fieldName === "sale") {
    //   setFormFields((prevFormFields) => ({
    //     ...prevFormFields,
    //     sale: !prevFormFields.sale,
    //   }));
    // }
    // if (fieldName === "week_sale") {
    //   setFormFields((prevFormFields) => ({
    //     ...prevFormFields,
    //     week_sale: !prevFormFields.week_sale,
    //   }));
    // }

    console.log(fieldName, fieldValue);

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [fieldName]: fieldValue,
    }));
  };
  const handleFormSubmit = (event, id) => {
    event.preventDefault();

    const productData = {
      _id: product._id,
      imageUrl: product.imageUrl,
      name: formFields.name,
      price: formFields.price,
      old_price: formFields.old_price,
      sale: formFields.sale,
      text: formFields.text,
      type: formFields.type,
      weight: formFields.weight,
      week_sale: formFields.week_sale,
    };
    // console.log({ id: product._id, productData: productData });

    dispatch(updateProduct({ id: productData._id, productData: productData }))
      .then((data) => {
        notify("👍 Продукт оновлено!");
        setUpdate(!update);
      })
      .catch((error) => {
        console.log(error);
        notify("❌ Помилка при оновленні продукту");
      });

    // axios
    //   .post("/auth/products", productData)
    //   .then((response) => {
    //     console.log(response);
    //     notify("👍 Товар додано!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
    formFields.weight = "";
    formFields.price = "";
    formFields.old_price = "";
    notify("Форму очищено");
  };

  // console.log(product);
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
          <Label htmlFor="type">3. Тип селектор зроби продукту:</Label>
          <Select
            name="type"
            value={formFields.type}
            onChange={handleFormFieldChange}>
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
            placeholder="Вага продукту"
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
            checked={formFields.sale}
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
          <Btn className="btn-create">Оновити</Btn>
        </MiniBlock>
        <br />
        <br />
        <br />
        <MiniBlockRed>
          <Label htmlFor="week_sale">8. Товар тижня:</Label>

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
