/*Define the buyChocolate function and declare a new object to be returned when called. The object will 
have a type property. 
*/
const buyChocolate = () => {
    const chocolateObject = {
        type: "Milk Chocolate"
    }
    return chocolateObject
}
let chocolate = buyChocolate()

const addFlavoring = (ingredientObject) => {
    ingredientObject.flavor = "Mint"
    return ingredientObject
}
/*Was able to store the buyChocolate function in a variable and then passed it through the addFlavoring
function.
*/
let flavor = addFlavoring(chocolate)
//console.log(flavor)

/*Referred back to previous exercise. By passing the flavor variable through the makeBarkMixture function,
I was able to access the ingredient object through the if/else statement. Through the if/else statement,
I was able to iterate through the function to find the flavor property.
*/
 const makeBarkMixture = (ingredientObject) => {
    if (ingredientObject.flavor = "Mint") {
        ingredientObject.mixed = true
    } else {
        ingredientObject.mixed = false
    }
    return ingredientObject
 }
 let mixture = makeBarkMixture(flavor)
//console.log(mixture)

const bakeCandy = (ingredientObject) => {
    if (ingredientObject.mixed = true) {
        ingredientObject.baked = true
    } else {
        ingredientObject.baked = false
    }
    return ingredientObject
}
let bake = bakeCandy(mixture)
//console.log(bake)

const breakBark = (ingredientObject) => {
    if (ingredientObject.baked = true) {
    return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece",
    "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece" ] 
    }
}
let newCandy = breakBark(bake)
console.log(newCandy)


