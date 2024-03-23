import {Button, Grid, Pagination, Stack} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import ProductPieceDto from "../../../../models/piece/ProductPieceDto";
// import PagedList from "../../../../models/pagedlist/PagedList";
// import http_common from "../../../../http_common";
import Product from "../../products/Product";
import { newPieces } from "../../data";

const Wishlist = () => {
    const {t} = useTranslation();
    const products:ProductPieceDto[] = newPieces;
    // const [products, setProducts] = useState<PagedList<ProductPieceDto>>();

    // useEffect(() => {
    //     http_common.get("pieces?size=4&page=1&select=perfume")
    //         .then(r => setProducts(r.data))
    //         .catch(console.error);
    // });

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        event;
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);


    return (
        <Stack className="wishlist" style={{justifyContent: "center", margin: "auto 10%"}}>

            {currentProducts.length != 0 ?
                <Stack justifyContent="center">
                    <Stack sx={{pb: 4, m: 0}} >
                            <Grid container spacing={2}>
                                {currentProducts?.map((piece) => (
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <Product piece={piece}/>
                                    </Grid>
                                ))}
                            </Grid>
                        
                    </Stack>

                    <Button className="link" sx={{margin:'auto'}}>{t('common.button.moreProducts')}</Button>
                    <Stack sx={{margin: '40px', alignItems: 'center'}}>
                        <Pagination
                            sx={{display: 'flex'}}
                            count={Math.ceil(products.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </Stack>
                </Stack>
                    :
                <Stack className="listIsEmpty" alignItems='center'>
                    {t('profile.wishlist.listIsEmpty')}
                </Stack>
            }
        </Stack>
    );
}

export default Wishlist;
