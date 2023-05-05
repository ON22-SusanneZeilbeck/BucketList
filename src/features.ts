

const locationElement = document.getElementById("location") as HTMLElement;
const date_time_el = document.getElementById("date-time") as HTMLElement;


 // Uhrzeit und Datum
 function updateTime() {
    const now = new Date();
    const date_str = now.toLocaleDateString();
    const time_str = now.toLocaleTimeString();
    date_time_el.textContent = `${date_str}, ${time_str}`;}
    setInterval(updateTime, 1000);
  
    //Standort
    function location(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then((response) => response.json())
    .then((data) => {
          const city = data.city;
          const country = data.countryName;
          locationElement.textContent = `My current location: ${city} ${country}`;})
    .catch((error) => {
          console.error(error);
          locationElement.textContent = "failed to get your current location";});});}
          else {locationElement.textContent = "geolocation is not supported by your browser";}}
  
          export {updateTime, location};