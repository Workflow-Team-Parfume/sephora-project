import {Box, Stack, Typography} from "@mui/material";
import "./yourOrder.scss";
import {useTranslation} from "react-i18next";
import { order } from "../../data";
import OrderProduct from "../../profile/orderProduct/OrderProduct";
import OrderDto from "../../../../models/order/OrderDto";


const YourOrder = () => {
    const {t} = useTranslation();
    const order1:OrderDto = order;

    const total: number = calculateTotal();
    const discount = 0;

    function calculateTotal(): number {
        const total: number = order1.products.reduce((acc, piece) => acc + piece.productPiece.price * piece.quantity, 0);
        return total;
    }

    return (
        <Stack className="yourOrder" margin='80px 17%'>
            <Stack>
                <Typography className="title">{t('order.yourOrder')}</Typography>
                <Typography className="status">{t('order.status')} {t('order.status.issued')}</Typography>
            </Stack>
            {order1.products.map((orderItem) => (<OrderProduct orderItem={orderItem}/>))}
            <Stack padding={2} className="containerTotalOrder" marginX='25%'>
                        <Stack 
                            margin='0 15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="text">{t('basket/order.orderAmount')}</Typography>
                            <Typography className="text">{total} {t('uan')} </Typography>
                        </Stack>
                        <Stack
                            margin='15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="text">{t('basket/order.discount')}</Typography>
                            <Typography className="text">{discount} {t('uan')} </Typography>
                        </Stack>
                        <Box className='line'/>
                        <Stack 
                            margin='15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="total">{t('basket/order.total')}</Typography>
                            <Typography className="total">{total - discount} {t('uan')} </Typography>
                        </Stack>
                    </Stack>
        </Stack>
    );
}

export default YourOrder;
