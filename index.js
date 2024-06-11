// Add your code here
const formData = {
        name: "Chopper",
        email: "theDevelopingDog@paws.com"
    }

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

    
function submitData(){
   return fetch("http://localhost:3000/users", configurationObject)
    .then((resp)=> {return resp.json()})
    .then((obj)=> { const bodyElement = document.getElementsByTagName("body")[0];
        const dataTextNode = document.createTextNode(obj.id);
        bodyElement.appendChild(dataTextNode);        
        })
    .catch(function (error) {
       alert("Bad things! Ragnarők!");
        const bodyElement= document.getElementsByTagName("body")[0];
        const dataTextNode= document.createTextNode(error.message);
        bodyElement.appendChild(dataTextNode);

      });
}

//document.querySelector("6e1d").appendChild(dogs)