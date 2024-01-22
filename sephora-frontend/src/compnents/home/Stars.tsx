import { Container, Grid, Stack, Typography } from "@mui/material";

import Star1 from "../image/reviews/Star 1.png"
import Star5 from "../image/reviews/Star 5.png"

function Star(is:boolean=false,star1:string,star2:string){
    if(is) return(<img src={star1}/>)
    else return(<img src={star2}/>)
}

export function Stars (rating:number,star1:string,star2:string) {
  return (
    <Container style={{padding:0}}>
        {Star(1<=rating,star1,star2)}
        {Star(2<=rating,star1,star2)}
        {Star(3<=rating,star1,star2)}
        {Star(4<=rating,star1,star2)}
        {Star(5<=rating,star1,star2)}
    </Container>
    );
}