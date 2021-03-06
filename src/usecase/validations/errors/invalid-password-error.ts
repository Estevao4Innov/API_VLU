import type { DomainError } from "./domain-error";

export class InvalidPasswordError extends Error implements DomainError {
    public constructor(password: string) {
        super(`This Password '${password}' is invalid`);
        this.name = "InvalidPasswordError";
    }
}