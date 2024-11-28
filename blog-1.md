## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

# In typescript type guard is necessary for type Safety. When we need to handle some property based their type we must need to use type guard. It can help us to narrow down the type and provide us cleaner code.

* typeof: This is work on runtime for checking the type of the provided value. 

    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase()); // Works because we know 'value' is a string
    } 