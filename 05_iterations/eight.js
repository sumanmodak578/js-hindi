// Reduce

const myNums = [1, 2, 3, 4, 5]


// const myTotal = myNums.reduce( function (acc, cur) {
//     console.log(`acc: ${acc} and cur: ${cur}`);
//     return acc + cur
// }, 0)

const myTotal = myNums.reduce( (acc, cur) => (acc+cur)  ,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 399
    },

    {
        itemName: "python course",
        price: 499
    },

    {
        itemName: "data science course",
        price: 1499
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalPrice);