//ejemplo 1

export function reverseArray<U>(items: U[]): U[] {
  return items.reverse();
}

import { funcionGenerica, funcionGenericaFlecha, reverseArray } from "./genericos/genericos";
console.log(reverseArray(["one", "two", "three"]))


//ejemplo 2
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Uso
const person = { name: "Ana", age: 25 };
const personName = getProperty(person, "name");
