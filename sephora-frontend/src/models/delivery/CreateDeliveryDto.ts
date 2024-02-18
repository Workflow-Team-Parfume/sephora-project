export default interface CreateDeliveryDto {
    get address(): string;
    get provider(): string;

    // TODO: Consider adding the following properties:
    // get city(): string;
    // get zipCode(): string;
    // get country(): string;
    // get phoneNumber(): string;
    // get email(): string;
    // get createdAt(): Date;
}
