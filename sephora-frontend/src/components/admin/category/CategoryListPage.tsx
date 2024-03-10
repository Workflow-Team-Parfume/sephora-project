import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ModalDelete from "../../common/ModalDelete.tsx";
import http_common from "../../../http_common.ts";
import CategoryDto from "../../../models/category/CategoryDto.ts";
import i18n from "i18next";

const CategoryListPage = () => {
  const [list, setList] = useState<CategoryDto[]>([]);

  useEffect(() => {
    http_common.get<CategoryDto[]>("/category").then((resp) => {
      console.log("Categories", resp.data);
      setList(resp.data);
    });
  }, []);

  const onClickDelete = async (id: number) => {
    try {
      await http_common.delete(`/category/${id}`);
      setList(list.filter((x) => x.id !== id));
    } catch {
      console.log("Помилка видалення");
    }
  };

  return (
    <>
      <div className="container">
        <Typography variant="h1" align="center" gutterBottom>
          Список категорій
        </Typography>
        <Link to="create">
          <Button variant="contained" color="success">Додати</Button>
        </Link>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Назва</TableCell>
                <TableCell>Фото</TableCell>
                <TableCell>Опис</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>
                    {i18n.language === "en" ? c.nameEn : c.nameUa}
                  </TableCell>
                  <TableCell>
                    <img src={c.picture.url}
                         alt={c.nameEn + " picture"}
                         style={{ width: "100px" }} />
                  </TableCell>
                  <TableCell>
                    {i18n.language === "en" ? c.descriptionEn : c.descriptionUa}
                  </TableCell>
                  <TableCell>
                    <ModalDelete id={c.id}
                                 text={i18n.language === "en" ? c.nameEn : c.nameUa}
                                 deleteFunc={onClickDelete} />
                    &nbsp; &nbsp;
                    <Link to={`edit/${c.id}`} className="btn btn-info">
                      Змінити
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CategoryListPage;
