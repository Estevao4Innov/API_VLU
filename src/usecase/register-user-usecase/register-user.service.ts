import { Injectable } from "@nestjs/common";
import type { User } from "src/entities/user";
import type { Either } from "../validations/shared/either";
import { left, right } from "../validations/shared/either";
import type { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { RegisterUserUsecase } from "./register-user-usecase";
import type { RegisterUserUsecaseDTO } from "./register-user-usecase-dto";

@Injectable()
export class RegisterUserService {
    public constructor(
    ) { }

    public execute(data: RegisterUserUsecaseDTO): Either<UserAlreadyExistsError, User> {
        const registerUserUsecase: Either<UserAlreadyExistsError, User> = RegisterUserUsecase.execute(data);
        if (registerUserUsecase.isLeft()) return left(registerUserUsecase.value);
        return right(registerUserUsecase.value);
    }
}
