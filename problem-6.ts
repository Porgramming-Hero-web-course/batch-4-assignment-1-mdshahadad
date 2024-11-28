interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, partial: any): Profile => {
    console.log(profile, partial);
    profile.age = partial.age;
    return profile;
}


const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 28 }));