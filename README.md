# Project: The "Guardian" User Management System

## Objective
You are built a robust "User Role & Permission System" for a high-security application. 
Your goal is to replace loosely typed data with **Advanced TypeScript Types** to ensure that an Admin cannot accidentally be assigned a Guest role, and user details are strictly validated.

**Concepts to Apply:** Type Aliases, Union Types, Literal Types, Intersection Types, Optional/Nullable types, and Functions.

---

## Technical Specifications (Requirements)

### 1. Define Advanced Types (Type Aliases)
Instead of using `interface` for everything, use `type` keywords to demonstrate aliases.

* **Type 1: `UserID`**
    * Create a type alias that allows a user ID to be either a `string` OR a `number`.
* **Type 2: `UserRole` (Literal Type)**
    * A strict type that ONLY accepts: `"admin"`, `"manager"`, or `"intern"`.
* **Type 3: `UserStatus` (Literal Type)**
    * A strict type that ONLY accepts: `"active"` or `"inactive"`.

### 2. Define Object Structures
* **Type 4: `PersonalDetails`**
    * `name`: string
    * `age`: number
    * `email`: string
* **Type 5: `OfficialDetails`**
    * `role`: Use the `UserRole` type created above.
    * `status`: Use the `UserStatus` type created above.
* **Type 6: `Employee` (The Intersection)**
    * Combine `PersonalDetails` AND `OfficialDetails` into a new type named `Employee` using the `&` operator.
    * Add an optional property `bio`: string | null.

### 3. Implement Critical Functions

**Function A: `formatUserProfile`**
* **Input:** Accepts an `Employee` object.
* **Logic:** Returns a formatted string: *"Name: [Name], Role: [Role], Status: [Status]"*.
* **Strictness:** Must use the `Employee` intersection type.

**Function B: `promoteUser`**
* **Input:**
    1.  `employee`: An `Employee` object.
    2.  `newRole`: Must be of type `UserRole`.
* **Logic:** Updates the employee's role to the `newRole` and prints: *"User [Name] promoted to [Role]"*.
* **Return:** Returns the updated `Employee` object.

**Function C: `fixGuestUser` (Using Unions)**
* **Input:** `param`: Can be either a `string` (name) OR a `number` (id).
* **Logic:**
    * Check the type of input using `typeof`.
    * If it's a `string`, print: *"Processing guest user: [Name]"*.
    * If it's a `number`, print: *"Processing guest ID: [ID]"*.

---

## 🧪 Execution Plan (Test Your Code)

Write the following test cases in your `index.ts` file to prove your system works:

1.  **Create a User:**
    * Create a variable `newHire` of type `Employee`.
    * Assign: `name: "Ahmed"`, `age: 24`, `role: "intern"`, `status: "active"`.
    * *Try assigning `role: "ceo"` and confirm that TypeScript throws an error (comment out the error).*

2.  **Call Functions:**
    * Call `formatUserProfile(newHire)` and log the result.
    * Call `promoteUser(newHire, "manager")` and update the user.
    * Call `fixGuestUser("Alice")`.
    * Call `fixGuestUser(105)`.

---

## Self-Assessment Checklist
- [ ] Did you use `type` instead of `interface` for at least one structure?
- [ ] Is `UserRole` strictly limited to specific strings?
- [ ] Did you merge types using `&`?
- [ ] Does `fixGuestUser` handle both string and number inputs?