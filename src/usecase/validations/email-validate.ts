import { isEmail } from "@techmmunity/utils";
import type { Either } from "./shared/either";
import { left, right } from "./shared/either";
import { InvalidEmailError } from "./errors/invalid-email-error";

export class EmailValidation {
    private constructor(
        private readonly email: string
    ) { }

    public static validate(email: string): Either<InvalidEmailError, EmailValidation> {
        const isEmailValid: boolean = isEmail(email);

        if (!isEmailValid) return left(new InvalidEmailError(email));

        const [emailBeforeSymbol, emailAfterSymbol] = email.split("@");

        const maxCharsBeforeSymbol = 64;
        const maxCharsAfterSymbol = 255;

        if (emailBeforeSymbol.length > maxCharsBeforeSymbol || emailAfterSymbol.length > maxCharsAfterSymbol) return left(new InvalidEmailError(email));

        return right(new EmailValidation(email));
    }

    public get value(): string {
        return this.email;
    }
}