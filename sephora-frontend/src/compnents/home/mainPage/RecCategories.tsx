import { Button, Container, Grid, Typography } from "@mui/material";
import { IRecCategory } from "../types";
import "./products.scss"

export function RecCategories (title:string, categories:IRecCategory[]) {
  return (
    <Container style={{maxWidth:"100%", justifyContent:"center"}}>
          <Typography id="title">{title}</Typography>

          <Container sx={{ pt: 8, m:0}} style={{maxWidth:"100%"}} >
            <Grid container spacing={2.5} >
            {categories.map((category) => (
              <Grid item lg={3}>

              <Button id="categories" variant="outlined" href={category.link}>
                {category.name}
              </Button>
              </Grid>
            ))}
            </Grid>
          </Container>

        </Container>
    );
}