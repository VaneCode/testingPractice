class calculatorClass {
    static add(num1, num2){
        return num1 + num2;
    }

    static subtract(num1, num2){
        return num1 - num2;
    }

    static divide(num1 , num2){
      if(num2 !== 0)  
      return num1 / num2;
      else
      return "Error";
    }

    static multiply(num1, num2){
        return num1 * num2;
    }
}

modul.exports = calculatorClass;