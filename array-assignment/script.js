todo=[]

function myTodos(){
    document.querySelector("#mapTodo").innerHTML=todo.map((v,i)=>`<p>${v}</p><button class="btn" onclick="delelet('${v}')">Delete</button>`).join("")
}

function submitTodo(){
    todoValue=document.querySelector("#todo").value
    todo.push(todoValue)
    myTodos();
    document.querySelector("#todo").value="";

}

function delelet(v){
    
    todo.map((t)=>{
        if(t == v){
            todo.splice(v,1)
        }
    })
    myTodos()
    
}

function restTodo(){
    todo=[]
    myTodos()
}