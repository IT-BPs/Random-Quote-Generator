let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', function() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `"${data.content}" - ${data.author}`;
    })
    .catch(error => {
      console.error('Data download error:', error);
    });
});
