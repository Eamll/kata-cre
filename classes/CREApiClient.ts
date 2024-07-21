import CREUser from "./CREUser"
import UserData from "./UserData.entity"

export type CREInfoUsers = {
    [key: string]: CREUser
}

export default class CREApiClient {
    getCREinfo(): CREInfoUsers {
        const info: CREInfoUsers = {}

        info[1] = new CREUser(1, new UserData("Alexander", "123 Main Street", 100))
        info[2] = new CREUser(2, new UserData("Chris", "456 Elm Street", 200))
        info[3] = new CREUser(3, new UserData("Andrea", "789 Oak Street", 300))
        info[4] = new CREUser(4, new UserData("Jorge", "987 Pine Street", 400))

        return info
    }
}