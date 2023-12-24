namespace Core.Helpers;

public class JwtOptions
{
    public string Issuer { get; set; } = String.Empty;
    public string Key { get; set; } = String.Empty;
    public int Lifetime { get; set; }
}