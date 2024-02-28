export default interface EditProductPieceDto {
    get id(): number;
    get inStock(): number | null;
    get price(): number;
    get amountId(): number;
    get isBottledParfume(): boolean;

    get newPhotos() : File[];
    get deletePhotos() : number[];
}
