export interface Iterator<T> {
    next(): T;
    isDone(): boolean;
    currentItem(): T;
}