class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class Order {
    constructor(id, customerName) {
      this.id = id;
      this.customerName = customerName;
      this.details = [];
    }
    
    addDetail(product, quantity) {
      this.details.push({ product, quantity });
    }
    
    getTotal() {
      return this.details.reduce((total, detail) => {
        return total + (detail.product.price * detail.quantity);
      }, 0);
    }
  }
  
  // Crear productos
  const product1 = new Product(1, "Product 1", 10);
  const product2 = new Product(2, "Product 2", 20);
  
  // Crear una orden y agregar detalles
  const order = new Order(1, "John Doe");
  order.addDetail(product1, 3);
  order.addDetail(product2, 2);
  
  console.log("Order ID:", order.id);
  console.log("Customer:", order.customerName);
  console.log("Order details:");
  order.details.forEach(detail => {
    console.log(detail.product.name, "x", detail.quantity, "unit price:", detail.product.price);
  });
  console.log("Total:", order.getTotal());
  