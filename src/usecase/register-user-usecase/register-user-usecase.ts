import { Injectable } from "@nestjs/common";
import { User } from "../../entities/user";
import { PostgreSql } from "../../external/repositories/postgres";
import { EmailValidation } from "../validations/email-validate";
import { PasswordValidation } from "../validations/password-validate";
import type { Either } from "../validations/shared/either";
import { right, left } from "../validations/shared/either";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import type { RegisterUserUsecaseDTO } from "./register-user-usecase-dto";
import type { InvalidEmailError } from "../validations/errors/invalid-email-error";
import type { InvalidPasswordError } from "../validations/errors/invalid-password-error";

@Injectable()
export class RegisterUserUsecase {
    public static execute(data: RegisterUserUsecaseDTO): Either<InvalidEmailError | InvalidPasswordError | UserAlreadyExistsError, User> {
        const emailOrError: Either<InvalidEmailError, EmailValidation> = EmailValidation.validate(data.email);
        const passwordOrError: Either<InvalidPasswordError, PasswordValidation> = PasswordValidation.validate(data.password);

        if (emailOrError.isLeft()) return left(emailOrError.value);
        if (passwordOrError.isLeft()) return left(passwordOrError.value);

        const user = new User(data.email, data.password);

        const existsUser: User | undefined = new PostgreSql().findUserByEmail(user.email);

        if (existsUser) return left(new UserAlreadyExistsError(user.email));

        const sendUserResponse: User = new PostgreSql().registerUser(user);

        return right(sendUserResponse);
    }
}
