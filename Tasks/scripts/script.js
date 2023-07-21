var textbox = document.getElementById("addtextbox");
var addbtn = document.querySelector("#addbutton");
var maincnt = document.querySelector("#mainwrapper");

var tasks = [];

function addtask(task){
    if(task!==""){
      var iDiv = document.createElement('div');
    maincnt.prepend(iDiv);

    var iDivtxt = document.createElement('div');
    iDiv.appendChild(iDivtxt);
    iDiv.style.backgroundColor="white";
    iDiv.style.marginBottom="5px";
    iDiv.style.display="flex";
    iDiv.style.flexDirection="row";
    iDiv.style.borderRadius="10px";
    iDiv.style.border="2px solid black"
    iDiv.style.marginRight="10px";

    iDivtxt.innerHTML = task;

    tasks.push(task);
    var stringform = JSON.stringify(tasks);
    localStorage.setItem("tasksdb",stringform);
    console.log(tasks);

    iDivtxt.style.padding="15px 10px 15px 10px";
    iDivtxt.style.flex=8;
    
    var iDivDel = document.createElement('div');
    iDiv.appendChild(iDivDel);
    iDivDel.innerHTML= "X";
    iDivDel.style.flex=1;
    iDivDel.style.textAlign="center";
    iDivDel.style.verticalAlign="middle";
    iDivDel.style.lineHeight="30px";
    iDivDel.style.backgroundColor="red";
    iDivDel.style.color="white";
    iDivDel.style.borderRadius="50px";
    iDivDel.style.border = "1px solid black"
    iDivDel.style.margin="10px";

    textbox.value="";   

    iDivDel.addEventListener("click",()=>{
        /*localStorage.removeItem(iDivtxt.innerHTML);*/
        tasks.splice(tasks.indexOf(task),1);
        stringform = JSON.stringify(tasks);
        localStorage.setItem("tasksdb",stringform);
        maincnt.removeChild(iDiv);
    })  
    }
    
}

/* populate from localstorage here */
var taskget = localStorage.getItem("tasksdb");
if(taskget){
    var taskstemp = [];
    taskstemp = JSON.parse(taskget);
    for(const i in taskstemp){
        addtask(taskstemp[i]);
    }

}

textbox.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        var task = textbox.value;
        console.log(textbox.value);
        addtask(task);  
    }
});
addbtn.addEventListener("click",()=>{
    var task = textbox.value;
    console.log(textbox.value);
    addtask(task); 
});






