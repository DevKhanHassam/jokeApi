// use asyn and await


let container=document.querySelector('#latifa');

const mazaq= async()=>{
                           //set header by the help of postman extension
   try{
    const setheader={

        headers:{
            accept:"application/json"
        }     
            
        }
        
        const req=await fetch('https://icanhazdadjoke.com/',setheader)
        const data=await req.json();
       
        container.innerHTML=data.joke;
   }

   catch(error)
   {console.log("YOU HAVE THIS ERROR=",error)}
}

mazaq();

let nextbutton=document.querySelector('#nextjoke');
nextbutton.addEventListener('click',mazaq)
