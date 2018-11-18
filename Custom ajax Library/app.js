const http = new easyHTTP;

const data = {
  title: "Custom Post",
  body: "This is a custom post"
};


// Get Posts
// http.get(`http://jsonplaceholder.typicode.com/posts`, (err, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });


// Post to Posts
// http.post(`http://jsonplaceholder.typicode.com/posts`, data, function (err, response) {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     console.log(response);
//   }
// });


// Put to Posts
// http.put(`http://jsonplaceholder.typicode.com/posts/5`, data, function (err, response) {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     console.log(response);
//   }
// });


// Delete to Posts
// http.delete(`http://jsonplaceholder.typicode.com/posts/5`, function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });