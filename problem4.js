String.prototype.stringuchunmap = function(func) {
    let a = this.split("");
  
    let newArray = a.map((item, index) => {
      return func.call(window, item, index, this);
    });
  
    return newArray.join("");
  };

  let res = "Men buni Uddaladim 😎".stringuchunmap(function (item, index, thing) {
    return item.toUpperCase();
  });
  
  console.log(res);