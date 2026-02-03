// Task 1: Define a Product Catalog Item
// Define the Object Structure: Create an object product that represents a clothing item. It must have the following properties:
// name: A string (e.g., "T-Shirt")
// price: A number (e.g., 29.99)
// isInStock: A boolean (e.g., true)
// Annotate the Object: Explicitly annotate the product variable with the type structure.
// Use TypeScript to Validate: Try changing price to a string or adding a new property like size to see how TypeScript throws an erro


let product:{    
    name: string;
    price: number;
    isInStock: boolean} = {
        name: "T-Shirt",
        price: 29.99,
        isInStock: true
};

product.price = 25.99; // Valid
//product.price = "30"; // Error: Type 'string' is not assignable to type 'number'.