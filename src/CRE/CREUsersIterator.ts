import { Iterator } from "../utils/Iterator";
import { CREInfoUsers } from "./CREApiClient";
import CREUser from './CREUser';

export default class CREUsersIterator implements Iterator<CREUser> {
    users: CREInfoUsers;
    keys: string[];
    constructor(info: CREInfoUsers) {
        this.users = info;
        this.keys = Object.keys(info);
    }

    next(): CREUser {
        if (this.keys.length === 0) {
            return null;
        }
        const key = this.keys.shift()
        return this.users[key]
    }
    isDone(): boolean {
        return this.keys.length === 0;
    }
    currentItem(): CREUser {
        return this.users[this.keys[0]]
    }

}