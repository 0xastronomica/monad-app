export type Monad<T> = {
    value: T;
    bind: <U>(fn: (value: T) => Monad<U>) => Monad<U>;
    map: <U>(fn: (value: T) => U) => Monad<U>;
};

export function createMonad<T>(value: T): Monad<T> {
    return {
        value,
        bind<U>(fn: (value: T) => Monad<U>): Monad<U> {
            return fn(this.value);
        },
        map<U>(fn: (value: T) => U): Monad<U> {
            return createMonad(fn(this.value));
        }
    };
}