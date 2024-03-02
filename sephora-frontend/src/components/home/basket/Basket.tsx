import {Box, Button, Grid, Modal, Stack, Typography} from "@mui/material";
import "./basket.scss"
import {useTranslation} from "react-i18next";
import {newPieces} from "../data";
import BasketProduct from "../products/basketProduct/BasketProduct";
import React from "react";
import Product from "../products/Product";
import icon2 from "../../../assets/images/icon2.svg";
import { CalculateProductTotal } from "../../../common/calculateTotal";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export function Basket () {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {t} = useTranslation();

    const products = [newPieces[0],newPieces[2]];

    const discount = 0;

    const total: number = CalculateProductTotal(products);

    return (
        <div>
            <Button disableTouchRipple onClick={handleOpen}><img src={icon2} alt="" /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                    sx={style}
                    className="containerBasket"
                    style={{maxWidth: "100%", justifyContent: "center", margin: '20px 0'}}
                >
                    <Typography className="title">{t('basket')}</Typography>

                    <Box className='line'/>
                    
                    <Box margin={4} >
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
                                    <Button href="/order" className="button">{t('basket/order.toOrder')}</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    {(products.length<=3 && window.outerWidth>=1600) && (
                        <Box margin={4}>
                            <Typography className="recProductsTitle">{t('basket.recomProducts')}</Typography>
                            <Grid container spacing={2} columns={15}>
                                {newPieces.map((product) => (
                                    <Grid item xs={7.5} sm={5} md={3} lg={3} >
                                        <Product key={product.id} piece={product}/>
                                    </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    )}
                </Box>
            </Modal>
        </div>
    );
}