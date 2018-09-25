const resumeDetails = {
  gs: {
    employer: 'Goldman Sachs & Co. LLC',
    title: 'Business Analyst',
    date: '2016 - 2018',
    location: 'New York, NY',
    description: 'Streamlined, analyzed and produced monthly reports and presentations including business’ P&L, net sales, product pipeline, headcount, client uptake and regulatory data requests <br> Coded dynamically generated client documents for European regulation based on investment performance in 4 languages <br> Monitored the non-compensation expenses for 4 regions and 5 content specialist areas of the business'
  },
  NYCB: {
    employer: 'New York City Ballet',
    title: 'Corps de Ballet',
    date: '2009 - 2012',
    location: 'New York, NY',
    description: 'Performed in 7 - 10 shows weekly, 6 days per week and rehearsed 6 - 8 hours daily'
  },
  barnard: {
    employer:'Barnard College, Columbia University',
    title: 'Bachelor of Arts in Economics',
    date: '2012 - 2015',
    location: 'New York, NY',
    description: 'Coursework included: Microeconomics, Macroeconomics, Calculus I, Statistics, Financial Economics, Political Economy'

  },
  graceHopper: {
    employer:'Grace Hopper Program at Fullstack Academy',
    title: 'Teaching Fellow',
    date: '2018 - Present',
    location: 'New York, NY',
    description: 'Debugged, mentored and taught full-stack JavaScript concepts and best practices to 40+ students<br>Administered technical interviews to prospective students<br>Curriculum focused on full-stack web development using JavaScript, with topics including Node, Express, React, Redux and PostgreSQL using Sequelize ORM'
  }

};


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


document.getElementById('NYCB').addEventListener('click', () => resumeInfo('NYCB'));

document.getElementById('gs').addEventListener('click', () => resumeInfo('gs'));

document.getElementById('barnard').addEventListener('click', () => resumeInfo('barnard'));

document.getElementById('graceHopper').addEventListener('click', () => resumeInfo('graceHopper'));

