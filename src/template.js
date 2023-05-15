const team = generateTeam => { 
  
    const managerHTML = manager => {;
    return `
   
   <div class="card" style="width: 18rem;">
    <div class="card-body oop-card border border-dark border-2">
      <h5 class="card-title oop-text">${manager.getName()}</h5>
      <p class="oop-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>ID:</b> ${manager.getId()}</li>
      <li class="list-group-item"><b>Email:</b> ${manager.getEmail()}</li>
      <li class="list-group-item"><b>Office Number:</b> ${manager.getOfficeNumber()}</li>
    </ul>
  </div>`;
    }
  
  const engineerHTML = engineer => {
    return `
  <div class="card" style="width: 18rem;">
    <div class="card-body oop-card border border-dark border-2">
      <h5 class="card-title oop-text">${engineer.getName()}</h5>
      <p class="oop-text">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>ID:</b> ${engineer.getId()}</li>
      <li class="list-group-item"><b>Email:</b> ${engineer.getEmail()}</li>
      <li class="list-group-item"><b>Github Username:</b> ${engineer.getGithub()}</li>
    </ul>
  </div> `;
  }
  
  const internHTML = intern => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body oop-card border border-dark border-2">
      <h5 class="card-title oop-text">${intern.getName()}</h5>
      <p class="oop-text">Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>ID:</b> ${intern.getId()}</li>
      <li class="list-group-item"><b>Email:</b> ${intern.getEmail()}</li>
      <li class="list-group-item"><b>School:</b> ${intern.getSchool()}</li>
    </ul>
  </div> `;
  }
  let managerArray = [];
  let engineerArray = [];
  let internArray = [];
  
  managerArray = generateTeam
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => managerHTML(manager));
  
  engineerArray = generateTeam
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => engineerHTML(engineer));
  
  internArray = generateTeam
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => internHTML(intern));
  
  const html = [...managerArray, ...engineerArray, ...internArray].join("");
  return html;
  
  }
  
  module.exports = generateTeam => {
    const html = [];
  
    html.push(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Object Oriented Programming Team Profiler Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav class="navbar navbar oop-navbar border-bottom border-dark border-2">
      <div class="container-fluid">
      <div class="navbar-brand mb-0 h1 text-light oop-title">
      <h1 class="oop-text">Object Oriented Programming Team Profile Generator</h1>
      </div>      
        </div>
    </nav> 
    
  <div class="container">
              <div class="row">
                  <div class="main-section col-12 d-flex justify-content-center column-gap-3 my-4">
     
                  ${team(generateTeam)}
  
    
          </div>
        </div>
  </div>
    </body>
    </html>`);
  
    return html.join("");
  }
  