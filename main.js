function resumeInfo (id){
  console.log('id',id==='gs')
  if(id==='NYCB'){
    if(document.getElementById('nycbInfo').style.visibility==="visible"){
      document.getElementById('nycbInfo').style.visibility="hidden";
    }
    else {
      // document.getElementsByClassName('resumeDetail').style.visibility = 'hidden'
      document.getElementById('nycbInfo').style.visibility="visible";
    }
  } else if(id==='gs'){
    // document.getElementsByClassName('resumeInfo').style.visibility="hidden"
    if(document.getElementById('gsInfo').style.visibility==='hidden'){
      console.log('here')
      document.getElementById('gsInfo').style.visibility='visible'
    } else {
      document.getElementById('gsInfo').style.visibility='hidden'
    }
  }
}


document.getElementById('NYCB').addEventListener('click', ()=>resumeInfo('NYCB'))

document.getElementById('gs').addEventListener('click', ()=>resumeInfo('gs'))
