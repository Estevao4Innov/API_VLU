import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { RegisterUserUsecaseService } from "./register-user-usecase.service";

describe("RegisterUserUsecaseService", () => {
  let service: RegisterUserUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterUserUsecaseService],
    }).compile();

    service = module.get<RegisterUserUsecaseService>(RegisterUserUsecaseService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
