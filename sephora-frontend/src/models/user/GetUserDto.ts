import RatingDto from "../rating/RatingDto.ts";
import OrderDto from "../order/OrderDto.ts";
import PictureDto from "../picture/PictureDto.ts";

export default interface GetUserDto {
    get id(): string;
    get userName(): string;
    get email(): string;
    get profilePicture(): PictureDto | null;
    get phoneNumber(): string | null;
    get roles(): string[];
    get registrationDate(): Date;
    get ratings(): RatingDto[];
    get orders(): OrderDto[];
}
