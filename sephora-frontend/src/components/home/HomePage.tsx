import {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Products from "./products/Products";
import {Reviews1, Reviews2, Reviews3, Banner1, Banner2, Banner3} from "./data";
import Reviews from "./reviews/MainPageReviews";
import Banner from "./mainPage/banner/Banner";
import FullSizeBanner from "./mainPage/banner/FullSizeBanner";
import RecCategories from './mainPage/recCategories/RecCategories';
import MainBanner from './mainPage/banner/MainBanner';
import {useTranslation} from 'react-i18next';
import http_common from "../../http_common.ts";
import ProductPiece from "../../models/product/ProductPiece.ts";
import PagedList, {DefaultPagedList} from "../../models/pagedlist/PagedList.ts";

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

type HomePageProps = {
    novelty: PagedList<ProductPiece>,
    popular: PagedList<ProductPiece>,
    perfumes: PagedList<ProductPiece>,
}

const defaultProps: HomePageProps = {
    novelty: DefaultPagedList,
    popular: DefaultPagedList,
    perfumes: DefaultPagedList,
}

const HomePage = () => {
    const [prods, setProds] = useState<HomePageProps>(defaultProps);
    useEffect(() => {
        // fetch novelties
        http_common.get("pieces?size=4&page=1&sort=createdAt,desc")
            .then(res => setProds({...prods, novelty: res.data}))
            .catch(err => console.log(err));

        // fetch populars
        http_common.get("pieces?size=4&page=1&sort=rating,desc")
            .then(res => setProds({...prods, popular: res.data}))
            .catch(err => console.log(err));

        // fetch perfumes
        http_common.get("pieces?size=4&page=1&select=perfume")
            .then(res => setProds({...prods, perfumes: res.data}))
            .catch(err => console.log(err));
    }, [prods]);

    const {t} = useTranslation();
    const recCategories = ([
        {name: t('recCategories.showerAndBath'), link: ""},
        {name: t('recCategories.accessories'), link: ""},
        {name: t('recCategories.vitamins'), link: ""},
        {name: t('recCategories.face'), link: ""},
    ])

    return (
        <Container style={{padding: '0', maxWidth: '100%'}}>
            <MainBanner/>
            <Stack spacing={19} style={{margin: '0 100px'}}>

                <Products
                    title={t('common.title.novelty')}
                    products={prods.novelty} link=''
                />
                <Products
                    title={t('common.title.popular')}
                    products={prods.popular} link=''
                />
                <Banner banner={Banner1} color="#688F74"/>
                <Products
                    title={t('common.title.perfumes')}
                    products={prods.perfumes} link=''
                />
                <Banner banner={Banner2} color="#820000" isLeft={true}/>
                <RecCategories
                    title={t('common.title.recommendedCategories')}
                    categories={recCategories}
                />
                <FullSizeBanner banner={Banner3}/>
                <Reviews
                    title={t('common.title.reviewsOfOurCustomersAboutCosmeticsAndCare')}
                    reviews={[Reviews1, Reviews2, Reviews3]}
                />

            </Stack>
        </Container>
    );
}
export default HomePage;
