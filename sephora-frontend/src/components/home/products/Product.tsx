import {Card, CardMedia, Link, Rating, Stack, Typography} from "@mui/material";
import "./products.scss"
import StarIcon from "@mui/icons-material/Star";
import ProductPieceDto from "../../../models/piece/ProductPieceDto.ts";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useTranslation} from "react-i18next";
import routes from "../../../common/routes.ts";
import i18n from "i18next";

function IsNew(isNew: boolean) {
    if (isNew) {
        return (
            <div className="new">
                NEW
            </div>
        )
    }
}

const Product: React.FC<{ piece: ProductPieceDto }>
    = ({piece}) => {
    const {t} = useTranslation();

    return (
        <Link href={'/details/' + piece.product.id} underline="none">

            <Card className="productMainContainer"
                  sx={{height: '95%'}}>
                {IsNew(piece.isNew)}
                <FavoriteBorderIcon className="favorite"/>
                {/* <FavoriteIcon className="favorite"/> */}
                <Stack spacing={2} direction='column'>

                    <CardMedia
                        component="div"
                        sx={{pt: '120%'}}
                        image={piece.pictures[0]?.urlLg ?? routes.picPlaceholder}
                    />

                    <Stack spacing={4}>
                        <Typography className="productName">
                            {piece.product?.name}
                        </Typography>
                        <Typography className="productCategory">
                            {
                                i18n.language === "en"
                                    ? piece.product?.category?.nameEn
                                    : piece.product?.category?.nameUa
                            }
                            {piece.milliliters != 0
                                ? <span> &#8211; </span>
                                : ''}
                            {piece.milliliters} {t('common.ml')}
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
                                    {piece.price} {t('uah')}
                                </span>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Link>
    );
}

export default Product;
