import { Module } from "@nestjs/common";
import { RegisterUserUsecaseModule } from "./usecase/register-user-usecase/register-user-usecase.module";

@Module({
  imports: [RegisterUserUsecaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
