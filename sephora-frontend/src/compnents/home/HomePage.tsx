import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeHeader from "./HomeHeader";
import { Products } from "./mainPage/Products";
import {newProducts, Populars, Reviews1, Reviews2, Reviews3, Banner1, Banner2, Banner3, recCategories, Perfume } from "./mainPage/data";
import { Reviews } from "./mainPage/reviews/Reviews";
import { Banner } from "./mainPage/banner/Banner";
import { Banner_2 } from "./mainPage/banner/Banner2";
import { RecCategories } from "./mainPage/RecCategories";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to={"/admin"}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const HomePage = () => {
    return (
       <Container style={{maxWidth: '100%'}}>
        <Stack spacing={25} style={{width: "100%"}}>

        {Products("Новинки",newProducts,"",true)}
        {Products("Популярне",Populars,"")}
        {Banner(Banner1,"#688F74")}
        {Products("Парфуми",Perfume,"")}
        {Banner(Banner2, "#820000",true)}
        {RecCategories("Рекомендовані категорії",recCategories)}
        {Banner_2(Banner3)}
         {Reviews("Відгуки наших покупців про кометику та догляд",([Reviews1,Reviews2,Reviews3]))}
        </Stack>
       </Container>
        // <ThemeProvider theme={defaultTheme}>
        //   <CssBaseline />
        //   <HomeHeader />
        //   <main>
        //     {/* Hero unit */}
        //     <Box
        //       sx={{
        //         bgcolor: 'background.paper',
        //         pt: 8,
        //         pb: 6,
        //       }}
        //     >
        //       <Container maxWidth="sm">
        //         <Typography
        //           component="h1"
        //           variant="h2"
        //           align="center"
        //           color="text.primary"
        //           gutterBottom
        //         >
        //           Album layout
        //         </Typography>
        //         <Typography variant="h5" align="center" color="text.secondary" paragraph>
        //           Something short and leading about the collection below—its contents,
        //           the creator, etc. Make it short and sweet, but not too short so folks
        //           don&apos;t simply skip over it entirely.
        //         </Typography>
        //         <Stack
        //           sx={{ pt: 4 }}
        //           direction="row"
        //           spacing={2}
        //           justifyContent="center"
        //         >
        //           <Button variant="contained">Main call to action</Button>
        //           <Button variant="outlined">Secondary action</Button>
        //         </Stack>
        //       </Container>
        //     </Box>
        //     <Container sx={{ py: 8 }} maxWidth="md">
        //       {/* End hero unit */}
        //       <Grid container spacing={4}>
        //         {cards.map((card) => (
        //           <Grid item key={card} xs={12} sm={6} md={4}>
        //             <Card
        //               sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        //             >
        //               <CardMedia
        //                 component="div"
        //                 sx={{
        //                   // 16:9
        //                   pt: '56.25%',
        //                 }}
        //                 image="https://picsum.photos/seed/picsum/200/300"
        //               />
        //               <CardContent sx={{ flexGrow: 1 }}>
        //                 <Typography gutterBottom variant="h5" component="h2">
        //                   Heading
        //                 </Typography>
        //                 <Typography>
        //                   This is a media card. You can use this section to describe the
        //                   content.
        //                 </Typography>
        //               </CardContent>
        //               <CardActions>
        //                 <Button size="small">View</Button>
        //                 <Button size="small">Edit</Button>
        //               </CardActions>
        //             </Card>
        //           </Grid>
        //         ))}
        //       </Grid>
        //     </Container>
        //   </main>
        //   {/* Footer */}
        //   <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        //     <Typography variant="h6" align="center" gutterBottom>
        //       Footer
        //     </Typography>
        //     <Typography
        //       variant="subtitle1"
        //       align="center"
        //       color="text.secondary"
        //       component="p"
        //     >
        //       Something here to give the footer a purpose!
        //     </Typography>
        //     <Copyright />
        //   </Box>
        //   {/* End footer */}
        // </ThemeProvider>
      );
}
export default HomePage;