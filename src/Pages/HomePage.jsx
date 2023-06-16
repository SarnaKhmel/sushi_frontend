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
import { fetchPosts } from "../Redux/slices/posts";

import { useDispatch, useSelector } from "react-redux";

import Delivery from "../Components/Delivery/Delivery";
const HomePage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  let posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log(posts);

  const setFilterOption = (type) => {
    setFilter(type);
  };

  const handleSelectedOption = (value) => {
    setSort(value);
  };

  return (
    <div>
      <Layout>
        <Posts posts={posts.items} />
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
        <Delivery></Delivery>
      </Layout>
    </div>
  );
};

export default HomePage;
