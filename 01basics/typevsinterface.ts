interface User {
    readonly dbId: number; // readonly means you can't change the value
    email: string;
    firstName: string;
    googleId?: string; // optional
    startTrial: () => string; // method signature for startTrial
    getCoupon: (couponCode: string) => number; // method signature for getCoupon
    githubToken: string;
    name: string; // Add name if required

}


// Adding more properties to the User interface
interface User {
    githubToken: string;
} 
// This is also known as reopening the interface.
// It allows you to extend or add properties to an existing interface, which is useful when working with external libraries or shared types.

interface Admin extends User {
    role: "admin" | "superadmin" | "user"; // Restrict role to specific string values
}

const hello1: User = {
    dbId: 1,
    email: '',
    firstName: '',
    githubToken: '',
    name: 'John Doe', // Add name
    city: 'New York', // Add city
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (name: string): number => {
        return 10;
    }
};



const hello2: Admin = {
    dbId: 1,
    email: '',
    firstName: '',
    githubToken: '',
    name: 'Jane Doe', // Add name
    city: 'San Francisco', // Add city
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (name: string): number => {
        return 10;
    },
    role: "admin"
};;
