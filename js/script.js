 //Global variables to store the form inputs
 const nameElement=document.getElementById('name');
 const jobRole=document.getElementById('title');
 const otherJobRole=document.getElementById('other-job-role');
 const design=document.getElementById('design');
 const color=document.getElementById('color');
 const colorOption= color.children;
 const registerActivities=document.getElementById('activities');
 const costActivities=document.getElementById('activities-cost');
 const payment=document.getElementById('payment');
 const creditCard=document.getElementById('credit-card');
 const paypal=document.getElementById('paypal');
 const bitcoin=document.getElementById('bitcoin');
 const payOptions= payment.children
 const emailAddress=document.getElementById('email');
 const cardNumber=document.getElementById('cc-num');
 const zip=document.getElementById('zip');
 const cvv=document.getElementById('cvv');
 const form=document.querySelector('form');

//Step 3 use  the .focus method to focus the name element when intial load 
 nameElement.focus();

//Step 4. Use an .eventListener display or not to display the other job when selected by using if/else statement
 jobRole.addEventListener('change',(e)=>{
    if(e.target.value ==='other'){
        otherJobRole.style.display='block';
    }else{
        otherJobRole.style.display='none';
    }
    });


//step 5.Use an .eventListener to detect a change when the design element is selected and only show the colors avaiable for the design.
 color.disabled=true; // disables the color by default

 design.addEventListener('change', (e)=>{
    color.disabled=false;
   for(let i=0; i< colorOption.length; i++){
        const target=e.target.value;
        const dataTheme=colorOption[i].getAttribute('data-theme');

        if (dataTheme === target){
          colorOption[i].hidden=false;
          colorOption[i].setAttribute('selected','selected');
        }else{
          colorOption[i].hidden= true;
          colorOption[i].removeAttribute('selected')
   }
 }
  
 })
//step 6. use an .eventlistener to dectect change activities section.
//While using a ternary operator to be able to add or subtract activities selected and provide the total cost.

let totalCostActivities= 0;
registerActivities.addEventListener('change',(e)=>{
    const click=e.target;
    const dataCost= +click.getAttribute('data-cost');
        click.checked ? totalCostActivities += dataCost:totalCostActivities -= dataCost;
        costActivities.innerHTML=`Total: $${totalCostActivities}`;
 });


//step7
const preferredOption=payOptions[1].setAttribute('selected','selected');
//hide paypal and bitcoin options  from the start.
paypal.style.display='none';
bitcoin.style.display='none';
//use an .eventListener to detect a change when you pick between the payment options. 
payment.addEventListener('change',(e)=>{
    for(let i=0; i< payOptions.length; i++){
    const target=e.target.value;
// use switch statement to be able to display the payment options depending on what is selected.
    switch(target){
        case 'paypal':
                creditCard.style.display='none'
                paypal.style.display='block';
                bitcoin.style.display='none';
                break;
        case 'bitcoin':
                creditCard.style.display='none'
                paypal.style.display='none';
                bitcoin.style.display='block';
                break;
        default:
                creditCard.style.display='block'
                paypal.style.display='none';
                bitcoin.style.display='none';
                break;
    }

}
});

//step 8 checks for the validation of the form
// create a function to check the input validity and remove the error message
function passValidation(e){
    const parent= e.parentElement; 
    parent.classList.add('valid');
    parent.classList.remove('not-valid');
    parent.lastElementChild.style.display ='none';
}
// create a function to check the input invalidity and remove the error message
function failValidation(e){
    const parent= e.parentElement; 
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    parent.lastElementChild.style.display ='block';
}
// The helper function to validate the name input.
function checkName(){
    const nameValue=nameElement.value;
    const nameValid= /^[a-zA-z ,.'-]+$/.test(nameValue);
    if(nameValid){
        passValidation(nameElement);
    }else{
        failValidation(nameElement);
    }
    return nameValid;
}
// The helper function to validate the email input.
function checkEmail(){
    const emailValue=emailAddress.value;
    const emailValid= /^[^@]+@[^@]+\.[a-z]+$/i.test(emailValue);
    if(emailValid){
        passValidation(emailAddress);
    }else{
        failValidation(emailAddress);
    }
    return emailValid;
}
// The helper function to validate the register activities input.
function checkRegisterActivties(){
    const registerActivitiesValid= totalCostActivities >0;
    if(registerActivitiesValid){
       /* passValidation(registerActivities);*/
       registerActivities.classList.add('valid');
       registerActivities.classList.remove('not-valid');
       registerActivities.lastElementChild.style.display ='none';
    } else{
        registerActivities.classList.add('not-valid');
        registerActivities.classList.remove('valid');
        registerActivities.lastElementChild.style.display ='block';
        }
    return registerActivitiesValid ;

    }
    
// The helper function to validate the cardNumber input.
function checkCardNumber(){
    const cardNumberValue=cardNumber.value;
    const cardNumberValid=/\d{13,16}/.test(cardNumberValue);
    if(cardNumberValid){
        passValidation(cardNumber);
    }else{
        failValidation(cardNumber);
    }
    return cardNumberValid;
}

// The helper function to validate the zipcode input.
function checkZip(){
    const zipValue=zip.value;
    const zipValid= /^\d{5}$/.test(zipValue);
    if(zipValid){
        passValidation(zip);
    }else{
        failValidation(zip);
    }
    return zipValid;
}

// The helper function to validate the cvv input.
function checkCvv(){
    const cvvValue=cvv.value;
    const cvvValid= /^\d{3}$/.test(cvvValue);
    if(cvvValid){
        passValidation(cvv);
    }else{
        failValidation(cvv);
    }
    return cvvValid;
}

 //Real time validation for the required fields.
 //https://www.codegrepper.com/code-examples/javascript/how+to+check+if+an+element+is+in+focus+javascript
/*form.addEventListener('keyup',e =>{
    console.log(e);
    if(e.code !=='Tab'){
    if(nameElement ===document.activeElement){
        checkName();
    }
    if(emailAddress ===document.activeElement){
        checkEmail();
    }
    if(registerActivities ===document.activeElement){
        checkRegisterActivties();
    }
    if(cardNumber ===document.activeElement){
        checkCardNumber();
    }
    if(zip ===document.activeElement){
        checkZip();
    }
    if(cvv ===document.activeElement){
        checkCvv();
    }
};
});*/

//Step 9: Makes the register activity section border in focus using the for loop

const checkboxActvities = document.querySelectorAll('[type="checkbox"]');

for (let i=0; i< checkboxActvities.length; i++){
    checkboxActvities[i].addEventListener('focus', (e)=>{
        e.target.parentElement.classList.add('focus');
    });
   checkboxActvities[i].addEventListener('blur', (e)=>{
        e.target.parentElement.classList.remove('focus');
    });
}

//Checks the requires fields and prevents the form from submitting if invalid.
form.addEventListener('submit',(e) =>{
    if(!checkName()){
        e.preventDefault();
    }
    if(!checkEmail()){
        e.preventDefault();
    }
    if(!checkRegisterActivties()){
        e.preventDefault();
    }
    //if the value of the eventlistner of payment is 'creditcard' then validate creditcard, zip, & cvv.
    if(payment.value === 'credit-card'){
        if(!checkCardNumber()){
            e.preventDefault();
        }
        if(!checkZip()){
            e.preventDefault();
        }
        if(!checkCvv()){
            e.preventDefault();
        }
    }
});

