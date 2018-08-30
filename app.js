document.getElementById('button1').addEventListener('click', getWeather);


// Load Single Customer
function getWeather(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const data = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${data.data.text}</li>
          
        </ul>
      `;

      document.getElementById('data').innerHTML = output;
    }
  }

  xhr.send();
}