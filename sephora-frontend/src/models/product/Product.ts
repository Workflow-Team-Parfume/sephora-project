import Brand from "../Brand.ts";
import Rating from "../Rating.ts";
import ProductPiece from "./ProductPiece.ts";

export default interface Product {
    get id(): number;

    get name(): string;
    get description(): string;
    get image(): string;

    get brand(): Brand;
    get category(): Brand;

    get pieces(): ProductPiece[];

    get ratings(): Rating[];
    get averageRating(): number;

    get createdAt(): Date;
    get isNew(): boolean;
}
