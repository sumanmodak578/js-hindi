# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-m6pgds?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((bt) => {
  bt.addEventListener('click', function (ev) {
    console.log(ev);
    console.log(ev.target);
    if (ev.target.id === 'grey') {
      body.style.backgroundColor = ev.target.id;
    }
    if (ev.target.id === 'white') {
      body.style.backgroundColor = ev.target.id;
    }
    if (ev.target.id === 'blue') {
      body.style.backgroundColor = ev.target.id;
    }
    if (ev.target.id === 'yellow') {
      body.style.backgroundColor = ev.target.id;
    }
    if (ev.target.id === 'purple') {
      body.style.backgroundColor = ev.target.id;
    }
  });
});


```

## Project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseFloat(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a vaild height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);

    // show the result
    if (bmi > 24.9) {
      result.innerHTML = `<span>Overweight: ${bmi}</span>`;
    } else if (bmi < 18.6) {
      result.innerHTML = `<span>Underweight: ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    }
  }
});


```

## Project 3

```javascript
// const clock = document.querySelector("#clock")
const clock = document.getElementById('clock');

setInterval(function () {
  const current_time = new Date();
  clock.innerHTML = current_time.toLocaleTimeString();
}, 1000);


```