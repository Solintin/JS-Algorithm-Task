
//

const checkYuGiOh = (n) => {
  const inputArray = [];
  console.log(typeof(n));
  if (typeof n == "number") {
    for (let i = 1; i <= n; i++) {
      inputArray.push(i);
    }
    inputArray.forEach((el, i) => {
      if (el % 2 == 0) {
        inputArray[i] = "yu";
      }

      if (el % 3 == 0) {
        if (typeof inputArray[i] === "string") {
          inputArray[i] = `${inputArray[i]}-gi`;
        } else {
          inputArray[i] = "gi";
        }
      }
      if (el % 5 == 0) {
        if (typeof inputArray[i] === "string") {
          inputArray[i] = `${inputArray[i]}-oh`;
        } else {
          inputArray[i] = "oh";
        }
      }
    });
     return inputArray;
  } else if (typeof n == "string" && /\d/.test(`${n}`)) {
    parseInt(n, 10);

    for (let i = 1; i <= n; i++) {
      inputArray.push(i);
    }
    inputArray.forEach((el, i) => {
      if (el % 2 == 0) {
        inputArray[i] = "yu";
      }

      if (el % 3 == 0) {
        if (typeof inputArray[i] === "string") {
          inputArray[i] = `${inputArray[i]}-gi`;
        } else {
          inputArray[i] = "gi";
        }
      }
      if (el % 5 == 0) {
        if (typeof inputArray[i] === "string") {
          inputArray[i] = `${inputArray[i]}-oh`;
        } else {
          inputArray[i] = "oh";
        }
      }
    });
     return inputArray;
  } else {
    return `Invalid parameter: ${n}`;
  }

};


//FAHRENHEIT TO CELSIUS
const convertFahrToCelsius = (f) => {
  if (typeof f === "number") {

    let celsius = ((f - 32) * 5) / 9;
    
    
    return `${celsius.toFixed(4)}`;
  } 
  else if (typeof f === "string") {

    parseInt(f, 10);
    let celsius = ((f - 32) * 5) / 9;
    
    
    return `${celsius.toFixed(4)}`;
  } else {
    let template = `${f} is not a valid number but a/an ${typeof f}`
    return template;
    }
};
