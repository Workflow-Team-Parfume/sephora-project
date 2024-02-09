import { Button, Container, Grid, Typography } from "@mui/material";
import { IProduct } from "./types";
import "./products.scss"
import Product from "./Product";
import { useTranslation } from "react-i18next";

const Products : React.FC<{title:string, products:IProduct[], link:string}>
= ({ title, products, link }) => {
  
  const { t } = useTranslation();

  return (
    <Container className="containerProductsMP" style={{ maxWidth:"100%", justifyContent:"center"}}>
          <Typography className="title">{title}</Typography>

          <Container sx={{ pt: 5, pb: 4, m:0}} style={{maxWidth:"100%"}} >
            <Grid container spacing={2} >
            {products.map((product) => (
             <Product product={product}/>
            ))}
            </Grid>
          </Container>

          <Button className="link" href={link}>{t('common.button.moreProducts')}</Button>
        </Container>
    );
}

export default Products;