const getProperty = <T, Y extends keyof T>(obj: T, value: Y): T[Y] => {
    return obj[value];
}

type Person = {
    name: string;
    age: number;
}

const person: Person = { name: "Alice", age: 30 };
console.log(getProperty(person, 'name'));