/*
START: Follow the instructions below.
*/

// 1. Add a tuple type annotation for this tuple.

// previous: const countryPopulation = ["China", 1_412_600_000];
const countryPopulation: [string, number] = ["China", 1_412_600_000];

// 2. Change the `CountryWithPopulation` type into a tuple type.
// This should fix the type error on Line 14.

// previous: type CountryWithCurrency = [];
type CountryWithCurrency = [string, string, string];

const countryCurrency: CountryWithCurrency = ["Italy", "Euro", "EUR"];

// 3. Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.

const countryLanguage: readonly [string, string] = ["Greece", "Greek"];

// countryLanguage.reverse();

console.log(countryLanguage);

// ----

export {};
