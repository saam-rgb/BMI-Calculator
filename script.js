let bmiCalc = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let BMI = weight / (height * height);
  document.getElementById("BMI").innerHTML = BMI;
};
