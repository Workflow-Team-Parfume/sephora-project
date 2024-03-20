import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import "./order.scss";
import {useTranslation} from "react-i18next";
import { newPieces } from "../data";
import OrderProduct from "../products/orderProduct/OrderProduct";
import OrderBuyer from "./orderBuyer/OrderBuyer";
import OrderDelivery from "./orderDelivery/OrderDelivery";
import ProductPieceDto from "../../../models/piece/ProductPieceDto"
import { CalculateProductTotal } from "../../../common/calculateTotal";
import { useSelector } from "react-redux";
import { IAuthUser } from "../../auth/types";


const Order = () => {
    const {t} = useTranslation();
    const pieces:ProductPieceDto[] = newPieces;
    const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

    const total: number = CalculateProductTotal(pieces);
    const discount = 0;
    
    return (
        <Container
        className="containerOrder"
        style={{maxWidth: "90%", justifyContent: "center", margin: '60px'}}
        >
            <Grid container justifyContent='space-between' spacing={3} >
                <Grid item sm={12} lg={6} className='boxOrder' marginBottom='auto'>
                    <Typography className="title">{t('order.yourOrder')}</Typography>
                    <Stack spacing={2} sx={{margin: '8px'}} className="containerScroll">
                        {pieces.map((piece) => (
                            <OrderProduct piece={piece} key={piece.id}/>
                        ))}
                    </Stack>
                    <Stack padding={2} className="containerTotalOrder">
                        <Stack 
                            margin='0 15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="text">{t('basket/order.orderAmount')}</Typography>
                            <Typography className="text">{total} {t('uah')} </Typography>
                        </Stack>
                        <Stack
                            margin='15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="text">{t('basket/order.discount')}</Typography>
                            <Typography className="text">{discount} {t('uah')} </Typography>
                        </Stack>
                        <Box className='line'/>
                        <Stack 
                            margin='15px'
                            justifyContent='space-between' direction='row'>
                            <Typography className="total">{t('basket/order.total')}</Typography>
                            <Typography className="total">{total - discount} {t('uah')} </Typography>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item sm={12} lg={6}>
                    {isAuth ?
                        <OrderDelivery/> 
                        :
                        <OrderBuyer/>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

export default Order;
