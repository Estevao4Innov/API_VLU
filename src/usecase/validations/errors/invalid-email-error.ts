import type { DomainError } from "./domain-error";

export class InvalidEmailError extends Error implements DomainError {
    public constructor(email: string) {
        super(`This email '${email}' is invalid`);
        this.name = "InvalidEmailError";
    }
}