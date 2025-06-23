const button = document.querySelector('button');
console.log(button);
button.addEventListener('submit', (event) => {
  event.preventDefault();
});