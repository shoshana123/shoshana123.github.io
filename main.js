function resumeInfo (){
  let isActive=false;
  const nycb = document.getElementById('NYCB');
  console.log('isActive')
  if(!isActive){
    isActive=true;
    document.getElementById('resumeInfo').style.visibility="hidden";

  } else{

    document.getElementById('resumeInfo').style.visibility="visible";
  }
}
