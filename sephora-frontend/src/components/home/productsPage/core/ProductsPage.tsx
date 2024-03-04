import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Grid,
    List,
    ListItemButton,
    Pagination,
    Stack,
    Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import Product from "../../products/Product.tsx";
import Filters from "../../filters/Filters.tsx";
import {IFilter} from "../../filters/types.ts";
import React, {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './productsPage.scss'
import ProductPieceDto from "../../../../models/piece/ProductPieceDto.ts";
import http_common from "../../../../http_common.ts";
import PagedList from "../../../../models/pagedlist/PagedList.ts";
import SortingOrder, {Directions, Orders} from "./SortingOrder.ts";

const itemsPerPage = 9;

const ProductsPage: React.FC<{
    title: string,
    link: string,
    mainFilter: IFilter,
    filters: IFilter[],
    defaultOrder: SortingOrder | null | undefined,
    defaultDirection: SortingOrder | null | undefined
}> = ({title, mainFilter, filters, link, defaultOrder = null, defaultDirection = null}) => {
    const {t} = useTranslation();
    const [products, setProducts] = useState<PagedList<ProductPieceDto>>();

    const [currentPage, setCurrentPage] = useState(1);

    const [order, setOrder] = useState<SortingOrder>(
        defaultOrder ?? Orders[1]
    );
    const handleToggle1 = (value: SortingOrder) => () => {
        setOrder(value);
    };
    const [direction, setDirection] = useState<SortingOrder>(
        defaultDirection ?? Directions[1]
    );
    const handleToggle2 = (value: SortingOrder) => () => {
        setDirection(value);
    };

    useEffect(() => {
        console.log(`${link}&size=${itemsPerPage}&page=${currentPage}&sort=${order.value} ${direction.value}`)
        http_common.get(
            `${link}
            &size=${itemsPerPage}
            &page=${currentPage}
            &sort=${order.value} ${direction.value}
            `)
            .then(r => setProducts(r.data))
            .catch(e => console.error(e));
    }, [currentPage, link, order.value, direction.value]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const [expanded, setExpanded] = useState<boolean>(false);

    const handleChange = (panel: boolean) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return products
        ? (
            <Container className="productsPage"
                       style={{maxWidth: "100%", justifyContent: "center", margin: '40px 0'}}>
                <Grid container>
                    <Grid item lg={3}>
                        <Stack className='filter' spacing={2.5} sx={{padding: '0 16px'}}>
                            <Typography className='filterName'>
                                {mainFilter.name}
                            </Typography>
                            {mainFilter.filters.map((filter, i) => (
                                <Typography key={i} className='filterText'>{filter}</Typography>
                            ))}
                        </Stack>
                        <Filters filters={filters}/>
                    </Grid>
                    <Grid item lg={9}>
                        <Container style={{maxWidth: "100%", justifyContent: "center"}}>
                            <Typography className="title">{title}</Typography>
                            <Stack sx={{alignItems: 'end'}}>
                                <Accordion className='sort' expanded={expanded} onChange={handleChange(true)}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className='sortName'>
                                            {t('sortBy.title')}
                                            <span className="checked">
                                                {t(order.key)}
                                            </span>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{p: "0", margin: "0 40px"}}>
                                        <List component="div" role="list">
                                            {Orders.map((value, i) => (
                                                <ListItemButton
                                                    key={i}
                                                    role="listitem"
                                                    onClick={handleToggle1(value)}
                                                    sx={{p: "0"}}>
                                                    <Typography className={
                                                        order == value
                                                            ? 'checked'
                                                            : 'check'
                                                    }>{t(value.key)}</Typography>
                                                </ListItemButton>
                                            ))}
                                            {Directions.map((value, i) => (
                                                <ListItemButton
                                                    key={i}
                                                    role="listitem"
                                                    onClick={handleToggle2(value)}
                                                    sx={{p: "0"}}>
                                                    <Typography className={
                                                        direction == value
                                                            ? 'checked'
                                                            : 'check'
                                                    }>{t(value.key)}</Typography>
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </Stack>

                            <Container sx={{pt: 5, pb: 4, m: 0}} style={{maxWidth: "100%"}}>
                                <Grid container spacing={2}>
                                    {products?.items.map((piece, i) => (
                                        <Grid key={i} item xs={12} sm={6} lg={4}>
                                            <Product piece={piece}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>

                            {/*<Button className={`link${products?.hasNextPage || ' invisible'}`} variant="outlined">*/}
                            {/*    {t('common.button.moreProducts')}*/}
                            {/*</Button>*/}
                            <Stack sx={{margin: '40px', alignItems: 'center'}}>
                                <Pagination
                                    sx={{display: 'flex'}}
                                    count={products?.totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                />
                            </Stack>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        )
        : (
            <>{/*TODO: Add spinner*/}</>
        );
}

export default ProductsPage;
