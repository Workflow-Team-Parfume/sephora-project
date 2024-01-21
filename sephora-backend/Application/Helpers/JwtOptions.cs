namespace CleanArchitecture.Application.Helpers;

public class JwtOptions
{
    public string? Issuer { get; init; }
    public string? Key { get; init; }
    public int Lifetime { get; init; }

    // TODO: add audience validation in the future (and RSA based tokens)
    // public string? Audience { get; init; }

    public bool AreValid
        => !string.IsNullOrWhiteSpace(Issuer) &&
           !string.IsNullOrWhiteSpace(Key) &&
           Lifetime > 0;
}