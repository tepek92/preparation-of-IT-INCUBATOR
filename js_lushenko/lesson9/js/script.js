document.querySelector(".update .btn").onclick = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&appid=5ae9f27280f8aaedaaac1083a474266b"
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".city .name").textContent = data.name;
      document.querySelector(".weather .temp").innerHTML = Math.round(data.main.temp - 273.15) + "&deg;";
      document.querySelector(".feature .status").textContent = data.weather[0].description;
      document.querySelector(".feature .img").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  
    })
    .catch(() => {});
}



// 5ae9f27280f8aaedaaac1083a474266b

//  http://openweathermap.org/img/wn/10d@2x.png