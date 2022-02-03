import { Module } from "@nestjs/common";
import { RegisterUserService } from "./register-user.service";
import { RegisterUserController } from "./register-user.controller";

@Module({
  providers: [RegisterUserService],
  controllers: [RegisterUserController],
})
export class RegisterUserUsecaseModule { }
