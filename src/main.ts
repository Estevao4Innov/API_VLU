import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const portaLocal = 3000;
  const portaHost = process.env.PORT;
  const PORTA = portaHost || portaLocal;
  await app.listen(PORTA);
}

bootstrap();
