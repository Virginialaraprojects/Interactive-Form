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

 color.disabled=true;
 design.addEventListener('change', (e)=>{
    color.disabled=false;
   for(let i=0; i< colorOption.length; i++){
        const target=e.target.value;
        const dataTheme=colorOption[i].getAttribute('data-theme');
        
        if (dataTheme === target){
      //color.disabeled=false;

          colorOption[i].hidden=false;
          colorOption[i].setAttribute('selected','selected');
      //shirtColor.setAttribute('data-theme',dataTheme)
      //shirtColor.selected =true;
         }else{
          colorOption.hidden= true;
          colorOption.removeAttribute('selected')= false;
   }
 }
  
 });

