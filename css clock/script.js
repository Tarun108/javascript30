
const secondhand = document.querySelector('.second_hand');
const minhand = document.querySelector('.min_hand');
const hourehand = document.querySelector('.hour_hand');
function setDate() {
   const now = new Date();
   const second = now.getSeconds();
   const secondDegrees = (second / 60) * 360 + 90;
   secondhand.style.transform = `rotate(${secondDegrees}deg)`;
  

   const minutes = now.getMinutes();
   const minutesDegees = (minutes / 60) * 360 +90;
   minhand.style.transform = `rotate(${minutesDegees}deg)`;
  

   const houre = now.getHours();
   const houredegrees = (houre / 12) * 360 +90;
   hourehand.style.transform = `rotate(${houredegrees}deg)`;
   
   console.log(houredegrees);
}

setInterval(setDate, 1000);