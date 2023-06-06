import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../axios";
import { notify, Toast } from "../../../utils/Toast";
const AddProducts = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProductUrl, setImageProductUrl] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);
  const [checkUploadPost, setCheckUploadPost] = useState(false);
  const dispatch = useDispatch();
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
      const newName = `${Date.now()}_${file.name}`;
      const renamedFile = new File([file], newName, { type: file.type });
      setSelectedFile(renamedFile);
      setImageUrl(URL.createObjectURL(renamedFile));
      notify.success("Зображення вибрано");
    } else {
      notify.error("Please select a valid image file (png, jpg, jpeg)");
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
      return notify.error("Завантажте зображення!");
    } else {
      const productData = {
        imageUrl: imageProductUrl,
        name: formFields.name,
        price: formFields.price,
        sale: formFields.sale,
        text: formFields.text,
        type: formFields.type,
        week_sale: false,
      };
      console.log(productData);
    }
  };
  const handleClearImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    notify.success("Зображення відкріплено");
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
    notify.success("Форму очищено");
  };
  return (
    <div className="add-product">
      {" "}
      <div>
        {" "}
        <h3>Крок 1 завантажити зображення:</h3>{" "}
        <input type="file" onChange={handleFileSelect} />{" "}
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}{" "}
        {!checkUpload && <button onClick={handleFileUpload}>Upload</button>}{" "}
        {imageUrl && <button onClick={handleClearImage}>Clear</button>}{" "}
      </div>{" "}
      <form onSubmit={handleFormSubmit}>
        {" "}
        <h3>Крок 2 завантажити поля:</h3>{" "}
        <label htmlFor="name">1. Назва продукту:</label>{" "}
        <input
          type="text"
          name="name"
          placeholder="Назва продукту"
          value={formFields.name}
          onChange={handleFormFieldChange}
        />{" "}
        <label htmlFor="text">2. Опис продукту:</label>{" "}
        <input
          type="text"
          name="text"
          placeholder="Опис продукту"
          value={formFields.text}
          onChange={handleFormFieldChange}
        />{" "}
        <label htmlFor="type">3. Тип селектор зроби продукту:</label>{" "}
        <select
          name="type"
          value={formFields.type}
          onChange={handleFormFieldChange}>
          {" "}
          <option value="set">Cет</option> <option value="rolls">Рол</option>{" "}
          <option value="sushi">Суші</option> <option value="soup">Суп</option>{" "}
          <option value="hot">Гарячий</option>{" "}
          <option value="drinks">Напій</option>{" "}
          <option value="adds">Додаток</option>{" "}
        </select>{" "}
        <label htmlFor="sale">4. Акція на продукт:</label>{" "}
        <input
          type="checkbox"
          name="sale"
          value={formFields.sale}
          onChange={handleFormFieldChange}
        />{" "}
        <label htmlFor="weight">6. Вага продукту:</label>{" "}
        <input
          type="number"
          name="weight"
          value={formFields.weight}
          onChange={handleFormFieldChange}
        />{" "}
        <label htmlFor="price">7. Ціна продукту:</label>{" "}
        <input
          type="number"
          name="price"
          value={formFields.price}
          onChange={handleFormFieldChange}
        />{" "}
        <button className="btn-create">Створити</button>{" "}
        <button className="btn-del" type="reset" onClick={handleClearForm}>
          {" "}
          Очистити{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};
export default AddProducts;
