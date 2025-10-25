class Monad<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    static of<U>(value: U): Monad<U> {
        return new Monad(value);
    }

    map<U>(fn: (value: T) => U): Monad<U> {
        return Monad.of(fn(this.value));
    }

    flatMap<U>(fn: (value: T) => Monad<U>): Monad<U> {
        return fn(this.value);
    }

    getValue(): T {
        return this.value;
    }
}

// Example usage:
const monad = Monad.of(5)
    .map(x => x + 2)
    .flatMap(x => Monad.of(x * 3));

console.log(monad.getValue()); // Output: 21