function generate(){
let birthYear = document.querySelector(".input").value;
let result = document.querySelector("#result");
let ageInDays = (2024 - birthYear) * 365;
result.textContent = "your age in days is " + ageInDays;
   if (birthYear == ""){
      alert("Enter Only Numbers");
      document.querySelector("#result").textContent = "ERROR";
   }
   
}
function reset(){
   document.querySelector("#result").textContent = "";
   document.querySelector(".input").value = "";
}