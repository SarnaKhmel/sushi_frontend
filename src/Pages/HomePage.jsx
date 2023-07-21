import React from "react";
import Layout from "../Layout/Layout";

import Posts from "../Components/Posts/Posts";
// import images from "../testData/posts.json";

import options from "../testData/menuOptions.json";
import subOptions from "../testData/subMenuOptions.json";

import Menu from "../Components/Menu/Menu";

// import selectOptions from "../testData/selectOptions.json";
// import SelectBlock from "../Components/Select/Select";

import Products from "../Components/Products/Products";

import { useState, useEffect } from "react";

import { fetchProducts } from "../Redux/slices/products";
import { fetchPosts } from "../Redux/slices/posts";

import { useDispatch, useSelector } from "react-redux";

import Delivery from "../Components/Delivery/Delivery";

import BottomMenu from "../Components/BottomMenu/BottomMenu";

import Loader from "../Components/Loader/Loader";

import styled from "styled-components";

import SubMenu from "../Components/SubMenu/SubMenu";

const HomePage = () => {
  const [filter, setFilter] = useState("");
  // Сортування залишено якщо Тарас захоче його повернути.
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  let posts = useSelector((state) => state.posts.posts);

  const [searchQuery, setSearchQuery] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subFilter, setSubFilter] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (filter === "rolls") {
      setShowSubMenu(true);
      const filteredItems = products.items.filter(
        (item) => item.type === filter
      );
      console.log(filteredItems);
      const subFilteredItems = filteredItems.filter(
        (item) => item.sub_type === subFilter
      );
      console.log(subFilteredItems);
      setFilteredProducts(subFilteredItems);
    } else if (filter === "sale") {
      setShowSubMenu(false);
      const filteredItems = products.items.filter((item) => item.sale === true);
      setFilteredProducts(filteredItems);
    } else if (filter !== "sale" && filter !== "") {
      setShowSubMenu(false);
      const filteredItems = products.items.filter(
        (item) => item.type === filter
      );
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(products.items);
    }
  }, [products, filter, subFilter]);

  // useEffect(() => {
  //   switch (sort) {
  //     case "price-up":
  //       setFilteredProducts(
  //         [...filteredProducts].sort((a, b) => a.price - b.price)
  //       );
  //       break;
  //     case "price-down":
  //       setFilteredProducts(
  //         [...filteredProducts].sort((a, b) => b.price - a.price)
  //       );
  //       break;
  //     case "popular-up":
  //       setFilteredProducts(
  //         [...filteredProducts].sort((a, b) => b.viewsCount - a.viewsCount)
  //       );
  //       break;
  //     case "weight-up":
  //       setFilteredProducts(
  //         [...filteredProducts].sort((a, b) => a.weight - b.weight)
  //       );
  //       break;
  //     case "weight-down":
  //       setFilteredProducts(
  //         [...filteredProducts].sort((a, b) => b.weight - a.weight)
  //       );
  //       break;
  //     default:
  //       setFilteredProducts(filteredProducts);
  //       break;
  //   }
  // }, [sort]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products.items);
    } else {
      const filteredItems = products.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filteredItems);
    }
  }, [searchQuery, products.items]);

  const setFilterOption = (type) => {
    setFilter(type);
    // console.log(type);
  };
  const setSubFilterOption = (type) => {
    setSubFilter(type);
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

        {showSubMenu && (
          <SubMenu
            title=""
            options={subOptions}
            setFilterOption={setSubFilterOption}
          />
        )}

        {/* <SelectBlock
          selectOptions={selectOptions}
          handleSelectedOption={handleSelectedOption}
        /> */}
        <SearchBlock>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Пошук за назвою"
          />
        </SearchBlock>

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

const SearchBlock = styled.div`
  width: 100vw;
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Input = styled.input`
  margin-right: 10vw;
  color: white;
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid white;
  height: 30px;
  width: 300px;

  &:hover {
    border: none;
    cursor: pointer;
    border-bottom: 1px solid orange;
  }

  &:active {
    border: none;
    background-color: lightblue;
    border-bottom: 1px solid orange;
  }
`;

export default HomePage;
