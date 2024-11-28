const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
    for (let key of keys) {
        if (key in obj) {
            return true;
        }
    }
    // console.log(obj, keys);
}

interface Person {
    name: string;
    age: number;
    email: string;
}

const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", 'email']));