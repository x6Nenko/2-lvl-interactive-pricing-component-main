const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const priceOutput = document.getElementById("priceOutput");
const cost = 16.00;


output.innerHTML = slider.value; // Display the default slider value
priceOutput.innerHTML = "16.00";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  priceOutput.innerHTML = (this.value * cost / 100).toFixed(2);
}

const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})