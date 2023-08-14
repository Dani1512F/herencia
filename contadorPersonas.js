class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Employee extends Person {
    constructor(name, employeeId) {
      super(name);
      this.employeeId = employeeId;
    }
  }
  
  class Client extends Person {
    constructor(name, clientId) {
      super(name);
      this.clientId = clientId;
    }
  }
  
  class PeopleCounter {
    constructor() {
      this.employees = [];
      this.clients = [];
    }
    
    addEmployee(name, employeeId) {
      const employee = new Employee(name, employeeId);
      this.employees.push(employee);
    }
    
    addClient(name, clientId) {
      const client = new Client(name, clientId);
      this.clients.push(client);
    }
    
    countPeople() {
      console.log(`Total employees: ${this.employees.length}`);
      console.log(`Total clients: ${this.clients.length}`);
    }
  }
  
  const counter = new PeopleCounter();
  counter.addEmployee("John Doe", "E001");
  counter.addEmployee("Jane Smith", "E002");
  counter.addClient("Carlos Hernandez", "C003")
  counter.addClient("Alice Johnson", "C001");
  counter.addClient("Bob Williams", "C002");
  
  counter.countPeople(); 