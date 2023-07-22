import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Posts from "../Components/Posts/Posts";
import options from "../testData/menuOptions.json";
import subOptions from "../testData/subMenuOptions.json";
import Menu from "../Components/Menu/Menu";
import Products from "../Components/Products/Products";
import { fetchProducts } from "../Redux/slices/products";
import { fetchPosts } from "../Redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import Delivery from "../Components/Delivery/Delivery";
import BottomMenu from "../Components/BottomMenu/BottomMenu";
import Loader from "../Components/Loader/Loader";
import styled from "styled-components";
import SubMenu from "../Components/SubMenu/SubMenu";

import { saveScrollPosition } from "../Redux/slices/position";

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

  const { scrollX, scrollY } = useSelector((state) => state.position); // Використовуємо дані про позицію прокрутки з Redux
  const [isScrolledRestored, setIsScrolledRestored] = useState(false);

  useEffect(() => {
    if (!isScrolledRestored) {
      // Відновити скрол тільки один раз після переходу
      window.scrollTo(scrollX, scrollY);
      setIsScrolledRestored(true);
    }
  }, [isScrolledRestored, scrollX, scrollY]);
  useEffect(() => {
    const handleScroll = () => {
      dispatch(
        saveScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    if (scrollX !== undefined && scrollY !== undefined) {
      window.scrollTo(scrollX, scrollY);
    }
  }, [scrollX, scrollY]);

  useEffect(() => {
    // Збережіть позицію прокрутки при покиданні сторінки
    return () => {
      dispatch(
        saveScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
      );
    };
  }, [dispatch]);

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
      const filteredItems = products.items.filter((item) => item.sale === true);
      setFilteredProducts(filteredItems);
    } else if (filter !== "sale" && filter !== "") {
      setShowSubMenu(false);
      // Оновлюємо subFilter відповідно до типу фільтрації
      setSubFilter("");
      const filteredItems = products.items.filter(
        (item) => item.type === filter
      );
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(products.items);
    }
  }, [products, filter, subFilter]);

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
