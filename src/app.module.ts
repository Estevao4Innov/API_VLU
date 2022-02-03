import { Module } from "@nestjs/common";
import { RegisterUserUsecaseModule } from "./usecase/register-user-usecase/register-user.module";

@Module({
  imports: [RegisterUserUsecaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
