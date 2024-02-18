export default interface CreateRatingDto {
    get comment(): string | null;
    get rate(): number; // 1-5
    get productId(): number;
}
