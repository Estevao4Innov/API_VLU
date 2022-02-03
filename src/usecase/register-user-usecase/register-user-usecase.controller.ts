import { Controller } from "@nestjs/common";
import { RegisterUserUsecaseService } from "./register-user-usecase.service";

@Controller("register-user-usecase")
export class RegisterUserUsecaseController {
    public constructor(
        private readonly registerUserUsecase: RegisterUserUsecaseService
    ) { }
}
