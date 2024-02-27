import {Link, Stack, Typography} from "@mui/material";
import "./orderProduct.scss";
import React from "react";
import {useTranslation} from "react-i18next";
import OrderItemDto from "../../../../models/order/OrderItemDto.ts";

const imgPlaceholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';


const OrderProduct: React.FC<{ orderItem: OrderItemDto }>
= ({orderItem}) => {
    const {t} = useTranslation();

    return (
        <Stack 
            className="orderProduct" 
            padding={'10px 12px'}
        >
            <Link href={'/details/' + orderItem.productPiece.id} underline="none">
                <Stack spacing={4} direction='row' justifyContent='space-between'>
                    <Stack direction='row' spacing={1}>
                        <Stack width='95px' alignItems='center'>
                            <img
                                className="productImg"
                                src={orderItem.productPiece.pictures[0].url ?? imgPlaceholder}
                            />
                        </Stack>
                        <Stack justifyContent='center'>
                            <Typography className="productName">
                                {orderItem.productPiece.product.name}
                            </Typography>
                            <Typography className="productCategory">
                                {orderItem.productPiece.product.category.name}
                            </Typography>
                            <Typography className="productCategory">
                                {orderItem.productPiece.milliliters}ml
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between' minWidth='150px'>
                        <Typography className="productPrice" sx={{fontWeight:300}}>
                            {orderItem.quantity} {t('pc')}
                        </Typography>
                        <Typography className="productPrice" sx={{fontWeight: 500}}>
                            {orderItem.productPiece.price} {t('uan')}
                        </Typography>
                    </Stack>
                </Stack>
            </Link>
        </Stack>
    );
}

export default OrderProduct;