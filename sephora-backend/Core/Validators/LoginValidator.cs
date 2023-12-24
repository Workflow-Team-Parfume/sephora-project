using Core.Dtos.User;
using FluentValidation;

namespace Core.Validators;

public class LoginValidators : AbstractValidator<LoginDto>
{
    public LoginValidators()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .MinimumLength(2);

        RuleFor(x => x.Password)
            .NotEmpty();
    }
}