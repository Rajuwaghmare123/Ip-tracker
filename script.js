const trackBtn = document.querySelector(".track-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");

trackBtn.addEventListener("click", function(){
    axios.get("https://ipapi.co/json/").then((response) => {
     ipDisplay.textContent = `Ip:${response.data.ip}`;
     locationDisplay.textContent=`Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;

     geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;
    });
});
