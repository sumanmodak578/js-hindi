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