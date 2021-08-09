let message;
let distance;
let city;
let tip;

scuberGreetingForFeet();
ternaryCheckCity();
switchOnCharmFromTip();

function scuberGreetingForFeet(distance, message){
  // Write your code here!

  if(distance <= 400){
    message = "This one is on me!";
    return message;
  } else if (distance > 2000 && distance <= 2500){
    message = 'I will gladly take your thirty bucks.';
    return message;
  } else if (distance > 2500){
    message = `No can do.`;
    return message;
  }
}

function ternaryCheckCity(city, message){
  // Write your code here!
  if(city == "NYC"){
    message = "Ok, sounds good."
    return message;
  } else{
    message = "No go."
    return message;
  }
}

function switchOnCharmFromTip(tip, message){
  // Write your code here!
    switch(tip) {
      case "generous":
        message = "Thank you so much.";
        return message;
        break;
      case "not as generous":
        message = "Thank you.";
        return message;
        break;
      default:
        message = "Bye.";
        return message;
  }
}