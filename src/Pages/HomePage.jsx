import React from "react";
import Layout from "../Layout/Layout";

import Posts from "../Components/Posts/Posts";
import images from "../testData/posts.json";

import options from "../testData/menuOptions.json";
import Menu from "../Components/Menu/Menu";

import selectOptions from "../testData/selectOptions.json";
import SelectBlock from "../Components/Select/Select";

import Products from "../Components/Products/Products";

import { useState, useEffect } from "react";

import { fetchProducts } from "../Redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
const HomePage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [prodRedux, setprodRedux] = useState([]);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);
  const stateTest = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(stateTest);

  const setFilterOption = (type) => {
    setFilter(type);
  };

  const handleSelectedOption = (value) => {
    setSort(value);
  };

  return (
    <div>
      <Layout>
        <Posts images={images} />
        <Menu
          title="Меню"
          options={options}
          setFilterOption={setFilterOption}
        />
        <SelectBlock
          selectOptions={selectOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <Products categories={filter} sorting={sort} />
      </Layout>
    </div>
  );
};

export default HomePage;
