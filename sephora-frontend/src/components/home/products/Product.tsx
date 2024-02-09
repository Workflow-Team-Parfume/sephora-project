import {  Card, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { IProduct } from "./types";
import "./products.scss"
import StarIcon from "@mui/icons-material/Star";

function IsNew(isNew:boolean){
  if(isNew){
    return(
      <div className="new">
          NEW
      </div>
    )
  }
}

const Product : React.FC<{product:IProduct}>
= ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
    <Card className="productsMainContainer"
        sx={{height:'95%'}}
        >
        {IsNew(product.isNew)}
        <Stack spacing={2} direction='column'>

        <CardMedia
        component="div"
        sx={{
          pt: '120%'
        }}
        image={product.image}
        /> 

        <Stack spacing={4}>
          <Typography className="productName">
              {product.name}
          </Typography>
          <Typography className="productCategory">
              {product.categoryName} {product.volume != null ? <span>&#8211;</span> : ''} {product.volume}
          </Typography>
          <Stack spacing={2}>
          <Rating
            name="hover-feedback"
            value={product.rating}
            precision={0.5}
            readOnly
            icon={<StarIcon style={{ color: 'black' }} />}
            emptyIcon={<StarIcon style={{ color: '#9D9D9D' }} fontSize="inherit" />}
          />
            <Typography className="productPrice">
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

export default Product;