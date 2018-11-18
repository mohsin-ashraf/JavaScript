var button = document.getElementById("button").addEventListener('click', getData);
var output = document.getElementById("output");
function getData() {
  fetch('http://jsonplaceholder.typicode.com/posts/').then(response => {
    return response.json();
  }).then(posts => {
    let result = "";
    posts.forEach(post => {
      result += `
        <ul class="list-group">
          <li class="list-group-item">${post.title}</li>
        </ul>
      `
    });
    output.innerHTML = result;
  }).catch(err => {
    console.log("Error while getting the data from API: ", err);
  });
}