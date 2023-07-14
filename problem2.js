function Ekub(a, b) {
    if (b === 0) {
      return a;
    } else {
      return Ekub(b, a % b);
    }
  }
  
console.log(Ekub(10,8));