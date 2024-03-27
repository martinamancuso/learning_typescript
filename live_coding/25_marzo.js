// Assegnare valori di default ai parametri di una funzione

// function sum(a = 0, b = 0) {
//   return a + b;
// }
// console.log(sum())

//

/*
RICORDA:
- Posso passare un oggetto alla funzione come parametro;
- Posso chiamare il parametro passato alla funzione con lo stesso nome dell'oggetto che ho creato;
Questo perché ha la priorità lo scope di riferimento, e non si creerebbe alcun conflitto tra nome oggetto e nome parametro, pur essendo uguali.
Nell'esempio, a 'sum' potremmo passare 'obj'.
*/

let obj = {
  a: 2,
  b: 5,
};

function sum(a) {
  return a.a + a.b;
}

console.log(sum(obj));

//

// Oggetto "new Promise"

function simulation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dati Ottenuti");
      resolve();
    }, 2000);
  });
}

async function start() {
  console.log("Ottenimento dati in corso...");
  await simulation();
  console.log("Fine");
}

// start();

//

// Spread Operator con Array

const myFirstArr = [1, 2, 3];
const mySecondArr = [4, 5, 6];

const newArr = [...myFirstArr, ...mySecondArr];

console.log(newArr);

//

// Spread Operator con Oggetti

const myObj = {
  name: "Tom",
  surname: "Shelby",
};

const mySecondObj = {
  age: 33,
};

const thirdObj = {
  ...myObj,
  ...mySecondObj,
};

console.log(thirdObj);

//

// Destrutturazione Oggetto
// Per ottenere il valore di alcune delle proprietà dell'oggetto destrutturato

// In questo caso, vogliamo ottenere il valore della proprietà "name" dell'oggetto "myObj"

const { name } = myObj;
console.log(name);