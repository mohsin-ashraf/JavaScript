class GitHub {

  constructor() {
    this.client_id = 'f860841aedfbef57fe4a';
    this.client_secret = '91d973fb1ac55f35b0826f72349f7bd5a03f896b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }

}