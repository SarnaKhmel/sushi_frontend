import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../Utils/baseUrl";
import { fetchRemovePost, fetchRemovePostImage } from "../../Redux/slices/posts";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const PostTable = ({ posts }) => {
  const dispatch = useDispatch();

  const onHandleDeletePost = (id, url) => {
    const imageName = url.split("/").pop();
    const confirmed = window.confirm("Ви дійсно хочете видалити пост?");
    if (confirmed) {
      dispatch(fetchRemovePost(id));
      dispatch(fetchRemovePostImage(imageName));
    }
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(posts.items);
  }, [posts]);

  return (
      <Table sx={{ width: "100%", mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Номер</Typography></TableCell>
            <TableCell><Typography variant="h6">Зображення</Typography></TableCell>
            <TableCell><Typography variant="h6">Назва</Typography></TableCell>
            <TableCell><Typography variant="h6">Текст</Typography></TableCell>
            <TableCell><Typography variant="h6">Кількість переглядів</Typography></TableCell>
            <TableCell><Typography variant="h6">Видалити</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img src={`${baseUrl}${item.imageUrl}`} alt={item.title} style={{ height: 80, width: 80 }} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.text}</TableCell>
                <TableCell>{item.viewsCount}</TableCell>
                <TableCell>
                  <IconButton
                      color="error"
                      onClick={() => onHandleDeletePost(item._id, item.imageUrl)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default PostTable;
