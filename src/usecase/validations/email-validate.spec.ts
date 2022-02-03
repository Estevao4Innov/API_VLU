import { EmailValidation } from "./email-validate";

describe("validator Email", () => {
    test("Should not enter email with more  than 64 characteres before @", () => {
        const beforeSymbol = "Cc123".repeat(100);
        const afterSymbol = "@gmail.com";
        const email = beforeSymbol + afterSymbol;
        expect(EmailValidation.validate(email).isLeft()).toBe(true);
    });

    test("Should not enter email with more than 250 characteres after @", () => {
        const beforeSymbol = "williancavalcanti";
        const afterSymbol = "@gmail.com" + "c".repeat(251);
        const email = beforeSymbol + afterSymbol;
        expect(EmailValidation.validate(email).isLeft()).toBe(true);
    });

    test("Should not enter email with invalid symbols", () => {
        const beforeSymbol = "willian@@";
        const afterSymbol = "@gmail.com";
        const email = beforeSymbol + afterSymbol;
        expect(EmailValidation.validate(email).isLeft()).toBe(true);
    });
});