import { Body, Controller, Post } from "@nestjs/common";
import { RegisterUserService } from "./register-user.service";

@Controller("register")
export class RegisterUserController {
    public constructor(
        private readonly registerUserUsecase: RegisterUserService
    ) { }

    @Post()
    public registerUser(@Body("email") email: string, @Body("password") password: string) {
        const response = this.registerUserUsecase.execute({
            email: email,
            password: password,
        });

        if (response.isLeft()) return response.value;

        return response.value;
    }
}
