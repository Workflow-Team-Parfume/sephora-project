import {Button, Container, Grid, Typography} from "@mui/material";
import "./products.scss"
import Product from "./Product";
import {useTranslation} from "react-i18next";
import React, {useEffect} from "react";
import ProductPieceDto from "../../../models/piece/ProductPieceDto.ts";
import PagedList from "../../../models/pagedlist/PagedList.ts";
import http_common from "../../../http_common.ts";

const pageSize = 4;

const Products: React.FC<{
    title: string,
    link: string
}> = ({title, link}) => {
    const {t} = useTranslation();

    const [list, setList] = React.useState<PagedList<ProductPieceDto>>();
    const [products, setProducts] = React.useState<ProductPieceDto[]>([]);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        http_common.get(`${link}&page=${page}&size=${pageSize}`)
            .then(r => {
                setList(r.data)
                setProducts([...products, ...r.data.items])
            })
            .catch(e => console.error(e));
    }, [link, page]);

    return (
        <Container
            className="containerProductsMP"
            style={{maxWidth: "100%", justifyContent: "center"}}>
            <Typography className="title">{title}</Typography>

            <Container sx={{pt: 5, pb: 4, m: 0}} style={{maxWidth: "100%"}}>
                <Grid container spacing={2}>
                    {products.length > 0 ?
                        products.map((product) => (
                            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                <Product key={product.id} piece={product}/>
                            </Grid>
                        ))
                        /* TODO: Redo this stub (add spinner) */
                        : <>No products were found</>
                    }
                </Grid>
            </Container>

            <Button className={`link${list && list.hasNextPage ? '' : ' invisible'}`}
                    onClick={() => setPage(page + 1)}>
                {t('common.button.moreProducts')}
            </Button>
        </Container>
    );
}

export default Products;
