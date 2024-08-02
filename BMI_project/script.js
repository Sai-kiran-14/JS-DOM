const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  // console.log(height,weight)
  
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
        results.innerHTML=`<span> BMI: ${bmi} <br>You are underweight</span>`;
    }
    else if(bmi>24.9){
        results.innerHTML=`<span>BMI: ${bmi} <br>You are Overweight</span>`;
    }
    else{
        results.innerHTML=`<span>BMI: ${bmi}  BMI is normal</span>`;
    }
  }
})