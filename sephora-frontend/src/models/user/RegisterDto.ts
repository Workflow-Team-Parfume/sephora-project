export default interface RegisterDto {
    get userName(): string;
    get email(): string;
    get password(): string;
    get passwordConfirmation(): string;
    get phoneNumber(): string;

    get profilePicture(): File | null;
}
