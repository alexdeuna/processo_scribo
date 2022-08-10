function sum() {
  const number = parseInt(document.getElementById("number").value);

  if (Number.isInteger(number) && number > 0) {
    let i = 1;
    let s = 0;
    for (; i < number;) {
      if (i % 3 === 0 || i % 5 === 0) {
        s += i;
      }
      ++i;
    }
    alert(s);
  } else {
    alert("Favor digitar um número inteiro e positivo!");
  }
  
}