import type { User } from "src/entities/user";
import type { Repositories } from "../repositories";

const database: Array<User> = [];

export class PostgreSql implements Repositories {
    public registerUser(user: User): User {
        database.push(user);
        return user;
    }

    public findUserByEmail(email: string): User | undefined {
        return database.find(user => user.email === email);
    }

    public getAllUser(): Array<User> {
        return database;
    }
}