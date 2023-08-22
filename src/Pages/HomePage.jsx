import React, { useState, useEffect, useLayoutEffect } from "react";
import Layout from "../Layout/Layout";
import Posts from "../Components/Posts/Posts";
import options from "../testData/menuOptions.json";
import subOptions from "../testData/subMenuOptions.json";
import Menu from "../Components/Menu/Menu";
import Products from "../Components/Products/Products";
import { fetchProducts } from "../Redux/slices/products";
import { fetchPosts } from "../Redux/slices/posts"; // Замініть цей імпорт на ваш Redux slice, який містить функцію saveScrollPosition
import { useDispatch, useSelector } from "react-redux";
import Delivery from "../Components/Delivery/Delivery";
import BottomMenu from "../Components/BottomMenu/BottomMenu";
import Loader from "../Components/Loader/Loader";
import styled from "styled-components";
import SubMenu from "../Components/SubMenu/SubMenu";

import Test from "../Components/Test";

const HomePage = () => {
  const [filter, setFilter] = useState(localStorage.getItem("filter") || "");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const posts = useSelector((state) => state.posts.posts);
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subFilter, setSubFilter] = useState(
    localStorage.getItem("sub_filter") || ""
  );

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilter(localStorage.getItem("filter") || "");
    setSubFilter(localStorage.getItem("sub_filter") || "");
    setSearchQuery(localStorage.getItem("searchQuery") || "");
  }, []);

  useEffect(() => {
    const applySearchFilter = (query) => {
      if (query === "") {
        setFilteredProducts(products.items);
      } else {
        const filteredItemsByNameAndText = products.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.text.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filteredItemsByNameAndText);
      }
    };

    applySearchFilter(searchQuery);
  }, [products, searchQuery]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
    localStorage.setItem("sub_filter", subFilter);
    localStorage.setItem("searchQuery", searchQuery);
  }, [filter, searchQuery, subFilter]);

  const setFilterOption = (type) => {
    setFilter(type);
  };

  const setSubFilterOption = (type) => {
    setSubFilter(type);
  };

  useEffect(() => {
    if (searchQuery === "") {
      if (filter === "rolls") {
        setShowSubMenu(true);
        const filteredItems = products.items.filter(
          (item) => item.type === filter
        );
        const subFilteredItems = filteredItems.filter(
          (item) => item.sub_type === subFilter
        );
        setFilteredProducts(subFilteredItems);
      } else if (filter === "sale") {
        setShowSubMenu(false);
        const filteredItems = products.items.filter(
          (item) => item.sale === true
        );
        setFilteredProducts(filteredItems);
      } else if (filter !== "sale" && filter !== "") {
        setShowSubMenu(false);
        setSubFilter("");
        const filteredItems = products.items.filter(
          (item) => item.type === filter
        );
        setFilteredProducts(filteredItems);
      } else {
        setFilteredProducts(products.items);
      }
    } else {
      // Відображення всіх елементів, що відповідають критеріям пошуку
      const filteredItemsByNameAndText = products.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filteredItemsByNameAndText);
    }
  }, [products, filter, subFilter, searchQuery]);

  return (
    <>
      <Layout>
        {products.status === "loaded" && (
          <Posts posts={Array.isArray(posts) ? posts : []} />
        )}
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
            showSubMenu={showSubMenu}
          />
        )}

        <SearchBlock>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Пошук за назвою та складом"
          />
        </SearchBlock>
        {/* <Test></Test> */}
        {products.status === "loading" && <Loader />}
        {products.status === "loaded" && (
          <Products
            products={Array.isArray(filteredProducts) ? filteredProducts : []}
          />
        )}

        <Delivery></Delivery>

        <BottomMenu setFilterOption={setFilterOption} />
      </Layout>
    </>
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
    border-bottom: 1px solid #ff4700;
  }

  &:active {
    border: none;
    background-color: lightblue;
    border-bottom: 1px solid orange;
  }
`;

export default HomePage;
