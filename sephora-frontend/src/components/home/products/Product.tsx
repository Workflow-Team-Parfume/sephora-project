import {Button, Card, CardMedia, FormControl, Link, MenuItem, Rating, Select, Stack, Typography} from "@mui/material";
import "./products.scss"
import StarIcon from "@mui/icons-material/Star";
import ProductPieceDto from "../../../models/piece/ProductPieceDto.ts";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import {useTranslation} from "react-i18next";
import routes from "../../../common/routes.ts";
import i18n from "i18next";
import changeFavStatus from "./ChangeFavStatus.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import textFieldStyle from '../../../common/textFieldStyle';

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
    const isAuthed = useSelector((store: RootState) => store.auth.isAuth);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleFavClick = () => {
        // TODO: change styling
        changeFavStatus(piece.product.id, isAuthed);
    };

    // TODO: Change link
    return (
        <Card className="productMainContainer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            {IsNew(piece.isNew)}
            <Button className="favorite" onClick={handleFavClick} disableTouchRipple>
                <FavoriteBorderIcon sx={{width:"30px", height:"30px"}}/>
            {/* <FavoriteIcon sx={{width:"30px", height:"30px"}}/> */}
            </Button>
            <Link href={`/details/${piece.product.id}?piece=${piece.id}`} underline="none" >

                <Stack spacing={2} direction='column'
                    sx={{ padding: "12px 10px" }} >

                    <CardMedia
                        component="div"
                        sx={{pt: '100%', backgroundSize: 'contain'}}
                        image={piece.pictures[0]?.urlLg ?? routes.picPlaceholder}
                    />

                    <Stack spacing={'5%'}>
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
            </Link>
            {isHovered && (
                <Stack
                    sx={{
                        display: isHovered ? 'block' : 'none',
                        position: 'absolute',
                        bottom: '-25%',
                        zIndex: 1,
                        width: '100%',
                        padding: "-10px",
                    }}>
                    <Stack 
                        className="hoverProd"
                        spacing={1}
                    >
                        {piece.product.volumes.length != 0 ?
                            <FormControl fullWidth sx={{...textFieldStyle}}>
                                <Select
                                    sx={{width: '100%',
                                    borderRadius: 0}}
                                    value={piece.id}
                                    // onChange={(e) => changePiece(Number(e.target.value), product)}
                                    displayEmpty>
                                    {piece.product.volumes?.map((volume, index) => (
                                        <MenuItem key={index} /*value={piece.product.pieces[index].id}*/
                                        >
                                            <Typography className="productVolume">
                                                {volume.milliliters} {t('common.ml')}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            : <></>
                        }
                            <Button fullWidth className="butBuy">{t('details.buy')}</Button>
                    </Stack>
                </Stack>
                )}
        </Card>
    );
}

export default Product;
