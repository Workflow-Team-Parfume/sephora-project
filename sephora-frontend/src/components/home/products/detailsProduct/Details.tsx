import { Button, Container, MenuItem, Rating, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import "./details.scss"
import StarIcon from "@mui/icons-material/Star";
import Reviews from "../../reviews/ReviewsProduct";
import { useTranslation } from "react-i18next";
import Products from "../Products";
import { especiallyForYou, similarProducts } from "../../data";
// import { useEffect, useState } from "react";
import { useState } from "react";

import novaPoshta from "../../../../assets/images/novaPoshta.png";
import ukrPoshta from "../../../../assets/images/ukrPoshta.png";
import meest from "../../../../assets/images/meest.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IProduct } from "../types";
// import { useParams } from "react-router-dom";
// import http_common from "../../../../http_common";
        

const Details : React.FC<{product:IProduct}> 
= ({product}) => {
  // const params = useParams();
  //   const productId = Number(params.id);
  //   const [product, setProduct] = useState<IProduct | undefined>();

  //   useEffect(() => {
  //       http_common.get<IProduct>(`api/Products/${productId}`)
  //           .then(resp => {
  //               console.log(resp.data);
  //               setProduct(resp.data);
  //           })
  //   }, []);
  const { t } = useTranslation();
  
  const [click, setClick] = useState("description");

  const handleChangeClick = (click: string) => {
    setClick(click);
  };

  function Click(){
    if(click == 'description'){
      return <Typography className="description">{product.description}</Typography>
    }
    else if (click == 'characteristic'){
      return <Stack spacing={1}>
        {(product.characteristics).map((characteristic)=>(
          <Stack direction='row' flexWrap='wrap'> <Typography className="characteristic charactName">{characteristic.name + ':'}</Typography>
           {(characteristic.characteristics).map((charact)=>(
          <Typography className="characteristic">{' ' +charact}{characteristic.characteristics.at(characteristic.characteristics.length-1)==charact ? '' : ','}</Typography>
           ))}
          </Stack>
        ))}
      </Stack>
    }
    else{
      return <Stack>
        <Typography className="paymentAndDelivery">1. {t('details.paymentAndDelivery.1')}</Typography>
        <Typography className="paymentAndDelivery">2. {t('details.paymentAndDelivery.2')}</Typography>
        <Typography className="paymentAndDelivery">3. {t('details.paymentAndDelivery.3')}</Typography>
        <Typography className="paymentAndDelivery">4. {t('details.paymentAndDelivery.4')}</Typography>
        <Stack justifyContent='center' direction='row' spacing={4} sx={{height:'66px'}}>
          <img alt="nova poshta" src={novaPoshta}/>
          <img alt="ukr poshta" src={ukrPoshta}/>
          <img style={{height:'60px'}} alt="meest" src={meest}/>
        </Stack>
      </Stack>
    }
  }

  const [volume, setVolume] = useState(product.volume?.at(0)?.volume);
  const [price, setPrice] = useState(product.volume?.at(0)?.price);

  const handleChangeVolume = (event: SelectChangeEvent) => {
    setVolume(event.target.value);
    setPrice(product.volume.find(v => v.volume==event.target.value)?.price)
  };
  
  const [image, setImage] = useState(product.images.at(0));

  const handleChangeImage = (image: string) => {
    setImage(product.images.find(i => i==image));
  };

  return (
    <Container style={{maxWidth:"90%",alignItems:'center'}}>
    <Container style={{maxWidth:"100%",alignItems:'center'}} className="productDetails">

      <Stack direction='row' spacing={2.5}>
        <Stack style={{width: '100px'}} spacing={2.5}>
          {product.images.map((img) => (
            <Button onClick={() => handleChangeImage(img)} >
              <img className={img==image ? 'imageClick' : 'image'} alt={product.name} src={img}/>
            </Button>
            ))}
        </Stack>

        <img style={{width:'600px'}} src={image} alt={product.name}/>

        <Stack spacing={2.5}>
          <Stack>
          <Typography className="productName">{product.name}</Typography>
          <Typography className="productCategory">{product.categoryName}</Typography>
          </Stack>
          <Rating
            name="hover-feedback"
            value={product.rating}
            precision={0.5}
            readOnly
            icon={<StarIcon style={{ color: 'black' }} />}
            emptyIcon={<StarIcon style={{ color: '#9D9D9D' }} fontSize="inherit" />}
          />
          <Typography className="productCode">{t('details.productCode')} {product.codeProduct}</Typography>
          <Typography className="productPrice">{price}грн</Typography>

          {product.volume.length!=0 ? 
          <Select
            sx={{width:'450px'}}
            value={volume}
            onChange={handleChangeVolume}
            displayEmpty
            >
            {product.volume?.map((volume)=>(
              <MenuItem value={volume.volume}>
                <Typography className="productVolume">{volume.volume}</Typography>
                </MenuItem>
              ))}
          </Select>
          : <></>
          }

          <Stack spacing={1} sx={{width:'450px'}} style={{marginTop: '40px'}}>
            <Button className="butFavorites">{t('details.addToFavorites')}   <FavoriteBorderIcon style={{marginLeft:'10px'}}/></Button>
            <Button className="butBuy">{t('details.buy')}</Button>
          </Stack>
        </Stack>
      </Stack>


      <Stack direction='row' spacing={10} style={{maxWidth:"80%", margin:'70px auto'}}>
        <Stack sx={{width:'220px'}} justifyContent='center' spacing={3}>
          <Button onClick={() => handleChangeClick('description')} className={click=='description' ? 'clickLeft' : 'clickDisable clickLeft'}>{t('details.description')}</Button>
          <Button onClick={() => handleChangeClick('characteristic')} className={click=='characteristic' ? 'clickLeft' : 'clickDisable clickLeft'}>{t('details.characteristics')}</Button>
          <Button onClick={() => handleChangeClick('paymentAndDelivery')}className={click=='paymentAndDelivery' ? 'clickLeft' : 'clickDisable clickLeft'}>{t('details.paymentAndDelivery')}</Button>
        </Stack>
        <Stack className="click">
          {Click()}
        </Stack>
      </Stack>
    </Container>


      <Stack spacing={7} style={{alignItems:'center'}}>
          <Products title={t('common.title.similarProducts')} products={similarProducts}/>
          <Reviews title={t('common.title.reviews')} reviews={product.reviews}></Reviews>
          <Products title={t('common.title.especiallyForYou')} products={especiallyForYou}/>
      </Stack>
    </Container>
    );
}

export default Details;