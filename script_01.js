function rechner(num1, num2, operation) {
    var ergebnis;
    
    if (operation === "summe") {
      ergebnis = summe(num1, num2);
    } else if (operation === "differenz") {
      ergebnis = differenz(num1, num2);
    } else {
      console.log("geht nicht!");
      return;
    }
    
    console.log("Das Ergebnis lautet: " + ergebnis);
  }
  
  function summe(a, b) {
    return a + b;
  }
  
  function differenz(a, b) {
    return a - b;
  }
  
  
  rechner(5, 3, "summe"); // Das Ergebnis lautet: 8
  rechner(10, 6, "differenz"); // Das Ergebnis lautet: 4
