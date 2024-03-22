/*
START: Follow the instructions below.
*/

// Fix this use of the `Record` utility type so it constructs a valid type.

interface Currency {
  name: string;
  code: string;
  symbol: string;
}

// Add a type annotation to the `currencies` variable that uses the `Record` utility type.
// Hint: Pass the `Currency` type as the second type argument to `Record<>`.

const currency: Currency = {
  name: "United States dollar",
  code: "USD",
  symbol: "$",
};

// Type Annotation per 'currencies' che usa 'Record'
// Le chiavi sono di tipo 'string' e i valori sono di tipo 'Currency'
const currencies: Record<string, Currency> = {
  france: {
    name: "Euro",
    code: "EUR",
    symbol: "€",
  },
  china: {
    name: "Renminbi",
    code: "CNY",
    symbol: "¥",
  },
  colombia: {
    name: "Colombian peso",
    code: "COP",
    symbol: "$",
  },
};

// ----

export {};
