import { InvalidPasswordError } from "./errors/invalid-password-error";
import type { Either } from "./shared/either";
import { left, right } from "./shared/either";

export class PasswordValidation {
    private constructor(
        private readonly password: string
    ) { }

    public static validate(password: string): Either<InvalidPasswordError, PasswordValidation> {
        const maxPasswordLength = 30;
        const minPasswordLength = 8;
        const upperCaseCheck = /[A-Z]/;

        if (password.length > maxPasswordLength || password.length < minPasswordLength) return left(new InvalidPasswordError(password));
        if (!password.match(upperCaseCheck)) return left(new InvalidPasswordError(password));
        return right(new PasswordValidation(password));
    }
}