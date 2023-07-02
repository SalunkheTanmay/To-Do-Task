const inputbox=document.getElementById('input-area');
const list=document.getElementById('task-info')
function addtask(){
   if(inputbox.value===''){
    alert("Write some task please");
   }else{
   const task=document.createElement("div");
//    task.innerHTML=inputbox.value
//    list.appendChild(task);
    task.classList.add('task-info');
    const task_content=document.createElement('div');
    task_content.classList.add("task-input")
    // task_content.innerText=inputbox.value;
    task.appendChild(task_content);

//readonly
     const task_input=document.createElement('input');
       task_input.classList.add("text-area")
     task_input.type='text';
    task_input.value=inputbox.value;
      task_input.setAttribute("readonly", "readonly");
      task_content.appendChild(task_input);

      //action button

       const task_action=document.createElement('div');
       task_action.classList.add('action');
       const task_edit=document.createElement('button');
        task_edit.classList.add('edit');
       task_edit.innerHTML='Edit';

       const task_delete=document.createElement('button');
       task_delete.classList.add('delete');
       task_delete.innerHTML="Delete";

        task_action.appendChild(task_edit);
       task_action.appendChild(task_delete);
       task.appendChild(task_action);

   list.appendChild(task)
   inputbox.value="";

   task_edit.addEventListener('click', ()=>{
    if(task_edit.innerText.toLowerCase()=="edit"){
      task_input.removeAttribute('readonly');
      task_input.focus();
      task_edit.innerText="Save";
    }else{
      task_input.setAttribute("readonly","readonly");
      task_edit.innerText="Edit";
    }
   
   });

   task_delete.addEventListener("click",()=>{
    list.removeChild(task);
   })
   }
}