document.querySelector(".user-mortgage-form").addEventListener('submit',CalculateMortgage);



function CalculateMortgage(events){
    events.preventDefault();

    const  mortgageAmount= document.querySelector('.moneyAmount');
    const mortgageTerms= document.querySelector('.mortgageTerms');
    const mortgageInterest=document.querySelector('.mortgageInterest');
    const mortgageOptions= document.querySelector('input[name="options"]:checked');
    const optionsContainer=document.querySelector('.mortgage-type');
    const parentInputbox= mortgageAmount.parentElement;
    const parentInputbox1= mortgageTerms.parentElement;
    const parentInputbox2= mortgageInterest.parentElement;


   //  mortgageAmount.addEventListener('blur',function(){
   //          let quoteAmount=mortgageAmount.value;
   //          let goodText= quoteAmount.split(',').join('');
   //          let numberValueMortgageAmount=Number(goodText);
            
   //          if (isNaN(numberValueMortgageAmount)===false){
   //             mortgageAmount.value=numberValueMortgageAmount.toLocaleString();
   //          }
   //  })
    
   let AmountText1 = mortgageAmount ? mortgageAmount.value.split(',').join('') : "0";
    let numberValueMortgageAmount = Number(AmountText1);
   console.log('clean amount:',numberValueMortgageAmount);

    function showError(userMort, message){

        userMort.classList.add('MessageError');
         

        let errorMsg = document.createElement('p');
        errorMsg.className = 'error';
        errorMsg.textContent=message;
        errorMsg.style.color='hsl(4, 69%, 50%) ' ;
        userMort.parentElement.insertAdjacentElement('afterend', errorMsg);
    }
    document.querySelectorAll(".error").forEach(e => e.remove());
    document.querySelectorAll(".MessageError").forEach(e => e.classList.remove("MessageError"));

    let isValid= true;


    if(  mortgageAmount.value===""){
        showError(mortgageAmount, 'This field is required');
       parentInputbox.classList.add('invalid');
       isValid=false;
    }

 if( mortgageTerms.value===""){
    showError( mortgageTerms,'This field is required')
     parentInputbox1.classList.add('invalid');
    isValid=false
 }
 if(mortgageInterest.value===""){
    showError(mortgageInterest, 'This field is required');
     parentInputbox2.classList.add('invalid');
    isValid=false
 }

 if(!mortgageOptions ){
       if(optionsContainer){
               showError(optionsContainer,'This field is required');
         }
    isValid=false;
 }
 if(isValid){
       
       let interestRate= Number(mortgageInterest.value);
       let ratingYears= Number(mortgageTerms.value);
       let repaymentsMonthly=0;

       if (mortgageOptions.value === 'Repayment') {
            let monthlyRate = (interest / 100) / 12;
            let n = ratingYears* 12;
            repaymentsMonthly= numberValueMortgageAmount * monthlyRate * (Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
        } 
        else if (mortgageOptions.value === 'Interest-Only') {
            monthlyRepayment = (numberValueMortgageAmount * (interestRate/ 100)) / 12;
        }
 console.log('calculated:' ,repaymentsMonthly);
 }
}


