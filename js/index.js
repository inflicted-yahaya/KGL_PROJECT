function calculateTotal(price, qty) {
  let total = price * qty;
  if (total > 10000) {
    return total * 0.9;
  }
  return total;
}

var myPrice = 5000;
const myQty = '2';
console.log(calculateTotal(myPrice, myQty));
