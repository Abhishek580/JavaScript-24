const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
console.log('height', height);
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `pls give a valid height ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `pls give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
