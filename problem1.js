function caesarCipher(str, shifr) {
    shifr = shifr % 26
    let strArr = str.split("")
    let shifrarray = strArr.map(char => {
      let text = char.charCodeAt()
      if(char >='a' && char <='z') {
        text= ((text - 97 + shifr) % 26) + 97
      }
      else if(char >= 'A' && char <= 'Z') {
        text = ((text- 65 + shifr) %26) + 65
      }
      else{
        return char
      }
      return String.fromCharCode(text)
    });
    return shifrarray.join("");
  }
  
  let str = "aalom!";
  let shifr = 2;
  
  console.log(caesarCipher(str, shifr)); 

