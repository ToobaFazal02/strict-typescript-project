/**
 * ==================================================================================
 * TASK: Build a Strict "User Order Processor" System
 * ==================================================================================
 * * OBJECTIVE:
 * Demonstrate understanding of TypeScript Basic Types, Interfaces, and Functions 
 * (including Arrow Functions, Optional Parameters, and Rest Parameters).
 * * ----------------------------------------------------------------------------------
 * REQUIREMENTS:
 * * 1. Define an Interface named 'Product':
 * - properties: 
 * - id (number)
 * - name (string)
 * - price (number)
 * - hasWarranty (boolean)
 * - description (optional string)
 * * 2. Create an Arrow Function named 'calculateTotal':
 * - It must accept a 'basePrice' (number).
 * - It must accept a Rest Parameter '...tax' (array of numbers).
 * - It must return a 'number' (sum of basePrice + all tax values).
 * * 3. Create a Standard Function named 'processOrder':
 * - It must accept a parameter 'product' (of type Product).
 * - It must accept an optional parameter 'discount' (number).
 * - If discount is not provided, use a Default Parameter value of 0.
 * - The function must return a 'string' (e.g., "Order placed for [Name] at $[Price]").
 * * 4. Create a Function named 'logSystemStatus':
 * - It accepts a 'status' (string).
 * - It performs a console.log.
 * - Its return type must be explicitly 'void'.
 * * 5. Create a Function named 'throwError':
 * - It accepts a 'message' (string).
 * - It throws a new Error.
 * - Its return type must be explicitly 'never'.
 * * ==================================================================================
 * TODO: Implement the code below this comment block.
 * ==================================================================================
 */

// YOUR CODE STARTS HERE...

interface Product {
    id: number;
    name: string;
    price: number;
    hasWarranty: boolean;
    description?: string;
}

const calculateTotal =(
    basePrice: number,
    ...tax: number[]
): number => {
// 1. Pehle tax ka total nikala
    const totalTax = tax.reduce((total, currentAmount) => total + currentAmount, 0);
    
    //  phir basePrice aur tax ke total ko sum kia
    return basePrice + totalTax;
};

// we can use this loop method too 
// const calculateTotal = (basePrice: number, ...tax: number[]): number => {
//     let totalTax = 0;

//     // Har ek tax value ko uthao aur totalTax mein daal do
//     for (const t of tax) {
//         totalTax = totalTax + t;
//     }

//     return basePrice + totalTax;
// };

function processOrder(
    product: Product,
    discount: number = 0,
): string {
    const finalPrice = product.price - discount;
    return `Order placed for ${product.name} at $${finalPrice}`;
}

function logSystemStatus(
    status: string): void{
        console.log(`System Status: ${status}`);
    }

function throwError(
    message:string): never{
        throw new Error(message);
    }

//code execution example
const sampleProduct: Product={
    id: 3,
    name: "Laptop",
    price: 15000,
    hasWarranty: true,
    description: "A high-performance laptop suitable for gaming and work."
}

const totalPrice=calculateTotal(
    sampleProduct.price,
    1500, // tax 1
    500   // tax 2
);
console.log(`Total Price: $${totalPrice}`);

const processedOrder = processOrder(sampleProduct, 2000);
console.log(processedOrder);
logSystemStatus("All systems operational.");

// Uncomment the line below to see the throwError function in action
//throwError("This is a critical error!");