import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export function Stars (rating:number) {
  return (
    <Rating
    name="hover-feedback"
    value={rating}
    precision={0.5}
    readOnly
    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  />
    );
}