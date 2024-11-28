interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, partial: any): Profile => {
    console.log(profile, partial);
    if(partial.name !== undefined){
        profile.name = partial.name;
    }
    if(partial.age !== undefined){
        profile.age = partial.age;
    }
    if(partial.email !== undefined){
        profile.email = partial.email;
    }
    return profile;
}


const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 28, name: 'Rohid' }));