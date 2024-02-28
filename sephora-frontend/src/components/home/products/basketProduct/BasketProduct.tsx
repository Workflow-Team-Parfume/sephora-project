import {Button, Link, Stack, Typography} from "@mui/material";
import "./basketProduct.scss";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ProductPieceDto from "../../../../models/piece/ProductPieceDto.ts";
import i18n from "i18next";

const imgPlaceholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';


const BasketProduct: React.FC<{ piece: ProductPieceDto }>
    = ({piece}) => {
    const {t} = useTranslation();

    const [count, setCount] = useState(1);
    const handleCountChange = (count: number) => {
        if (count != 0)
            setCount(count);
    };
    return (
        <Stack className="basketProduct" direction='row' justifyContent='space-between' alignItems='center'
               padding={'20px 12px'}>
            <Link href={'/details/' + piece.id} underline="none">
                <Stack spacing={2} direction='row'>
                    <Stack width='80px' alignItems='center'>
                        <img
                            className="productImg"
                            src={piece.pictures[0].url ?? imgPlaceholder}
                        />
                    </Stack>

                    <Stack justifyContent='space-between'>
                        <Typography className="productName">
                            {piece.product.name}
                        </Typography>
                        <Stack>
                            <Typography className="productCategory">
                                {
                                    i18n.language === "en"
                                        ? piece.product.category.nameEn
                                        : piece.product.category.nameUa
                                }
                            </Typography>
                            <Typography className="productCategory">
                                {piece.milliliters} {t('common.ml')}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Link>

            <Stack direction='row' alignItems='center' justifyContent='space-between' minWidth='300px'>
                <Stack direction='row' className="count" alignItems='center'>
                    <Button onClick={() => (handleCountChange(count - 1))}><RemoveIcon className="img"/></Button>
                    <Typography className="text">{count}</Typography>
                    <Button onClick={() => (handleCountChange(count + 1))}><AddIcon className="img"/></Button>
                </Stack>
                <Typography className="productPrice">
                    {piece.price} {t('uan')}
                </Typography>
                <Button>
                    <DeleteOutlinedIcon sx={{color: '#646464'}}/>
                </Button>
            </Stack>
        </Stack>
    );
}

export default BasketProduct;
