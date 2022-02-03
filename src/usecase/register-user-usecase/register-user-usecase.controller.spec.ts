import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { RegisterUserUsecaseController } from "./register-user-usecase.controller";

describe("RegisterUserUsecaseController", () => {
  let controller: RegisterUserUsecaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterUserUsecaseController],
    }).compile();

    controller = module.get<RegisterUserUsecaseController>(RegisterUserUsecaseController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
