import { Avatar, Container, Pagination, Rating, Stack, Typography } from "@mui/material";
import { IReview } from "./types";
import "./reviews.scss"
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import RatingDto from "../../../models/rating/RatingDto.ts";
        

const Reviews : React.FC<{title:string, reviews:RatingDto[]}>
= ({title, reviews}) => {
  const itemsPerPage = 2; // Кількість елементів на сторінці
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    event;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentReviews = reviews.slice(startIndex, endIndex);

  return (
    <Container className="reviews" style={{maxWidth:"90%"}} >
          <Typography className="title">{title}</Typography>

          <Container sx={{ py: 8 }} style={{maxWidth:"100%"}} >
            <Stack spacing={5} >
            {currentReviews.map((review) => (
                <Stack spacing={3.5}>
                    <Stack justifyContent='space-between' direction="row">
                    <Stack spacing={4} direction="row">
                      {review.userPfp != null ?
                        <Avatar alt={review.userName} src={review.userPfp} />
                        : <Avatar sx={{ width: '96px', height: '96px', bgcolor: '#D9D9D9' }}> </Avatar>
                        }
                        <Stack spacing={1} justifyContent='center'>
                            <div className="userName">{review.userName}</div>
                            <Rating
                              name="hover-feedback"
                              value={review.rate}
                              precision={0.5}
                              readOnly
                              icon={<StarIcon style={{ color: '#000000', fontSize:'29px' }} />}
                              emptyIcon={<StarIcon style={{ color: '#9D9D9D', fontSize:'29px' }} fontSize="inherit" />}
                            />
                        </Stack>
                    </Stack>    
                        <Typography className="review" style={{ display: 'flex', alignItems: 'center' }}>
                        {review.date}
                    </Typography>
                    </Stack>    
                    <div className="review">
                        {review.comment}
                    </div>
                </Stack>
            ))}
            </Stack>
            <Stack 
              sx={{margin: '40px', alignItems: 'center'}}>
              
            <Pagination
            sx={{display:'flex'}}
              count={Math.ceil(reviews.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              />
              </Stack>
          </Container>
        </Container>
    );
}

export default Reviews;
