{
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }

    interface Person {
        name: string;
        age: number;
        email: string;
    }

    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", 'email']));
}