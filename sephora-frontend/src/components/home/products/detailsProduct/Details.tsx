import React, {useEffect, useState} from "react";
import {
    Button,
    CircularProgress,
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
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import http_common from "../../../../http_common.ts";

import ProductDto from "../../../../models/product/ProductDto.ts";
import PictureDto from "../../../../models/picture/PictureDto.ts";
import RatingDto from "../../../../models/rating/RatingDto.ts";
import routes from "../../../../common/routes.ts";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Reviews from "../../reviews/ReviewsProduct";
import "./details.scss";
import novaPoshta from "../../../../assets/images/delivery/deliveryNewPost.svg";
import ukrPoshta from "../../../../assets/images/delivery/deliveryUkrPoshta.svg";
import meest from "../../../../assets/images/delivery/deliveryMeestMail.svg";
import textFieldStyle from '../../../../common/textFieldStyle';
import PagedList from "../../../../models/pagedlist/PagedList.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store.ts";
import changeFavStatus from "../ChangeFavStatus.ts";
import CreateCartItem from "../../../../models/Cart/CreateCartItem.ts";

const Details: React.FC = () => {
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const isAuthed = useSelector((store: RootState) => store.auth.isAuth);

    const [product, setProduct] = useState<ProductDto>();
    const [reviews, setReviews] = useState<PagedList<RatingDto>>();
    const [click, setClick] = useState("description");
    const [pieceId, setPieceId] = useState<number>(
        Number(params.get("piece"))
        ?? product?.pieces[0].id
        ?? 0
    );

    const currentPiece = () => product?.pieces.find(p => p.id === pieceId);
    const changePiece = (pId: number, curProduct: ProductDto) => {
        setPieceId(pId);
        setParams({piece: pId.toString()});
        setImage(curProduct.pieces.find(p => p.id === pId)?.pictures[0]);

        navigate(`/details/${id}?piece=${pId}`);
    }

    useEffect(() => {
        http_common.get<ProductDto>(`products/${id}`)
            .then(resp => {
                const pathId = Number(params.get("piece"));
                const pieceIds = resp.data.pieces.map(p => p.id);
                const pieceId = pieceIds.includes(pathId)
                    ? pathId
                    : resp.data.pieces[0].id;

                setProduct(resp.data);
                changePiece(pieceId, resp.data);
            })
            .catch(e => console.error(e));

        http_common.get<PagedList<RatingDto>>(`rating/product/${id}`)
            .then(resp => setReviews(resp.data))
            .catch(e => console.error(e));
    }, [id]);

    const [image, setImage] = useState<PictureDto | undefined>(
        currentPiece()?.pictures[0]
    );

    const [isFavorite, setIsFavorite] = useState<boolean>(product?.isFavorite ?? false);

    const handleFavClick = () => {
        // TODO: add toast/other notification

        changeFavStatus(product?.id ?? 0, isAuthed);
        setIsFavorite(!isFavorite);
    }

    const handleBuyClick = async () => {
        // TODO: add toast/other notification
        if (isAuthed) {
            const item: CreateCartItem = {
                productPieceId: pieceId,
                quantity: 1
            }
            const isInCart = (await http_common
                .get<boolean>(`cart/contains/${id}`)
            ).data
            if (isInCart) {
                http_common.delete(`cart/${id}`)
                    .catch(e => console.error(e))
            }
            else {
                http_common.post(`cart`, item)
                    // TODO: add toast/other notification
                    .catch(e => console.error(e))
            }
        } else {
            const items = JSON.parse(localStorage.getItem('cart') ?? '[]');
            if (items.includes(pieceId)) {
                items.splice(items.indexOf(pieceId), 1);
                console.info('Removed from local storage'); // todo: remove log
            } else {
                items.push(pieceId);
                console.info('Added to local storage');
            }
            localStorage.setItem('cart', JSON.stringify(items));
            console.info(JSON.parse(localStorage.getItem('cart') ?? '[]'));
        }
    }

    const handleChangeClick = (click: string) => {
        setClick(click);
    };

    function Click() {
        if (click == 'description') {
            return <Typography className="description">
                {
                    i18n.language === "en"
                        ? product?.descriptionEn
                        : product?.descriptionUa
                };
            </Typography>
        } else if (click == 'characteristic') {
            return <Stack spacing={1}>
                {(product?.characteristics ?? []).map((characteristic, i) => (
                    <Stack key={i} direction='row' flexWrap='wrap'>
                        <Typography
                            className="characteristic charactName">
                            {
                                i18n.language === "en"
                                    ? characteristic.nameEn
                                    : characteristic.nameUa
                            }
                            {': '}
                        </Typography>
                        <Typography
                            className="characteristic">
                            {
                                i18n.language === "en"
                                    ? characteristic.descriptionEn
                                    : characteristic.descriptionUa
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
                                {currentPiece()?.pictures.map((img, i) => (
                                    <Button key={i} onClick={() => setImage(img)}>
                                        <img className={img == image ? 'imageClick' : 'image'}
                                             alt={`Product picture ${i + 1}`} src={img.urlLg}/>
                                    </Button>
                                ))}
                            </Stack>

                            <img style={{width: '600px'}}
                                 src={image?.url ?? routes.picPlaceholder}
                                 alt="Product picture"/>

                            <Stack spacing={2.5}>
                                <Stack>
                                    <Typography className="productName">
                                        {product.name}
                                    </Typography>
                                    <Typography className="productCategory">
                                        {
                                            i18n.language === "en"
                                                ? product.category.nameEn
                                                : product.category.nameUa
                                        }
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
                                    <FormControl fullWidth sx={{...textFieldStyle}}>
                                        <Select
                                            sx={{width: '450px'}}
                                            value={pieceId}
                                            onChange={(e) => changePiece(Number(e.target.value), product)}
                                            displayEmpty>
                                            {product.volumes?.map((volume, index) => (
                                                <MenuItem key={index} value={product.pieces[index].id}>
                                                    <Typography className="productVolume">
                                                        {volume.milliliters} {t('common.ml')}
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
                                    <Button className="butFavorites" onClick={handleFavClick}>
                                        {t('details.addToFavorites')}
                                        <FavoriteBorderIcon style={{marginLeft: '10px'}}/>
                                        {/* {t('details.addedToFavorites')}
                                <FavoriteIcon style={{marginLeft: '10px'}}/> */}
                                    </Button>
                                    <Button className="butBuy" onClick={handleBuyClick}>{t('details.buy')}</Button>
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
                                 reviews={reviews?.items ?? []}/>
                        {/*<Products title={t('common.title.especiallyForYou')} products={especiallyForYou}/>*/}
                    </Stack>
                </Container>
            </>
            : <Stack sx={{alignItems: 'center', justifyContent: 'center', marginY: 10}}>
                <CircularProgress color="inherit"/>
            </Stack>
    );
}

export default Details;
