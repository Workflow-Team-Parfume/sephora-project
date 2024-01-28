import { Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { IReview } from "./types";
import "./reviews.scss"
import StarIcon from "@mui/icons-material/Star";
        

const Reviews : React.FC<{title:string, reviews:IReview[]}> 
= ({title, reviews}) => {
  return (
    <Container style={{maxWidth:"100%"}} >
          <Typography id="title">{title}</Typography>

          <Container sx={{ py: 8 }} style={{maxWidth:"100%"}} >
            <Grid container spacing={2.5} >
            {reviews.map((review) => (
              <Grid item xs={12} sm={6} md={4} spacing={1.5}>
                <Stack spacing={3.5}>
                    <Stack spacing={4} direction="row">
                        <img className="userImage" src={review.userImage} alt={review.userName}/>
                        <Stack spacing={1}>
                            <div className="userName">{review.userName}</div>
                            <Rating
                              name="hover-feedback"
                              value={review.rating}
                              precision={0.5}
                              readOnly
                              icon={<StarIcon style={{ color: '#808080', fontSize:'29px' }} />}
                              emptyIcon={<StarIcon style={{ color: '#D9D9D9', fontSize:'29px' }} fontSize="inherit" />}
                            />
                        </Stack>
                    </Stack>    
                    <div className="review">
                        {review.review}
                    </div>
                </Stack>

                <Stack direction="row" spacing={4}>
                    <img className="productImage" src={review.productImage} alt={review.productName}/>
                    <Stack style={{margin:"48px 37px"}}>
                        <div className="productName">{review.productName}</div>
                        <div className="productCategory">{review.productCategory}</div>
                    </Stack>
                </Stack>
              </Grid>
            ))}
            </Grid>
          </Container>
        </Container>
    );
}

export default Reviews;