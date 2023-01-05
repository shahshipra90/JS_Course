function play_game(){
let user = prompt("Enter Snake, Water or Gun")
let cpu_input = Math.floor(Math.random() *3);
let cpu = ["Snake", "Water", "Gun"][cpu_input]

const match = (cpu, user)=>{
  if(cpu === user){
    return "Game Tied"  
  }
  else if(cpu === "Snake" && user === "Water"){
    console.log(cpu)
    return "CPU"
  }
  else if(cpu === "Snake" && user === "Gun"){
    console.log(user)
    return "User"
  }
  else if(cpu === "Gun" && user === "Water"){
    console.log(user)
    return "User"
  }
  else if(cpu === "Gun" &&  user === "Snake"){
    console.log(cpu)
    return "CPU"
  }
  else if(cpu === "Water" && user === "Snake"){
    return "User"
  }
  else if(cpu === "Water" && user === "Gun"){
    return "CPU"
  }
}
let winner = match(cpu, user)
document.write(`<h2 style = "text-align: center;">Winner for this game is: ${winner}</h2>`)

if (winner == "CPU"){
  document.body.style.backgroundColor = "#e8dff5";
 }
else if (winner == "User"){
  document.body.style.backgroundColor = "#ddedea";
 }
else{
  document.body.style.backgroundColor = "#fce1e4";
 }
}
