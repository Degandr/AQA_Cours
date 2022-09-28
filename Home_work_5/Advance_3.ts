const tax = 0.2;
let phonePriceWithTax: number;
let phonePriceWithTaxAndTrinket: number;
const trinketPrice = 20;

let bankAccount = 1350.536184;
nalogCalculation(500.789453);

function nalogCalculation(phonePrice: number) {
  phonePriceWithTax = phonePrice * tax + phonePrice;
  finalPrice(phonePriceWithTax);
}

function finalPrice(phonePriceWithTax: number) {
  phonePriceWithTaxAndTrinket = phonePriceWithTax + trinketPrice;
  trade(phonePriceWithTaxAndTrinket);
}

function trade(phonePriceWithTaxAndTrinket: number) {
  while (phonePriceWithTaxAndTrinket <= bankAccount) {
    console.log(
      "Hello! You have:",
      bankAccount.toFixed(2),
      "$ on your bank account. The final phone price is:",
      phonePriceWithTaxAndTrinket.toFixed(2),
      "$",
    );
    console.log("Graces! You bought Phone!");
    bankAccount -= phonePriceWithTaxAndTrinket;
  }
  console.log(
    "Hello! You have:",
    bankAccount.toFixed(2),
    "$ on your bank account. The final phone price is:",
    phonePriceWithTaxAndTrinket.toFixed(2),
    "$",
  );
  console.log("Sorry, you haven't enough money to buy this phone!");
}
