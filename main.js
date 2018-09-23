let isActive=false;
function resumeInfo (){

  if(!isActive){
    isActive=true;
    document.getElementById('resumeInfo').style.visibility="visible";
    console.log('isActive',isActive)

  } else if(isActive){
    isActive=false
    document.getElementById('resumeInfo').style.visibility="hidden";
    console.log('else',isActive)
  }
}


const nycb = document.getElementById('NYCB');

nycb.addEventListener('click', resumeInfo)
