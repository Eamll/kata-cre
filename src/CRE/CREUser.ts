import UserData from "./UserData";

export default class CREUser {
    id: number;
    userData: UserData;
    constructor(
        id: number,
        userData: UserData
    ) {
        this.id = id;
        this.userData = userData;
    }
}
