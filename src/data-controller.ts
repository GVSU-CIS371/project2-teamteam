import { Product, products } from "./data";
// Product is an object interface
// products is an array of Product instances.

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

// COMPLETED: will render each of the individual products now instead of being a blank screen.
function renderProducts(prods: Product[]): void {
    // loop through every object in prods array and throw them as children of the div with id="main-container".
    let mainHTMLElement = document.getElementById("main-container"); 
    prods.forEach((prod: Product) => {
        let htmlProductElement = generateProductHTML(prod);
        // our div for main-container is created before this function is called so we can use the non-null assertion operator ! to
        // say we know mainHTMLElement won't be null.
        // we will add the result to generateProductHTML function call as an innerHTML element to our main-container div. Therefore, populating
        // our div with the content
        mainHTMLElement!.innerHTML += htmlProductElement;
    }
    )
}

function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };