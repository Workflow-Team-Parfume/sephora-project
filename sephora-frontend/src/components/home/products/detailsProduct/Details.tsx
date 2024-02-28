import React, {useEffect, useState} from "react";
import {
    Button,
    Container,
    FormControl,
    MenuItem,
    Rating,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {useParams, useSearchParams} from "react-router-dom";
import http_common from "../../../../http_common.ts";

import ProductDto from "../../../../models/product/ProductDto.ts";
import PictureDto from "../../../../models/picture/PictureDto.ts";
import RatingDto from "../../../../models/rating/RatingDto.ts";
import routes from "../../../../common/routes.ts";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reviews from "../../reviews/ReviewsProduct";
import "./details.scss";
import novaPoshta from "../../../../assets/images/novaPoshta.png";
import ukrPoshta from "../../../../assets/images/ukrPoshta.png";
import meest from "../../../../assets/images/meest.png";
import textFieldStyle from '../../../../common/textFieldStyle';

const Details: React.FC = () => {
    const {t} = useTranslation();
    const {id} = useParams();
    const [product, setProduct] = useState<ProductDto>();
    const [reviews, setReviews] = useState<RatingDto[]>([]);
    const [click, setClick] = useState("description");
    const [pieceId, setPieceId] = useState<number>(product?.pieces[0].id ?? 0);

    useEffect(() => {
        http_common.get<ProductDto>(`products/${id}`)
            .then(resp => {
                console.log(resp.data);
                setProduct(resp.data);
            })
            .catch(e => console.error(e));

        http_common.get<RatingDto[]>(`rating/product/${id}`)
            .then(resp => {
                console.log(resp.data);
                setReviews(resp.data);
            })
            .catch(e => console.error(e));
    }, [id]);

    const [params, setParams] = useSearchParams({
        piece: pieceId.toString()
    });

    const changePiece = (pieceId: number) => {
        setPieceId(pieceId);
        setParams({piece: pieceId.toString()});
    }

    if (params.get("piece") !== pieceId.toString()) {
        changePiece(Number(product?.pieces[0].id ?? 0));
    }

    const currentPiece = () => product?.pieces[pieceId];
    const [image, setImage] = useState<PictureDto | undefined>(
        currentPiece()?.pictures[0]
    );

    const handleChangeClick = (click: string) => {
        setClick(click);
    };

    function Click() {
        if (click == 'description') {
            return <Typography className="description">
                {
                    i18n.language == "ua"
                        ? product?.descriptionUa
                        : product?.descriptionEn
                };
            </Typography>
        } else if (click == 'characteristic') {
            return <Stack spacing={1}>
                {(product?.characteristics ?? []).map((characteristic) => (
                    <Stack direction='row' flexWrap='wrap'>
                        <Typography
                            className="characteristic charactName">
                            {
                                i18n.language == "ua"
                                    ? characteristic.nameUa
                                    : characteristic.nameEn
                            }
                            {': '}
                        </Typography>
                        <Typography
                            className="characteristic">
                            {
                                i18n.language == "ua"
                                    ? characteristic.descriptionUa
                                    : characteristic.descriptionEn
                            }
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        } else {
            return <Stack>
                <Typography className="paymentAndDelivery">
                    1. {t('details.paymentAndDelivery.1')}
                </Typography>
                <Typography className="paymentAndDelivery">
                    2. {t('details.paymentAndDelivery.2')}
                </Typography>
                <Typography className="paymentAndDelivery">
                    3. {t('details.paymentAndDelivery.3')}
                </Typography>
                <Typography className="paymentAndDelivery">
                    4. {t('details.paymentAndDelivery.4')}
                </Typography>
                <Stack
                    justifyContent='center'
                    direction='row'
                    spacing={4}
                    sx={{height: '66px'}}>
                    <img alt="nova poshta" src={novaPoshta}/>
                    <img alt="ukr poshta" src={ukrPoshta}/>
                    <img style={{height: '60px'}} alt="meest" src={meest}/>
                </Stack>
            </Stack>
        }
    }

    console.log(product)
    console.log(currentPiece())
    return (
        product && currentPiece()
            ?
            <>
                <Container style={{maxWidth: "90%", alignItems: 'center'}}>
                    <Container
                        style={{maxWidth: "100%", alignItems: 'center'}}
                        className="productDetails">

                        <Stack direction='row' spacing={2.5}>
                            <Stack style={{width: '100px'}} spacing={2.5}>
                                {currentPiece()?.pictures.map((img) => (
                                    <Button onClick={() => setImage(img)}>
                                        <img className={img == image ? 'imageClick' : 'image'}
                                             alt={product.name ?? ""} src={img.urlLg}/>
                                    </Button>
                                ))}
                            </Stack>

                            <img style={{width: '600px'}}
                                 src={image?.urlLg ?? routes.picPlaceholder}
                                 alt={product.name!}/>

                            <Stack spacing={2.5}>
                                <Stack>
                                    <Typography className="productName">
                                        {product.name}
                                    </Typography>
                                    <Typography className="productCategory">
                                        {product.category.name}
                                    </Typography>
                                </Stack>
                                <Rating
                                    name="hover-feedback"
                                    value={product.averageRating}
                                    precision={0.5}
                                    readOnly
                                    icon={<StarIcon style={{color: 'black'}}/>}
                                    emptyIcon={<StarIcon
                                        style={{color: '#9D9D9D'}}
                                        fontSize="inherit"/>}
                                />
                                {/*<Typography*/}
                                {/*    className="productCode">*/}
                                {/*    {t('details.productCode')} {product.codeProduct}*/}
                                {/*</Typography>*/}
                                <Typography className="productPrice">
                                    {currentPiece()?.price.toFixed(2)} грн
                                </Typography>

                                {product.volumes.length != 0 ?
                                    <FormControl fullWidth
                                                 sx={{...textFieldStyle}}
                                    >
                                        <Select
                                            sx={{width: '450px'}}
                                            value={pieceId}
                                            onChange={(e) => changePiece(Number(e.target.value))}
                                            displayEmpty
                                        >
                                            {product.volumes?.map((volume, index) => (
                                                <MenuItem value={product.pieces[index].id}>
                                                    <Typography className="productVolume">
                                                        {volume.milliliters}
                                                        {
                                                            i18n.language == "ua"
                                                                ? ' мл'
                                                                : ' ml'
                                                        }
                                                    </Typography>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    : <></>
                                }

                                <Stack
                                    spacing={1} sx={{width: '450px'}}
                                    style={{marginTop: '40px'}}>
                                    <Button className="butFavorites">
                                        {t('details.addToFavorites')}
                                        <FavoriteBorderIcon style={{marginLeft: '10px'}}/>
                                        {/* {t('details.addedToFavorites')}
                                <FavoriteIcon style={{marginLeft: '10px'}}/> */}
                                    </Button>
                                    <Button className="butBuy">{t('details.buy')}</Button>
                                </Stack>
                            </Stack>
                        </Stack>


                        <Stack
                            direction='row'
                            spacing={10}
                            style={{maxWidth: "80%", margin: '70px auto'}}>
                            <Stack sx={{width: '220px'}} justifyContent='center' spacing={3}>
                                <Button onClick={
                                    () => handleChangeClick('description')
                                } className={click == 'description'
                                    ? 'clickLeft'
                                    : 'clickDisable clickLeft'}>
                                    {t('details.description')}
                                </Button>
                                <Button onClick={
                                    () => handleChangeClick('characteristic')
                                } className={click == 'characteristic'
                                    ? 'clickLeft'
                                    : 'clickDisable clickLeft'}>
                                    {t('details.characteristics')}
                                </Button>
                                <Button onClick={
                                    () => handleChangeClick('paymentAndDelivery')
                                } className={click == 'paymentAndDelivery'
                                    ? 'clickLeft'
                                    : 'clickDisable clickLeft'}>
                                    {t('details.paymentAndDelivery')}
                                </Button>
                            </Stack>
                            <Stack className="click">
                                {Click()}
                            </Stack>
                        </Stack>
                    </Container>

                    <Stack spacing={7} style={{alignItems: 'center'}}>
                        {/*<Products title={t('common.title.similarProducts')} products={similarProducts}/>*/}
                        <Reviews title={t('common.title.reviews')}
                                 reviews={reviews}/>
                        {/*<Products title={t('common.title.especiallyForYou')} products={especiallyForYou}/>*/}
                    </Stack>
                </Container>
            </>
            : <>{/*TODO: Add spinner*/}</>
    );
}

export default Details;
