import BrandDto from "../brand/BrandDto.ts";
import RatingDto from "../rating/RatingDto.ts";
import ProductPieceDto from "../piece/ProductPieceDto.ts";
import AmountDto from "../amount/AmountDto.ts";
import CategoryDto from "../category/CategoryDto.ts";

export default interface ProductDto {
    get id(): number;

    get name(): string | null;
    get description(): string;
    get active(): boolean;

    get brand(): BrandDto;
    get category(): CategoryDto;

    get pieces(): ProductPieceDto[];
    get ratings(): RatingDto[];
    get averageRating(): number;

    get volumes(): AmountDto[];

    get createdAt(): Date;
    get isNew(): boolean;
}
