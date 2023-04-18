function filterCategory(arr){
    this.product = arr
    return function filterProduct(category){
        this.category = category
        let filter = this.product.filter(element => element.category.includes(this.category))
        console.log(filter);
        }
        };


let product = [
    {name: "Shirt", category:"Clothing"},
    {name: "Pants", category:"Clothing"},
    {name: "Hat", category:"Accessories"},
    {name: "Sunglasses", category:"Accessories"},
]

let clothing = filterCategory(product)
console.log(clothing("Accessories"));