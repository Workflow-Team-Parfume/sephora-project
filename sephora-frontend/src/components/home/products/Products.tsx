import { Button, Container, Grid, Typography } from "@mui/material";
import { IProduct } from "./types";
import "./products.scss"
import Product from "./Product";
import { useTranslation } from "react-i18next";

const Products : React.FC<{title:string, products:IProduct[], link:string, isNew?:boolean}>
= ({ title, products, link, isNew = false }) => {
  
  const { t } = useTranslation();

  return (
    <Container style={{ maxWidth:"100%", justifyContent:"center"}}>
          <Typography id="title">{title}</Typography>

          <Container sx={{ pt: 5, pb: 4, m:0}} style={{maxWidth:"100%"}} >
            <Grid container spacing={2} >
            {products.map((product) => ( 
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <Product product={product} isNew={isNew}/>
            </Grid>
            ))}
            </Grid>
          </Container>

          <Button id="link" variant="outlined" href={link}>{t('common.button.moreProducts')}</Button>
        </Container>
    );
}

export default Products;