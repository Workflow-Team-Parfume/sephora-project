import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Products from "./mainPage/Products";
import {newProducts, Populars, Reviews1, Reviews2, Reviews3, Banner1, Banner2, Banner3, recCategories, Perfume } from "./mainPage/data";
import Reviews from "./mainPage/reviews/Reviews";
import Banner from "./mainPage/banner/Banner";
import Banner_2 from "./mainPage/banner/Banner2";
import RecCategories from './mainPage/RecCategories';
// import { RecCategories } from "./mainPage/RecCategories";


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
       <Container style={{maxWidth: '100%'}}>
        <Stack spacing={25} style={{width: "100%"}}>

        <Products title='Новинки' products={newProducts} link='' isNew={true}/>
        <Products title='Популярне' products={Populars} link=''/>
        <Banner banner={Banner1} color="#688F74"/>
        <Products title="Парфуми" products={Perfume} link=''/>
        <Banner banner={Banner2} color="#820000" isLeft={true}/>
        <RecCategories title="Рекомендовані категорії" categories={recCategories}/>
        {/* {RecCategories("Рекомендовані категорії",recCategories)} */}
        <Banner_2 banner={Banner3}/>
        <Reviews title="Відгуки наших покупців про кометику та догляд" reviews={[Reviews1,Reviews2,Reviews3]}/>
        </Stack>
       </Container>
      );
}
export default HomePage;