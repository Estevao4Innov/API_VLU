import type { User } from "src/entities/user";

export interface Repositories {
    findUserByEmail: (email: string) => User;
    registerUser: (user: User) => User;
    getAllUser: () => Array<User>;
}