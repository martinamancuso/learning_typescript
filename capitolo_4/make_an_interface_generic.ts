/*
START: Follow the instructions below.
*/

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

/*
Previous:
interface Country {
  name: string;
  languages: unknown;
}
*/

interface Country<LanguagesType> {
  name: string;
  languages: LanguagesType;
}

const languagesObj1: Country<string> = {
  name: "New Zealand",
  languages: "English, Māori",
};

console.log(languagesObj1.languages);

const languagesObj2: Country<string[]> = {
  name: "Spain",
  languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export {};
