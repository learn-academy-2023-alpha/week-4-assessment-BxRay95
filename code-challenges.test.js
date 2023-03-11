// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("removeAndShuffle", () => {
//   it("removes the first item from the array and shuffles the remaining content", () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// // // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//     expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]));
//     expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining([
//       "indigo",
//       "periwinkle",
//       "ochre",
//       "aquamarine",
//       "saffron"
//     ]));
//   })
// })

// --> removeAndShuffle not defined.

// b) Create the function that makes the test pass.

// Pseudocode: create a function called removeAndShuffle that takes in an array of strings. Using the built in method shift, remove the first value in the array. use the built in method sort to tell the function to assign the rest of the values in the array to a random order using Math.random then `from my understanding` - 0.5 just gives the elements a slight offset value each time to make it randomly sorted.

const removeAndShuffle = (array) => {
  return array.splice(1).sort(() => Math.random() - 0.5);
};

console.log(removeAndShuffle(colors1));

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// describe("totalVotes", () => {
//   it("takes in an object that contains up votes and down votes and returns the end tally", () => {
//     const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
//     expect(totalVotes(votes1)).toEqual(11)
//     expect(totalVotes(votes2)).toEqual(-31)
//   })
// })
// // --> totalVotes is not defined

// a) Create a test with expect statements for each of the variables provided.
const votes1 = { upVotes: 13, downVotes: 2 };
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 };
// Expected output: -31

// b) Create the function that makes the test pass.

// create a function called totalVotes that takes in the number of upVotes and number of downVotes and adds the 2 values together to come up with the total tally of votes.
// input: upVotes and downVotes total count
// we know that upVotes are considered positive values and downVotes are considered negative values, so with that in mind all we have to do is take the first objects value and subtract the second objects value to get the total of votes.
// using object as the parameter call on the 2 sections of the object(upVotes) and object(downVotes) and subtract them from each other since one of them represents a positive value and the other represents a negative value.
// output: the total number of votes combined together

const totalVotes = (object) => {
  return object.upVotes - object.downVotes;
};

// console.log(totalVotes(votes2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("noDuplicates", () => {
//     it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
const dataArray1 = ["array", "object", "number", "string", "Boolean"];
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
// expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })
// Expected output:["array", "object", "number", "string", "Boolean", "null", "undefined"]
// --> noDuplicates is not defined

//pseudocode: create a function called noDuplicates that takes in both arrays as parameters, then assign a new variable for the array that will have no duplicates and use the spread operator, which captures all of the items inside of an iterable object(array, set, map, etc.) and using the built in method new Set, which automatically converts all of the items from  the 2 combined array with the built in method         (.concat), and sets are helpful because they actually guarantee to only have unique items in this case, no duplicates items, to exist within the new set.

const noDuplicates = (array1, array2) => {
  return [...new Set(array1.concat(array2))];
};

// console.log(noDuplicates(dataArray1,dataArray2))
