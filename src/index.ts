type userId=string | number;
// type 2 strict type:
type userRole = 'admin' | 'manager' | 'intern' ;
// type 3 strict type:
type userStatus = 'active' | 'inactive' ;

//object structutre
type personalDetails={
    name: string,
    age:number,
    email:string
}

//official details
type officialDetails={
    role: userRole,
    status: userStatus
}

//employee (the intersection)
type Employee = personalDetails & officialDetails & 
{
bio :string | null;    
}

//3.
function formatUserProfile(user: Employee): string {
    return `Name: ${user.name} , role: ${user.role} ,status: ${user.status} ` };

//promote user
function promoteUser(employee: Employee , newRole: userRole): Employee { employee.role = newRole;
     return employee;
}

//fixGuestUser function
function fixGuestUser(guestDetails: number|string): void {
    if (typeof guestDetails === 'number') {
        console.log(`Processing guest ID: ${guestDetails}`);
    } else {
        console.log(`Processing guest user:  ${guestDetails}`);
    }
}

//Test Cases
const newHire: Employee ={
    name: 'Ahmad',
    age: 24, 
    role: 'intern',
//    role: "ceo",
    email: 'ahmad@gmail.com',
    status: "active",
    bio: null

}
console.log(formatUserProfile(newHire));
const promotedEmployee = promoteUser(newHire, 'manager');
console.log(formatUserProfile(promotedEmployee));
fixGuestUser("Alice");
fixGuestUser(105);