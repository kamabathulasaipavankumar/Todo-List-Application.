  let userInputele=document.getElementById("todoUserInput");
  let addbuttonele=document.getElementById("add-btn-Id");
  let unorderList=document.getElementById("items-listid");
  let todotasks=[];



  addbuttonele.addEventListener("click",function(event){
    
    let todolist={
        task:userInputele.value,
        status:"created",
        isChecked: false
    }
   
    todotasks.push(todolist);
    console.log(todotasks);
    userInputele.value="";
  
      
    localStorage.setItem("todo",JSON.stringify(todotasks));

  

getData();
})





function getData(){
    let localdata=JSON.parse(localStorage.getItem("todo")) || [];
    console.log(localdata);

    todotasks =[...localdata];
    unorderList.innerHTML='';
    for(let i=0; i<localdata.length;i++){
        let element=localdata[i];
        console.log(element); 

        let listItems = document.createElement('li');
        listItems.setAttribute("class","d-flex align-items-center  justify-content-center");
        unorderList.appendChild(listItems)
        

        let checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("class"," item-checkbox ");
        checkBox.setAttribute("id",`checkboxid${i}`);
        listItems.appendChild(checkBox);
       
    
         let labelText=document.createElement("label");
         labelText.innerHTML = element.task;
         labelText.setAttribute("for",`checkboxid${i}`)
         labelText.setAttribute("class"," labels ")
         listItems.appendChild(labelText)

         let buttonDiv=document.createElement("div");
         buttonDiv.setAttribute("class"," text-end  ");
         labelText.appendChild(buttonDiv)
       
        
      
        let DoneBtn=document.createElement("button")
        DoneBtn.textContent="Done"
        DoneBtn.setAttribute("class","btn btn-success")
        buttonDiv.appendChild(DoneBtn)

        let DeleteBtn=document.createElement("button")
        DeleteBtn.innerHTML="Delete"
        DeleteBtn.setAttribute("class"," btn btn-danger mx-2")
        DeleteBtn.onclick=()=>{
            console.log("del",i);
            todotasks.splice(i,1);
            localStorage.setItem("todo",JSON.stringify(todotasks));
            getData();
        }
       buttonDiv.appendChild(DeleteBtn)

        
        
    }
}
getData();
















