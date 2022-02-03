import { PasswordValidation } from "./password-validate";

describe("password validate", () => {
    test("Should not enter a password without at least one capital uppercase", () => {
        expect(PasswordValidation.validate("willian").isLeft()).toBe(true);
    });

    test("Should not enter a password with more of 30 characteres", () => {
        expect(PasswordValidation.validate("Aa".repeat(100)).isLeft()).toBe(true);
    });

    test("Should not enter a password with less of 8 characteres", () => {
        expect(PasswordValidation.validate("will").isLeft()).toBe(true);
    });
});