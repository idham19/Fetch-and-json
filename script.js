// TODO: add code here
window.addEventListener('load', (event) => {
   fetch('https://handlers.education.launchcode.org/static/astronauts.json')
   .then(response=>response.json())
   .then(data=>{
   
   for (i=0;i<data.length;i++){
    console.log(data[i])

    let body =document.getElementById('a')
    if(data[i].active==='true'){
        return data[i].active.style= "color:green" 
    }
       body.innerHTML+=`
       <article class='astronaut'>
       <h2>${data[i].firstName} ${data[i].lastName}  </>

       <div>
       <h5>. hour is space: ${data[i].hoursInSpace}<h5/>
       <h5>. active: ${data[i].active} <h5/>
       <h5>. Skills: ${data[i].skills} <h5>
       <div/>

       <img class='avatar' src="${data[i].picture}" alt="">
       <article/>
    `  
   
    }

   })
  });