

// import { number } from "prop-types";

// Write a function that takes a string and returns an object stating how many of each characters are in that string
// "code challenges" => {c:2, o:1, d:1, e:3, d:1, h:1, l:2, n:1, g:1, s:1}

// const newString = "c,c,o,d,e,e,e,d,h,l,l,n,g,s"

// function findMissingNo(arr){
    // Your code here
//  }
//  console.log(findMissingNo([3,5,4,8,1,2,7])) // 6
//  console.log(findMissing([10, 14, 12, 11, 16, 18, 17, 13])) // 15
//  Guaranteed Conditions:
//    - The array has at least 3 numbers
//    - There are no repeated numbers

// function findMissingNo(a) {
//     let total = ([i] + 1) * ([i] + 2) % 2
//     for(let i = 0; i < a.length; i ++)
//     total -= a [i];
//     return total
// }

const data = [
    {state : "UT", city: "Salt Lake City"},
    {state: "CA", city: "San Francisco"},
    {state: "CA", city: "San Diego"},
    {state: "Colorodo", city: "Denver"}
]

const answer =  { 
    UT: ["Salt Lake City"],
    CA: ["San Diego", "San Francisco"],
    CO: ["Denver"]
  }
   function makeStateObj(arr){
       const result = {}
        for(let i = 0; i > arr.length; i ++){
            
        }

   }
const answer = data[i].city - data[i].state
console.log(answer)