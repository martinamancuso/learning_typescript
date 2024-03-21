/*
START: Follow the instructions below.
*/

// 1. Add a type annotation for this array.
// Use the array literal type syntax: type[]
// Hint: Look at the type that TypeScript has inferred.

// previous: const currencies1 = ["NZD", "THB", "NGN"];
const currencies1: string[] = ["NZD", "THB", "NGN"];

// 2. Add a type annotation for this array.
// Use the generic interface type `Array`: Array<type>

// previous: const currencies2 = ["EUR", "COP", "INR"];
const currencies2: Array<string> = ["EUR", "COP", "INR"];

// 3. Add a type annotation for this array.
// Use the array literal type syntax: type[]

// previous: const populations1 = [50_372_424, 1_352_642_280, 211_400_708];
const populations1: number[] = [50_372_424, 1_352_642_280, 211_400_708];

// 4. Add a type annotation for this array.
// Use the generic interface type `Array`: Array<type>

// previous: const populations2 = [5_135_300, 331_893_745, 1_412_600_000];
const populations2: Array<number> = [5_135_300, 331_893_745, 1_412_600_000];

// ----

// You will use this interface to describe the shape of the objects in the
// arrays below. Change the types for the properties in this interface so
// they are correct.

// pevious:
// interface Country {
//   name: never;
//   code: string;
//   population: never;
// }

interface Country {
  name: string;
  code: string;
  population: number;
}

// Add a type annotation for this array of objects.
// Use the array literal type syntax: Type[]
// Hint: Make use of the `Country` type.

// previous:
// const countries1 = [
//     {
//         name: "China",
//         code: "CN",
//         population: 1_412_600_000,
//     },
//     {
//         name: "Italy",
//         code: "IT",
//         population: 60_317_116,
//     },
// ];

const countries1: Country[] = [
  {
    name: "China",
    code: "CN",
    population: 1_412_600_000,
  },
  {
    name: "Italy",
    code: "IT",
    population: 60_317_116,
  },
];

// Add a type annotation for this array of objects.
// Use the generic interface type `Array`: Array<type>
// Hint: Make use of the `Country` type.

// previous:
// const countries2 = [
//     {
//         name: "Thailand",
//         code: "TH",
//         population: 69_950_850,
//     },
//     {
//         name: "Greece",
//         code: "GR",
//         population: 10_678_632,
//     },
// ];

const countries2: Array<Country> = [
  {
    name: "Thailand",
    code: "TH",
    population: 69_950_850,
  },
  {
    name: "Greece",
    code: "GR",
    population: 10_678_632,
  },
];

// ----

export {};
