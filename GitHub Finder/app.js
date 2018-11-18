// Init GitHub
const github = new GitHub;
// Init UI 
const ui = new UI;


const serachUser = document.getElementById("searchUser");

// Search Input Event Input
serachUser.addEventListener("keyup", (e) => {
  // Get input text
  let userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show an alert
          ui.showAlert("User not Found", "alert alert-danger");
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});