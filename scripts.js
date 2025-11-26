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

    let AmountText1= mortgageAmount.value.split(',').join('');
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
}


