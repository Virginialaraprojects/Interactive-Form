 const name=document.getElementById('name');
 
 const jobRole=document.getElementById('title');
 const otherJobRole=document.getElementById('other-job-role');
 name.focus();
 jobRole.addEventListener('change',(e)=>{

if(e.target.value ==='other'){
    otherJobRole.style.display='block';
}else{
    otherJobRole.style.display='none';
}
 });

 const design=document.getElementById('design');
 const color=document.getElementById('color');
 const colorOption= color.children;
//step 5
 color.disabled=true;
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
//step6// 
 const registerActivities=document.getElementById('activities');
 const costActivities=document.getElementById('activities-cost');
 let totalCostActivities= 0;

registerActivities.addEventListener('change',(e)=>{
const click=e.target;
const dataCost= +click.getAttribute('data-cost');
  click.checked ? totalCostActivities += dataCost:totalCostActivities -= dataCost;
costActivities.innerHTML=`Total: $${totalCostActivities}`;
 });


//step7
const payment=document.getElementById('payment');
const creditCard=document.getElementById('credit-card');
const paypal=document.getElementById('paypal');
const bitcoin=document.getElementById('bitcoin');
const payOptions= payment.children

const preferredOption=payOptions[1].setAttribute('selected','selected');

paypal.style.display='none';
bitcoin.style.display='none';

payment.addEventListener('change',(e)=>{
    for(let i=0; i< payOptions.length; i++){
    const target=e.target.value;
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

//step 8
const emailAddress=document.getElementById('email');
const cardNumber=document.getElementById('cc-num');
const zip=document.getElementById('zip');
const cvv=document.getElementById('cvv');
const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
const nameValue=name.value;
const nameValid= /^[a-zA-z ,.'-]+$/.test(nameValue);

if(nameValid === true){
   
}else{
    e.preventDefault();
};

});













//step9