import UserData from "./UserData.entity";

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
