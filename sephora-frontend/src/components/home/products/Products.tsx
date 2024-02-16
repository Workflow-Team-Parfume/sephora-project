import {Button, Container, Grid, Typography} from "@mui/material";
import "./products.scss"
import Product from "./Product";
import {useTranslation} from "react-i18next";
import React from "react";
import ProductPiece from "../../../models/product/ProductPiece.ts";

const Products: React.FC<{ title: string, products: ProductPiece[], link?: string | null }>
    = ({title, products, link = null}) => {

    const {t} = useTranslation();

          <Container sx={{ pt: 5, pb: 4, m:0}} style={{maxWidth:"100%"}} >
            <Grid container spacing={2} >
            {products.map((product) => (
             <Grid item xs={12} sm={6} md={4} lg={3} >
             <Product product={product} />
           </Grid>
            ))}
            </Grid>
          </Container>

    return (
        <Container className="containerProductsMP" style={{maxWidth: "100%", justifyContent: "center"}}>
            <Typography className="title">{title}</Typography>

            <Container sx={{pt: 5, pb: 4, m: 0}} style={{maxWidth: "100%"}}>
                <Grid container spacing={2}>
                    {products?.length > 0 ?
                        products.map((product) => (
                            <Product piece={product}/>
                        ))
                        : <>No products were found</> /*TODO: Redo this stub*/
                    }
                </Grid>
            </Container>

            {link != null ?
                <Button className="link" href={link}>{t('common.button.moreProducts')}</Button>
                : <></>
            }
        </Container>
    );
}

export default Products;
