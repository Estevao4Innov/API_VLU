import { Module } from "@nestjs/common";
import { RegisterUserUsecaseService } from "./register-user-usecase.service";
import { RegisterUserUsecaseController } from "./register-user-usecase.controller";

@Module({
  providers: [RegisterUserUsecaseService],
  controllers: [RegisterUserUsecaseController],
})
export class RegisterUserUsecaseModule { }
