 resultofleapyar=document.querySelector('#resultofyear')
inputElem=document.querySelector('#year')
 function checkLeapYear(){
   resultofleapyar.style.display="block"
    getyear=inputElem.value
if(getyear % 4 == 0 && getyear % 100 != 0){
    resultofleapyar.textContent=getyear + "is a leap year"
    
}
else if(getyear % 400 == 0){
    resultofleapyar.textContent=getyear + " " + "is a leap year"
        
}else{
       resultofleapyar.textContent= getyear +" "+ "is not a leap year"
   }
 }




    
