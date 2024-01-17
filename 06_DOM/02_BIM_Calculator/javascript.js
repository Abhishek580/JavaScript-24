const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
console.log('height', height);
console.log('weight', weight);
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `pls give a valid height ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `pls give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log((height * height) / 10000);
    let msg = ''
    if(bmi<18.6) msg = 'You are under weight.'
    if(bmi>24.9)msg = 'You are over weight.'
    if(bmi>18.6 && bmi<24.9)msg = 'Your weight is normal. '
    result.innerHTML = `<span>${bmi}</span><br><p>${msg}</p>`;
  }
});
