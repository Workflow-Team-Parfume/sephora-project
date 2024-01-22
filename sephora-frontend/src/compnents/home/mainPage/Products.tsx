import { Button, Container, Grid, Typography } from "@mui/material";
import { IProduct } from "../types";
import "./products.scss"
import { Product } from "./Product";

export function Products (title:string, products:IProduct[],link:string,isNew:boolean=false) {
  return (
    <Container style={{ maxWidth:"100%", justifyContent:"center"}}>
          <Typography id="title">{title}</Typography>

          <Container sx={{ pt: 5, pb: 4, m:0}} style={{maxWidth:"100%"}} >
            <Grid container spacing={2} >
            {products.map((product) => (
             Product(product, isNew)
            ))}
            </Grid>
          </Container>

          <Button id="link" variant="outlined" href={link}>Більше товарів</Button>
        </Container>
    );
}