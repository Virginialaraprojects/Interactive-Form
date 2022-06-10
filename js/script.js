 const name=document.getElementById('name').focus();

 const jobRole=document.getElementById('title');
 const otherJobRole=document.getElementById('other-job-role');

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

 const registerActivities=document.getElementById('activities');
 const costActivities=document.getElementById('activities-cost');
 const totalCostActivities= 0;

 /*registerActivities.addEventListener('change',(e)=>{
const click=e.target
const dataCost= +click.getAttribute('data-cost');
if(){


}


 });*/




