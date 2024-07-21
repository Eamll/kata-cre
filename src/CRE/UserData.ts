export default class UserData {
    name: string;
    address: string;
    payment: number;
    constructor(
        name: string,
        address: string,
        payment: number,
    ) {
        this.name = name;
        this.address = address;
        this.payment = payment;
    }
}