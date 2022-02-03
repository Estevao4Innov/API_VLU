import type { DomainError } from "./domain-error";

export class UserAlreadyExistsError extends Error implements DomainError {
    public constructor(email: string) {
        super(`This email '${email}' is invalid`);
        this.name = "EmailAlreadyExistsError";
    }
}