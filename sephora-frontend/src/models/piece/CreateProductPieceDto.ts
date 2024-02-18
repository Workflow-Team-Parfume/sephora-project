export default interface CreateProductPieceDto {
    get inStock(): number | null;
    get productId(): number;
    get price(): number;
    get amountId(): number;
    get isBottledParfume(): boolean;
    get productPictures() : File[];
}
