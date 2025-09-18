let getAllPeople;

function fetchData() {
     fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(data=>{
        getData(data.users)
        getAllPeople = data.users
        reset(getAllPeople)
    })
    .catch((err)=>console.log(err))


}



function getData(users){
        renderData(users)
}

function getAllUser(){
    fetchData()
   
}

keywordSearchElmt = document.querySelector('#searchInput')

function searchPeople(){
    term = keywordSearchElmt.value
    console.log(getAllPeople)
    const searchedPeople = getAllPeople.filter((p,i)=>Object.values(p).some(s=>JSON.stringify(s).includes(term)))
    renderData(searchedPeople)
}

function reset(users){
    renderData(users)
}

function renderData(users) {
   document.querySelector("#peoplelist").innerHTML = users.map((user) => `
    <div class="col">
            <div class="card ">
               <img src="${user.image}" class="card-img-top object-fit-contain" width="80px" height="150px" alt="${user.firstName}">
                <div class="card-body">
                    <h5 class="card-title fs-3"><span class="fs-2 mx-1">🙎‍♂️</span>${user.firstName} ${user.lastName}</h5>
                    <p class=" fs-5"><span class="fs-4 ">📞</span>${user.phone}</p>
                    <p class=" fs-5"><span class="fs-4 ">📧</span>${user.email}</p>

                    <p class=" fs-5"><span class="fs-4 ">🏢</span>${user.company.name}</p>

                    <p class=" fs-5"><span class="fs-4 ">💼</span>${user.company.title}</p>

                    <p class=" fs-5"><span class="fs-4 ">💻</span>${user.company.department}</p>
                </div>
            </div>
        </div>`
    ).join("")
}

fetchData()


// function fetchData(){
//     fetch('https://dummyjson.com/users')
//     .then(response=>response.json())
//     .then(data=>{
//         getData(data.users)
//         getAllPeople = data.users
//     })
//     .catch((err)=>console.log(err))
// }

// totalPeopleElmt = document.querySelector('#totalPeople')
// peopleRenderElmt = document.querySelector('#peopleRender')
// keywordSearchElmt = document.querySelector('#keywordSearch')

// function getData(users){
//         renderData(users)
// }

// function searchPeople(){
//     term = keywordSearchElmt.value
//     console.log(getAllPeople)
//     const searchedPeople = getAllPeople.filter((p,i)=>Object.values(p).some(s=>JSON.stringify(s).includes(term)))
    
    
    
//     renderData(searchedPeople)
// }