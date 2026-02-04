## 📘 TypeScript Functions Overview

This section covers the essential ways to handle functions in TypeScript to ensure type safety and robust code.

### 1. Type Annotations

Explicitly define the types for both **parameters** and the **return value** to prevent unexpected data types.

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

```

### 2. Optional & Default Parameters

* **Optional (`?`):** Allows a parameter to be omitted during the function call.
* **Default (`=`):** Provides a fallback value if no argument is passed.

```typescript
function login(user: string, role: string = "Guest", email?: string) { /* ... */ }

```

### 3. Rest Parameters

Used when the number of arguments is unknown. It collects multiple arguments into a single **typed array**.it is always an array. (... these three dots are called spread parameters before num below)

```typescript
function sum(...nums: number[]): number { /* ... */ }

```

### 4. Arrow & Anonymous Functions

Standard modern JavaScript function patterns with TypeScript's type enforcement applied to variables.widely used in modern js.

```typescript
const multiply = (a: number, b: number): number => a * b;

```

### 5. Special Return Types: `void` & `never`

* **`void`**: Used for functions that perform an action but **do not return** a value (e.g., logging).
* **`never`**: Used for functions that **never reach a return point**, such as those that throw errors or have infinite loops.
