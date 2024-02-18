import {Card, CardMedia, Grid, Link, Rating, Stack, Typography} from "@mui/material";
import "./products.scss"
import StarIcon from "@mui/icons-material/Star";
import ProductPiece from "../../../models/product/ProductPiece.ts";
import React from "react";

function IsNew(isNew: boolean) {
    if (isNew) {
        return (
            <div className="new">
                NEW
            </div>
        )
    }
}

const imgPlaceholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

const Product: React.FC<{ piece: ProductPiece }>
    = ({piece}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link href={'/details/' + piece.id} underline="none">

                <Card className="productMainContainer"
                      sx={{height: '95%'}}
                >
                    {IsNew(piece.isNew)}
                    <Stack spacing={2} direction='column'>

                        <CardMedia
                            component="div"
                            sx={{pt: '120%'}}
                            image={piece.pictures[0]?.urlLg ?? imgPlaceholder}
                        />

                        <Stack spacing={4}>
                            <Typography className="productName">
                                {piece.product?.name}
                            </Typography>
                            <Typography className="productCategory">
                                {piece.product.category.name}
                                {piece.milliliters != 0
                                    ? <span>&#8211;</span>
                                    : ''}
                                {piece.milliliters}
                            </Typography>
                            <Stack spacing={2}>
                                <Rating
                                    name="hover-feedback"
                                    value={piece.product.averageRating}
                                    precision={0.5}
                                    readOnly
                                    icon={<StarIcon style={{color: 'black'}}/>}
                                    emptyIcon={
                                        <StarIcon
                                            style={{color: '#9D9D9D'}}
                                            fontSize="inherit"
                                        />}
                                />
                                <Typography className="productPrice">
                                    <span style={{textWrap: "nowrap"}}>
                                        {piece.price} {/*грн*/ /*TODO: Localize*/}
                                    </span>
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Link>
        </Grid>
    );
}

export default Product;
