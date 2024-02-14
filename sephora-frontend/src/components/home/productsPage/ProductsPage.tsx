import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, List, ListItemButton, Pagination, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IProduct } from "../products/types";
import Product from "../products/Product";
import Filters from "../filters/Filters";
import { IFilter } from "../filters/types";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './productPage.scss'

const ProductsPage : React.FC<{title:string, products:IProduct[],mainFilter:IFilter, filters:IFilter[]}>
= ({ title, products, mainFilter, filters }) => {
  
  const { t } = useTranslation();

  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    event;
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange =
    (panel: boolean) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      event;
    };
    const sort1:string[] = [t('sortBy.price'),t('sortBy.popularity'),t('sortBy.date')];
    const sort2:string[] = [t('sortBy.toLow'),t('sortBy.toHigh')];

    const [checked1, setChecked1] = useState<string>(sort1[1]);
    const handleToggle1 = (value: string) => () => {
        setChecked1(value);
      };
    const [checked2, setChecked2] = useState<string>(sort2[1]);
    const handleToggle2 = (value: string) => () => {
        setChecked2(value);
      };
    

  return (
    <Container style={{ maxWidth:"100%", justifyContent:"center", margin:'40px 0'}}>
        <Grid container>

        <Grid item lg={3}>
            <Stack spacing={2.5} sx={{padding: '0 16px'}}>
                <Typography id='filterName'>
                    {mainFilter.name}
                </Typography>
                {mainFilter.filters.map((filter) => (<Typography id='filterText'>{filter}</Typography>))}
            </Stack>
                <Filters filters={filters}/>
        </Grid>
        <Grid item lg={9}>

        <Container style={{ maxWidth:"100%", justifyContent:"center"}}>
            <Typography id="title">{title}</Typography>
<Stack sx={{alignItems:'end'}}>
            <Accordion className='sort' expanded={expanded === true} onChange={handleChange(true)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon /> }
        >
          <Typography className='sortName'>
            {t('sortBy.title')} <span className="checked">{checked1}</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: "0", margin: "0 40px" }} >
            <List component="div" role="list">
           {sort1.map((value) => (
               <ListItemButton
               key={value}
               role="listitem"
               onClick={handleToggle1(value)}
               sx={{p:"0"}}
            >
                <Typography className={checked1==value ? 'checked' : 'check'}>{value}</Typography>
            </ListItemButton>
            ))}
            {sort2.map((value) => (
                <ListItemButton
                key={value}
                role="listitem"
                onClick={handleToggle2(value)}
                sx={{p:"0"}}
                >
                <Typography className={checked2==value ? 'checked' : 'check'}>{value}</Typography>
                </ListItemButton>
                ))}
           </List>
           </AccordionDetails>
           </Accordion>
           </Stack>

            <Container sx={{ pt: 5, pb: 4, m:0}} style={{maxWidth:"100%"}} >
                <Grid container spacing={2} >
                {currentProducts.map((product) => (
                    
                    <Grid item xs={12} sm={6} lg={4}>
                        <Product product={product} />
                    </Grid>
                    ))}
                </Grid>
            </Container>

            <Button id="link" variant="outlined" >{t('common.button.moreProducts')}</Button>
            <Stack sx={{margin: '40px', alignItems: 'center'}}>
                <Pagination
                sx={{display:'flex'}}
                count={Math.ceil(products.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                />
            </Stack>
        </Container>
        </Grid>
        </Grid>
    </Container>
    );
}

export default ProductsPage;