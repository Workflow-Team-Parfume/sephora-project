import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Products from "./products/Products";
import {newProducts, Populars, Reviews1, Reviews2, Reviews3, Banner1, Banner2, Banner3, recCategories, Perfume } from "./mainPage/data";
import Reviews from "./mainPage/reviews/Reviews";
import Banner from "./mainPage/banner/Banner";
import FullSizeBanner from "./mainPage/banner/FullSizeBanner";
import RecCategories from './mainPage/recCategories/RecCategories';
import MainBanner from './mainPage/banner/MainBanner';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" to={"/admin"}>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

const HomePage = () => {
    return (
       <Container style={{padding: '0', maxWidth: '100%'}}>
        <MainBanner/>
        <Stack spacing={19} style={{margin: '0 100px'}}>

        <Products title='Новинки' products={newProducts} link='' isNew={true}/>
        <Products title='Популярне' products={Populars} link=''/>
        <Banner banner={Banner1} color="#688F74"/>
        <Products title="Парфуми" products={Perfume} link=''/>
        <Banner banner={Banner2} color="#820000" isLeft={true}/>
        <RecCategories title="Рекомендовані категорії" categories={recCategories}/>
        <FullSizeBanner banner={Banner3}/>
        <Reviews title="Відгуки наших покупців про кометику та догляд" reviews={[Reviews1,Reviews2,Reviews3]}/>

        </Stack>
       </Container>
      );
}
export default HomePage;