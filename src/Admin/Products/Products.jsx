import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import AddProduct from "../AddProduct/AddProduct";
import adminMenuOptions from "../../testData/adminMenuOption.json";
import ProductsTable from "../ProductsTable/ProductsTable";
import Exel from "../Exel/Exel";
import { useDispatch } from "react-redux";
import SelectBlock from "../Select/Select";
import selectOptions from "../../testData/selectOptions.json";

import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Products = ({ products }) => {
  const [activeBlocks, setActiveBlocks] = useState([false, false, false]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [underlined, setUnderlined] = useState(0);
  const [exelName, setExelName] = useState("Всі");

  const toggleBlock = (blockNumber) => {
    setActiveBlocks((prevActiveBlocks) => {
      const newActiveBlocks = [...prevActiveBlocks];
      newActiveBlocks[blockNumber] = !prevActiveBlocks[blockNumber];
      return newActiveBlocks;
    });
  };

  const handlerUnderlined = (index, option) => {
    setUnderlined(index);
    setFilter(option.type);
    setExelName(option.name);
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
    } else if (filter === "sale") {
      const filteredItems = products.filter((item) => item.sale === true);
      setFilteredProducts(filteredItems);
    } else if (filter === "week_sale") {
      const filteredItems = products.filter((item) => item.week_sale === true);
      setFilteredProducts(filteredItems);
    } else if (filter !== "") {
      const filteredItems = products.filter((item) => item.type === filter);
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(products);
    }
  }, [filter]);

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

  const handleSelectedOption = (value) => {
    setSort(value);
  };

  return (
    <Container>
      <LabelBlock>
        <Label onClick={() => toggleBlock(0)}>Додати товар</Label>
        <Label onClick={() => toggleBlock(1)}>Всі товари</Label>
      </LabelBlock>

      {activeBlocks[0] && (
        <Block $active={activeBlocks[0]}>
          <AddProduct />
        </Block>
      )}

      {activeBlocks[1] && (
        <Block $active={activeBlocks[1]}>
          <Exel products={filteredProducts} name={exelName} />
          <SelectBlock
            selectOptions={selectOptions}
            handleSelectedOption={handleSelectedOption}
          />
          <Header>
            {adminMenuOptions.map((option, index) => (
              <Link
                key={index}
                isUnderlined={index === underlined}
                onClick={() => {
                  handlerUnderlined(index, option);
                }}>
                {option.name}
              </Link>
            ))}
          </Header>
          <Table>
            <Thead>
              <Tr>
                <Th>Продукти</Th>
              </Tr>
            </Thead>

            <ProductsTable products={filteredProducts} />
          </Table>
        </Block>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: grey;
  min-height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
  min-height: 50vh;
  width: 100vw;
  border-bottom: 1px solid black;
  display: none;
  opacity: 0;
  transition: opacity 3s ease;

  ${(props) =>
    props.$active &&
    css`
      display: block;
      transition: opacity 3s ease;
      opacity: 1;
    `}
`;

const LabelBlock = styled.div`
  margin-top: 10px;
  font-size: 24px;
`;

const Label = styled.button`
  color: black;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
`;

const TableHeader = styled.thead`
  margin: 20px 0px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  width: 100vw;
  padding: 0 10px;
`;

const Link = styled.div`
  margin: 30px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }

  ${(props) =>
    props.isUnderlined &&
    css`
      font-weight: 800;
      text-decoration: underline;
      color: red;
    `}
`;

export default Products;
