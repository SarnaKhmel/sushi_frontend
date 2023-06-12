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

  // const [prodRedux, setprodRedux] = useState([]);

  // let productsAPI = useSelector((state) => state.products.products);
  // console.log(productsAPI);
  // const dispatch = useDispatch();
  // const { status, error } = useSelector((state) => state.products);
  // const stateTest = useSelector((state) => state.products.products);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  //console.log("stateTest", stateTest);

  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products.items);

  const setFilterOption = (type) => {
    setFilter(type);
  };

  const handleSelectedOption = (value) => {
    setSort(value);
  };

  return (
    <div>
      <Layout>
        <Posts posts={images} />
        <Menu
          title="Меню"
          options={options}
          setFilterOption={setFilterOption}
        />
        <SelectBlock
          selectOptions={selectOptions}
          handleSelectedOption={handleSelectedOption}
        />
        {products.status === "loading" && <>Loading...</>}
        {products.status === "loaded" && (
          <Products
            categories={filter}
            sorting={sort}
            products={products.items}
          />
        )}
      </Layout>
    </div>
  );
};

export default HomePage;
