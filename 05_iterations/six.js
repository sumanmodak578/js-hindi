// filter

// const coding = ['C', 'C++', 'Java', 'Python', 'JavaScript']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);  // foreach returns nothing example

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {
      title: "The Silent Patient",
      genre: "Thriller",
      publish: "2019",
      edition: "First"
    },
    {
      title: "Where the Crawdads Sing",
      genre: "Mystery",
      publish: "2018",
      edition: "Second"
    },
    {
      title: "Becoming",
      genre: "Biography",
      publish: "2018",
      edition: "First"
    },
    {
      title: "Educated",
      genre: "Memoir",
      publish: "2018",
      edition: "First"
    },
    {
      title: "The Great Alone",
      genre: "Historical Fiction",
      publish: "2018",
      edition: "First"
    },
    {
      title: "Circe",
      genre: "Fantasy",
      publish: "2018",
      edition: "First"
    },
    {
      title: "Little Fires Everywhere",
      genre: "Fiction",
      publish: "2017",
      edition: "First"
    },
    {
      title: "The Night Circus",
      genre: "Fantasy",
      publish: "2011",
      edition: "First"
    },
    {
      title: "The Martian",
      genre: "Science Fiction",
      publish: "2011",
      edition: "First"
    },
    {
      title: "Gone Girl",
      genre: "Thriller",
      publish: "2012",
      edition: "First"
    }
  ];

let userBooks = books.filter( (bk) => bk.genre === 'Fantasy' )

userBooks = books.filter( (bk) => {
    return bk.publish >= 2018 && bk.genre === "Memoir"
})
console.log(userBooks);
  