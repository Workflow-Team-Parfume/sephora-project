import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import "./basket.scss"
import {useTranslation} from "react-i18next";
import { Perfume } from "../data";
import BasketProduct from "../products/basketProduct/BasketProduct";

const Basket = () => {
    const {t} = useTranslation();
    const products = Perfume;

    const discount = 0;

    function calculateTotal(): number {
        const total: number = products.reduce((acc, price) => acc + Number(price.volume[0].price), 0);
        return total;
    }
    
    const total: number = calculateTotal();

    return (
        <Container
        className="containerBasket"
        style={{maxWidth: "100%", justifyContent: "center", margin: '20px 0'}}
        >
            <Typography className="title">{t('basket')}</Typography>

            <Box className='line'/>
            
            <Box margin={4}>
                <Grid container justifyContent='space-between' >
                    <Grid item sm={12} lg={8} className="containerScroll">
                        <Stack spacing={2} sx={{margin: '8px'}}>
                            {products.map((piece) => (
                                <BasketProduct piece={piece} key={piece.id}/>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item sm={12} lg={3.5} className="containerTotal">
                        <Stack margin={2}>
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
                            <Button href="/order" className="button">{t('basket.toOrder')}</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            
            <Box margin={4}>
                <Typography className="recProductsTitle">{t('basket.recomProducts')}</Typography>
                {/*TODO: recommended products list */}
            </Box>
        </Container>
    );
}

export default Basket;
