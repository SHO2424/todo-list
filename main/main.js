document.addEventListener("DOMContentLoaded",function() {
    const input =document.querySelector('.task_input');
    const button=document.querySelector(".task_btn");
    const list=document.querySelector(".task_list");
    
    const addtasks =(task) => {
        const item =document.createElement("li");
        item.classList.add("show_text");
       const additem=list.appendChild(item);
        additem.innerHTML=task;
        
        
    
        const deleteitem=document.createElement("button");
        deleteitem.innerHTML="delete";
        item.appendChild(deleteitem);
    
        deleteitem.addEventListener("click",evt=> {
            evt.preventDefault();
            deletetasks(deleteitem);
        });
    };
    
    const deletetasks =(deleteitem) => {
        const chosenitem =deleteitem.closest("li");
        list.removeChild(chosenitem);
    };
    
    button.addEventListener('click', function (evt) {
            evt.preventDefault();
            const task = input.value;
            addtasks(task);
            input.value = "";
        });









});
