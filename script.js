function getMilk(bottles, money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
   
   
    console.log("buy " + bottles + " bottles of Milk, which will cost you $" + TotalBottles(money, 1.5) + ".");   
  
   
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
   return calcChange(money, 1.5);
  }
  
  function TotalBottles(startingPrice, costPerBottle) {
      var numberofbottles = Math.floor(startingPrice / costPerBottle);
  
     return numberofbottles;
  }
  
  function calcChange(startAmount, costPerBottle) {
    var change = startAmount % costPerBottle;
  
    return change;
   
  }


  //BMI calculator
  function TotalWeight(height, weight) {
    let weightgained = Math.round(height / weight - 150);
    
    console.log("Your weight sir is now " + weightgained);


    return weightgained;
  }

  TotalWeight(6, 150);
  

  let user = prompt("Enter your weight here, " + TotalWeight);



  console.log("Hello there Sir, here is your " + getMilk(12, 64) + " change."); //calling back the function with values
  
  