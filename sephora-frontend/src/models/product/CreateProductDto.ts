export default interface CreateProductDto {
    get name(): string;
    get description(): string | null;
    get active(): boolean;
    get brandId(): number;
    get categoryId(): number;
}
