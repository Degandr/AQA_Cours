export {};

class Calculator {
  sum(a: number, b: number) {
    return a + b;
  }
  ded(a: number, b: number) {
    return a - b;
  }
  div(a: number, b: number) {
    return a / b;
  }
  mult(a: number, b: number) {
    return a * b;
  }
  getResult(a: number, b: number, c: string) {
    if (c === "+") {
      return this.sum(a, b);
    } else if (c === "-") {
      return this.ded(a, b);
    } else if (c === "/") {
      return this.div(a, b);
    } else if (c === "*") {
      return this.mult(a, b);
    }
  }
}

const arrayWithResults = [];

const mySimplTests = new Calculator();

arrayWithResults.push(mySimplTests.getResult(2, 2, "+") === 5 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(2, 5, "*") === 10 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(9, 5, "-") === 4 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(25, 5, "/") === 5 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(10, 10, "*") === 100 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(41, 9, "+") === 50 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(82, 12, "-") === 71 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(33, 11, "/") === 2 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(9, 3, "/") === 3 ? "Test Passed" : "Test Failed");
arrayWithResults.push(mySimplTests.getResult(9, 9, "*") === 80 ? "Test Passed" : "Test Failed");

for (let i = 0; i < 10; i++) {
  console.log(`Result for Test_${i + 1} is "${arrayWithResults[i]}"`);
}
