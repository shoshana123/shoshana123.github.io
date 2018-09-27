function resumeInfo (id){
  let checker
  let specificDetails
  for(let key in resumeDetails){
    if(key===id){
      checker = resumeDetails[key].title
      specificDetails = resumeDetails[key]
    }
  }
  if(checker!==document.getElementById('title').innerHTML.slice(0,-2)){
    document.getElementById('employer').innerHTML = specificDetails.employer+', ';
    document.getElementById('title').innerHTML = specificDetails.title+', ';
    document.getElementById('date').innerHTML = specificDetails.date;
    document.getElementById('location').innerHTML = specificDetails.location+',';
    document.getElementById('description').innerHTML = specificDetails.description;

  }
  else{
    document.getElementById('employer').innerHTML=""
    document.getElementById('title').innerHTML=""
    document.getElementById('date').innerHTML=""
    document.getElementById('location').innerHTML=""
    document.getElementById('description').innerHTML=""
  }
}


// Event Listeners

document.getElementById('NYCB').addEventListener('click', () => resumeInfo('NYCB'));

document.getElementById('gs').addEventListener('click', () => resumeInfo('gs'));

document.getElementById('barnard').addEventListener('click', () => resumeInfo('barnard'));

document.getElementById('graceHopper').addEventListener('click', () => resumeInfo('graceHopper'));
