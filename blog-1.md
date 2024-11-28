# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### In typescript type guard is necessary for type Safety. When we need to handle some property based their type we must need to use type guard. It can help us to narrow down the type and provide us cleaner code. It helps typescript to avoid some kind of errors in runtime and run the code smoothly.

* typeof: This is work on runtime for checking the type of the provided value. 

    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }

* in Guard: When we need to check the property has in the object or not.
    if ("name" in user) {
        console.log(name);
    }
