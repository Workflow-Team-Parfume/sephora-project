import {  Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { IProduct } from "../types";
import "./products.scss"
import { Stars } from "../Stars";

function IsNew(isNew:boolean){
  if(isNew){
    return(
      <div className="new">
          NEW
      </div>
    )
  }
}

export function Product (product:IProduct,isNew:boolean=false) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
    <Card id="mainContainer"
        sx={{height:'95%'}}
        >
        {IsNew(isNew)}
        <Stack spacing={2} direction='column'>

        <CardMedia
        component="div"
        sx={{
          pt: '120%'
        }}
        image={product.image}
        /> 

        <Stack spacing={4}>
          <Typography id="productName">
              {product.name}
          </Typography>
          <Typography id="productCategory">
              {product.categoryName} {product.volume != null ? <span>&#8211;</span> : ''} {product.volume}
          </Typography>
          <Stack spacing={2}>
            {Stars(product.rating)}
            <Typography id="productPrice">
                <span style={{textWrap:"nowrap"}}>
                {product.price} грн
                </span>
            </Typography> 
          </Stack>
        </Stack>
        </Stack>
    </Card>

    </Grid>
    );
}