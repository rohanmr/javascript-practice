inputElm = document.querySelector("#cityInput")
btnElm = document.querySelector("#featchBtn")
resultElm = document.querySelector("#showInfo")

btnElm.addEventListener('click', () => {
    cityName = inputElm.value
    fetchWeatherAPI(cityName)
})

function renderInfo(data) {
    console.log(data)
    resultElm.innerHTML = `
    <div class=" card shadow p-5 my-2 mx-auto" style="width: fit-content;">

    <div class="card" style="width: 30rem;">

            <div class="card-body">
                <h5 class="card-title fs-1">${data.name}</h5>
                <p class="card-text fs-2">${data.sys.country}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${data.weather[0].main}</li>
                <li class="list-group-item">Temp: ${data.main.temp}</li>
                <li class="list-group-item">Wind: ${data.wind.speed}</li>


                
                <li class="list-group-item"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].icon}"></li>
            </ul>
           
        </div>

        </div>
    
    
    
    
                    
    `
}


function fetchWeatherAPI(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
        .then(response => response.json())
        .then(data => renderInfo(data))
        .catch(error => console.log(error))
}