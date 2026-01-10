function revString(str){
    let revStr = str.split(" ").reverse().join(" ");
    console.log(revStr);
}

function charRev(char){
    let newString = "";
  for (let i = char.length - 1; i >= 0; i--) {
    newString += char[i];
  }
  console.log(newString);
}

revString("I'm Currently Testing With Selenium")
charRev("Natraj")