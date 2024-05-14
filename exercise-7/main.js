let text = document.getElementById("text");
let sliderInput = document.getElementById("my-range");

function moodTracker() {
    text.style.textShadow = "0 0 " + sliderInput.value + "px " + "rgba(0,0,0)";
    if (sliderInput.value > 50) {
      document.body.style.backgroundImage= "url('https://i.pinimg.com/originals/14/12/54/1412540665c343d81925325d41d3db0f.gif')"
    } else if (sliderInput.value <= 50) {
      document.body.style.backgroundImage= "url('https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif')"
    } 
}