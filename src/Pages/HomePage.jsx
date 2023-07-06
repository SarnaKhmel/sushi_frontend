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

import BottomMenu from "../Components/BottomMenu/BottomMenu";

import Loader from "../Components/Loader/Loader";
const HomePage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  let posts = useSelector((state) => state.posts.posts);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (filter === "sale") {
      const filteredItems = products.items.filter((item) => item.sale === true);
      setFilteredProducts(filteredItems);
    } else if (filter !== "sale" && filter !== "") {
      const filteredItems = products.items.filter(
        (item) => item.type === filter
      );
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(products.items);
    }
  }, [products, filter]);

  useEffect(() => {
    switch (sort) {
      case "price-up":
        setFilteredProducts(
          [...filteredProducts].sort((a, b) => a.price - b.price)
        );
        break;
      case "price-down":
        setFilteredProducts(
          [...filteredProducts].sort((a, b) => b.price - a.price)
        );
        break;
      case "popular-up":
        setFilteredProducts(
          [...filteredProducts].sort((a, b) => b.viewsCount - a.viewsCount)
        );
        break;
      case "weight-up":
        setFilteredProducts(
          [...filteredProducts].sort((a, b) => a.weight - b.weight)
        );
        break;
      case "weight-down":
        setFilteredProducts(
          [...filteredProducts].sort((a, b) => b.weight - a.weight)
        );
        break;
      default:
        setFilteredProducts(filteredProducts);
        break;
    }
  }, [sort]);

  const setFilterOption = (type) => {
    setFilter(type);
    // console.log(type);
  };

  // const handleSelectedOption = (value) => {
  //   setSort(value);
  //   // console.log(value);
  // };

  return (
    <div>
      <Layout>
        <Posts posts={posts.items} />
        <Menu
          title="Меню"
          options={options}
          setFilterOption={setFilterOption}
        />
        {/* <SelectBlock
          selectOptions={selectOptions}
          handleSelectedOption={handleSelectedOption}
        /> */}
        {products.status === "loading" && <Loader />}
        {products.status === "loaded" && (
          <Products
            categories={filter}
            sorting={sort}
            products={filteredProducts}
          />
        )}
        <Delivery></Delivery>
        <BottomMenu setFilterOption={setFilterOption} />
      </Layout>
    </div>
  );
};

export default HomePage;
