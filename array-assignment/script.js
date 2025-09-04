todo=[]

function myTodos(){
    document.querySelector("#mapTodo").innerHTML=todo.map((v,i)=>`<div id="alert-1"
            class="flex items-center w-80 justify-between p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert">


            <div class="ms-3 text-xl
 font-medium">
            ${v}
            </div>
            <button type="button" onclick="delelet('${v}')"
                class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-1" aria-label="Close">
                <i class="fa-solid fa-trash text-red-500 text-xl"></i> 

            </button>
        </div>`).join("")
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

// Student Marks Calculator

mathsInput = document.getElementById('maths')
englishInput = document.getElementById('english')
marathiInput = document.getElementById('marathi')
scienceInput = document.getElementById('science')
hindiInput = document.getElementById('hindi')
comInput = document.getElementById('computer')

avgInput = document.querySelector('#avgMarks')
maxInput = document.querySelector('#maxMarks')
minInput = document.querySelector('#minMarks')
marks = []

function submitMartks(){
  maths =Number(mathsInput.value)
  marks.push(maths)
  english =parseInt(englishInput.value)
  marks.push(english)
  marathi = Number(marathiInput.value)
  marks.push(marathi)
  science = Number(scienceInput.value)
  marks.push(science)
  hindi = Number(hindiInput.value)
  marks.push(hindi)
  console.log(marks)
  avg = marks.reduce((sum,mark)=>sum+mark,0) / marks.length
  console.log(avg)

  avgInput.innerHTML = avg

  sortedMarks = marks.sort((a, b) => a - b)
  
  maxInput.innerHTML = sortedMarks[sortedMarks.length - 1]
  minInput.innerHTML = sortedMarks[0]
}

function resetMark(){
    mathsInput.value=""
    englishInput.value=""
    marathiInput.value=""
    scienceInput.value=""
    hindiInput.value=""
    comInput.value=""
    avgInput.innerHTML=""
    maxInput.innerHTML=""
    minInput.innerHTML=""

marks=[]
}

cars=["Audi","BMW","Hondai","Tata","Tesla"]

inputSearchElm=document.querySelector("#inputSearch")

function Search(){
    inputText=inputSearchElm.value
    result=cars.find((car)=>car.toLowerCase()==inputText.toLowerCase())
    if(result){
        document.querySelector("#searchResult").innerHTML=result
    }else{
        document.querySelector("#searchResult").innerHTML="Not Found"

    }
}
function resetSearch(){
    inputSearchElm.value=""
     document.querySelector("#searchResult").innerHTML=""
}