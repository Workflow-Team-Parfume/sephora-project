import RatingDto from "../rating/RatingDto.ts";
import OrderDto from "../order/OrderDto.ts";

export default interface GetUserDto {
    get id(): string;
    get userName(): string;
    get email(): string;
    get profilePicture(): string;
    get phoneNumber(): string | null;
    get roles(): string[];
    get registrationDate(): Date;
    get ratings(): RatingDto[];
    get orders(): OrderDto[];
}
