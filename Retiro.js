const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 1000;
const transactionHistory = [];

function deposit(amount, person) {
  balance += amount;
  const transaction = {
    type: "Depósito",
    amount: amount,
    person: person,
    timestamp: new Date().toLocaleString()
  };
  transactionHistory.push(transaction);
  return balance;
}

function withdraw(amount, person) {
  if (amount <= balance) {
    balance -= amount;
    const transaction = {
      type: "Retiro",
      amount: amount,
      person: person,
      timestamp: new Date().toLocaleString()
    };
    transactionHistory.push(transaction);
    return balance;
  } else {
    return "Fondos insuficientes";
  }
}

function performTransaction() {
  rl.question("Ingresa tu nombre: ", function (person) {
    rl.question("¿Deseas hacer un depósito o un retiro? (Escribe 'deposito' o 'retiro'): ", function (action) {
      const actionLowerCase = action.toLowerCase();
      if (actionLowerCase === "deposito") {
        rl.question("Ingresa la cantidad que deseas depositar: ", function (amount) {
          amount = parseFloat(amount);
          console.log(`Nuevo saldo después del depósito: ${deposit(amount, person)}`);
          showTransactionHistory();
          rl.close();
        });
      } else if (actionLowerCase === "retiro") {
        rl.question("Ingresa la cantidad que deseas retirar: ", function (amount) {
          amount = parseFloat(amount);
          console.log(`Nuevo saldo después del retiro: ${withdraw(amount, person)}`);
          showTransactionHistory();
          rl.close();
        });
      } else {
        console.log("Acción inválida. Por favor, escribe 'deposito' o 'retiro'.");
        rl.close();
      }
    });
  });
}

function showTransactionHistory() {
  console.log("\nHistorial de transacciones:");
  for (const transaction of transactionHistory) {
    console.log(`${transaction.person} - ${transaction.type}: $${transaction.amount} - ${transaction.timestamp}`);
  }
}

performTransaction();
