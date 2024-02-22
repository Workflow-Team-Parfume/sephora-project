import {Button, Link, Stack, Typography} from "@mui/material";
import "./basketProduct.scss";
import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {IProduct} from "../types.ts";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const imgPlaceholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';


const BasketProduct: React.FC<{ piece: IProduct }>
= ({piece}) => {
    const {t} = useTranslation();

    const [count, setCount] = useState(1);
    const handleCountChange = (count: number) => {
        if(count!=0)
            setCount(count);
    };
    return (
        <Stack className="basketProduct" direction='row' justifyContent='space-between' alignItems='center' padding={'20px 12px'}>
            <Link href={'/details/' + piece.id} underline="none">
                <Stack spacing={4} direction='row'>
                    <img
                        className="productImg"
                        src={piece.pictures[0] ?? imgPlaceholder}
                    />

                    <Stack justifyContent='space-between'>
                        <Typography className="productName">
                            {piece?.name}
                        </Typography>
                        <Stack>
                            <Typography className="productCategory">
                                {piece.categoryName}
                            </Typography>
                            <Typography className="productCategory">
                                {piece.volume[0].volume}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Link>


            <Stack direction='row' spacing={5} alignItems='center'>
                <Stack direction='row' className="count" alignItems='center'>
                    <Button onClick={() => (handleCountChange(count-1))}><RemoveIcon className="img"/></Button>
                    <Typography className="text">{count}</Typography>
                    <Button onClick={() => (handleCountChange(count+1))}><AddIcon className="img"/></Button>
                </Stack>
                <Typography className="productPrice">
                        {piece.volume[0].price} {t('uan')}
                </Typography>
                <Button>
                    <DeleteOutlinedIcon sx={{color:'#646464'}}/>
                </Button>
            </Stack>
        </Stack>
    );
}

export default BasketProduct;
