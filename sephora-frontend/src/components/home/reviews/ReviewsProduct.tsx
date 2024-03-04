import {Avatar, Button, Container, Pagination, Rating, Stack, TextField, Typography} from "@mui/material";
import "./reviews.scss"
import StarIcon from "@mui/icons-material/Star";
import React, {useState} from "react";
import RatingDto from "../../../models/rating/RatingDto.ts";
import textFieldStyle from '../../../common/textFieldStyle.ts';
import { useTranslation } from "react-i18next";


const Reviews: React.FC<{ title: string, reviews: RatingDto[] }>
    = ({title, reviews}) => {
    const {t} = useTranslation(); 

    const itemsPerPage = 2; // Кількість елементів на сторінці
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentReviews = reviews.slice(startIndex, endIndex);
    
    const [name, setName] = useState<string>('');
    const [rate, setRate] = React.useState<number | null>(0);
    const [comment, setComment] = useState<string>('');

    return (
        <Container className="reviews" style={{maxWidth: "90%"}} sx={{marginX: '50%'}}>
            <Typography className="title">{title}</Typography>

            <Container sx={{py: 8}}>
                <Stack spacing={2} >
                    <Stack direction='row' spacing={4} alignItems='center'>
                        <TextField
                            fullWidth
                            sx={{ ...textFieldStyle }} 
                            placeholder={t('details.reviews.name')}
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        />
                        <Rating
                            name="hover-feedback"
                            value={rate}
                            onChange={(_event, newValue) => {
                                setRate(newValue);
                            }}
                            precision={0.5}
                            icon={
                                <StarIcon style={{color: '#000000', fontSize: '29px'}}
                                />}
                            emptyIcon={
                                <StarIcon style={{color: '#9D9D9D', fontSize: '29px'}} fontSize="inherit"/>
                            }
                        />
                    </Stack>
                    <TextField
                        sx={{ ...textFieldStyle }} 
                        placeholder={t('details.reviews.comment')}
                        value={comment}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
                        multiline
                        rows={4}
                    />
                    <Stack alignItems='center'>
                        <Button className="addComment">{t('details.reviews.addComment')}</Button>
                    </Stack>
                </Stack>
                <Stack spacing={5}>
                    {currentReviews.map((review) => (
                        <Stack spacing={3.5}>
                            <Stack justifyContent='space-between' direction="row">
                                <Stack spacing={4} direction="row">
                                    {review.userPfp != null ?
                                        <Avatar alt={review.userName} src={review.userPfp}/>
                                        : <Avatar sx={{width: '96px', height: '96px', bgcolor: '#D9D9D9'}}> </Avatar>
                                    }
                                    <Stack spacing={1} justifyContent='center'>
                                        <div className="userName">{review.userName}</div>
                                        <Rating
                                            name="hover-feedback"
                                            value={review.rate}
                                            precision={0.5}
                                            readOnly
                                            icon={<StarIcon style={{color: '#000000', fontSize: '29px'}}/>}
                                            emptyIcon={<StarIcon style={{color: '#9D9D9D', fontSize: '29px'}}
                                                                 fontSize="inherit"/>}
                                        />
                                    </Stack>
                                </Stack>
                                <Typography className="review" style={{display: 'flex', alignItems: 'center'}}>
                                    {review.updatedAt.toLocaleString()}
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
                        sx={{display: 'flex'}}
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
