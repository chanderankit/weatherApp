const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const output = document.querySelector('.info');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;

    if(cityVal === ""){
        output.innerText = "plz enter city name before search ....";
        datahide.classList.add('data_hide');
    }else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7c4ee979ed94bb315e8dd76fef06662e`;
            const response = await fetch(url);   
            
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            console.log(arrData[0].weather[0].main);

            output.innerHTML = cityVal;
            temp.innerHTML = arrData[0].main.temp;          
            
            
            // condition to check weather icon
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML = '<i class="fa fa-sun" style="color: yellow;"></i>';
            } else if(tempMood == 'Clouds'){
                temp_status.innerHTML = '<i class="fa fa-cloud" style="color: white;"></i>';
            } else if(tempMood == 'Rain' || tempMood == 'Drizzle'){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color: blue;"></i>';
            }else if(tempMood == 'Mist' || tempMood == 'Haze'){
                temp_status.innerHTML = '<i class="fa-solid fa-smog"></i>';
            }else {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
            }

            datahide.classList.remove('data_hide');
    
        } catch (error) {
            output.innerText = "Enter the correct name.";
            datahide.classList.add('data_hide');
        }
    }

};

submitBtn.addEventListener('click', getInfo);