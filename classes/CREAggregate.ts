import { Aggregate } from "../utils/Aggregate";
import { Iterator } from "../utils/Iterator";
import CREApiClient from './CREApiClient';
import CREUsersIterator from "./CREUsersIterator";

export default class CREAggregate implements Aggregate<any> {
    creApiClient = new CREApiClient()

    CREAggregate() {
        this.creApiClient = new CREApiClient()
    }

    createIterator(): Iterator<any> {
        return new CREUsersIterator(this.creApiClient.getCREinfo())
    }
}