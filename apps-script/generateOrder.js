function generateOrder() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); 
  const products = [
    { product: "Laptop", category: "Electronics", price: 45000 },
    { product: "Headphones", category: "Electronics", price: 1500 },
    { product: "Shoes", category: "Fashion", price: 2000 },
    { product: "Watch", category: "Accessories", price: 1200 },
    { product: "Mobile Cover", category: "Accessories", price: 250 },
    { product: "T-Shirt", category: "Fashion", price: 600 }
  ];

  const cities = ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
  const payments = ["UPI", "Card", "Cash on Delivery"];

  const item = products[Math.floor(Math.random() * products.length)];
  const qty = Math.ceil(Math.random() * 3);

  const row = [
    new Date(),
    "ORD" + Math.floor(Math.random() * 100000),
    item.product,
    item.category,
    qty,
    item.price,
    qty * item.price,
    cities[Math.floor(Math.random() * cities.length)],
    payments[Math.floor(Math.random() * payments.length)]
  ];

  sheet.appendRow(row);
}
