import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import {
  fetchRemovePost,
  fetchRemovePostImage,
} from "../../Redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostTable = ({ posts }) => {
  const dispatch = useDispatch();

  const onHandleDeleteProduct = (id, url) => {
    const imageName = url.split("/").pop();
    const confirmed = window.confirm(`Ви дійсно хочете видалити пост?`);
    if (confirmed) {
      const result = dispatch(fetchRemovePost(id));
      dispatch(fetchRemovePostImage(imageName));
      // dispatch(fetchRemoveProduct(id));
      console.log(result);
    }
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(posts.items);
  }, [posts]);

  const handleSetOption = (type) => {};
  console.log(items);
  return (
    <>
      <Table>
        <TableHeader>
          <TrHead>
            <Th>Пости</Th>
          </TrHead>
        </TableHeader>
        <tbody>
          <TrHead>
            <Td>Номер</Td>
            <Td>Зображення</Td>
            <Td>Назва</Td>
            <Td>Текст</Td>
            <Td>Кількість переглядів</Td>
            <Td>Видалити</Td>
          </TrHead>
          {items.map((item, index) => (
            <Tr key={index}>
              <Td>{index + 1}.</Td>
              <Td>
                <Image src={`${baseUrl}${item.imageUrl}`} alt={item.title} />
              </Td>
              {/* {baseUrl}${item.imageUrl} */}
              <Td>{item.title}</Td>
              <Td>{item.text}</Td>
              <Td>{item.viewsCount}</Td>
              <Td>
                <Button
                  onClick={() => {
                    onHandleDeleteProduct(item._id, item.imageUrl);
                  }}>
                  Видалити
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TableHeader = styled.thead`
  margin: 20px 0px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TrHead = styled.tr`
  display: flex;
  align-items: center;
`;

const Th = styled.th`
  border: 1px solid violet;
  margin: 20px;
  &:hover {
    color: #007bff;
  }
`;

const Td = styled.td`
  width: 150px;
  overflow-x: scroll;
  height: 80px;
`;

const Button = styled.button`
  &:hover {
    color: #007bff;
  }
`;

export default PostTable;
