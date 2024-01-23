
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export function Stars (rating:number) {
  return (
    <Rating
    name="hover-feedback"
    value={rating}
    precision={0.5}
    readOnly
    icon={<StarIcon style={{ color: 'black' }} />}
    emptyIcon={<StarIcon style={{ color: '#9D9D9D' }} fontSize="inherit" />}
  />
    );
}