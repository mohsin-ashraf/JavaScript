class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}" />
          <a href ="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gist: ${user.public_gists}</span>
            <span class="badge badge-success">Public Repos: ${user.followers}</span>
            <span class="badge badge-info">Public Repos: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at.split('T')[0]}</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show Alert message
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert();
    // Create div 
    const div = document.createElement('div');
    // Add Class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get Parent to insert it
    const container = document.querySelector(".search-container");
    // Get the search Box
    const search = document.querySelector(".search");
    // Insert the alert
    container.insertBefore(div, search);


    // Remove alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Show user Repos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    // Display the repos
    document.getElementById("repos").innerHTML = output;
  }

  // clear profile function
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}