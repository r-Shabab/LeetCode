var expect = (val) => ({
  toBe: (val1) => (val === val1 ? true : "Not Equal"),
  notToBe: (val2) => (val !== val2 ? true : "Equal"),
});

let r = expect(5).toBe(null); // true
let j = expect(5).notToBe(5); // throws "Equal"

console.log(r);
console.log(j);
