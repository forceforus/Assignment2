function guess(){
    let number = prompt("type number",1);
   if(checknum(number)){
     let randomnum = randInt(1,5);
   let mess = "";
   if(number==randomnum){
     mess+="Correct\n"
   }else{
     mess+="Not Correct\n"
   }
   mess += "Randomnumber = "+randomnum+"You Guess = "+number;
   alert(mess);
   }else{
    alert("pls input 1-5");
   }
   
   function randInt(min,max){
       let x = (max-min)+1;
       return min+Math.floor(Math.random()*x);
   }
   function checknum(number){
   return(number>=1 && number <=5);
   
   }
   
     }
     export default guess;