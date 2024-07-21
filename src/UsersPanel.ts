import { Aggregate } from './utils/Aggregate';
import { Iterator } from './utils/Iterator';


export default class UsersPanel {
    aggregates: Aggregate<any>[];

    constructor() {
        this.aggregates = [];
    }

    addAggregate(aggregate: Aggregate<any>) {
        this.aggregates.push(aggregate);
    }

    show() {
        this.aggregates.forEach(aggregate => {
            const iterator = aggregate.createIterator();
            this.showItems(iterator);
        })
    }

    showItems(iterator: Iterator<any>) {
        while (!iterator.isDone()) {
            const user = iterator.next();
            console.log(user);
        }
    }
}