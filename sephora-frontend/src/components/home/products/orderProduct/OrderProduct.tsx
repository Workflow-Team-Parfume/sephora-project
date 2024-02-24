import {Button, Link, Stack, Typography} from "@mui/material";
import "./orderProduct.scss";
import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ProductPieceDto from "../../../../models/piece/ProductPieceDto.ts";

const imgPlaceholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';


const OrderProduct: React.FC<{ piece: ProductPieceDto }>
= ({piece}) => {
    const {t} = useTranslation();

    const [count, setCount] = useState(1);
    const handleCountChange = (count: number) => {
        if(count!=0)
            setCount(count);
    };
    return (
        <Stack 
            className="orderProduct" 
            direction='row'         
            justifyContent='space-between' 
            alignItems='center' 
            padding={'20px 12px'}
        >
            <Stack spacing={4} direction='row'>
                <Link href={'/details/' + piece.id} underline="none">
                    <img
                        className="productImg"
                        src={piece.pictures[0].url ?? imgPlaceholder}
                    />
                </Link>
                <Stack justifyContent='space-between'>
                    <Link href={'/details/' + piece.id} underline="none">
                        <Typography className="productName">
                            {piece.product.name}
                        </Typography>
                        <Typography className="productCategory">
                            {piece.product.category.name}
                        </Typography>
                        <Typography className="productCategory">
                            {piece.milliliters}ml
                        </Typography>
                        <Typography className="productPrice">
                            {piece.price} {t('uan')}
                        </Typography>
                    </Link>
                    <Stack direction='row' className="count" alignItems='center'>
                        <Button onClick={() => (handleCountChange(count-1))}><RemoveIcon className="img"/></Button>
                        <Typography className="text">{count}</Typography>
                        <Button onClick={() => (handleCountChange(count+1))}><AddIcon className="img"/></Button>
                    </Stack>
                </Stack>
            </Stack>

            <Button>
                <DeleteOutlinedIcon sx={{color:'#646464'}}/>
            </Button>
        </Stack>
    );
}

export default OrderProduct;
