let mainCard = document.getElementById("main");

class GitHub {
  async getUserDetails(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const jsonData = await response.json();
    const name = jsonData.name;
    const bio = jsonData.bio;
    const avatar = jsonData.avatar_url;
    const followers = jsonData.followers;
    const following = jsonData.following;
    const twitter = jsonData.twitter_username;
    const location = jsonData.location;
    const repo = jsonData.public_repos;
    this.createUserCard(
      name,
      bio,
      avatar,
      followers,
      following,
      twitter,
      location,
      repo
    );
  }
  async createUserCard(
    name,
    bio,
    avatar,
    followers,
    following,
    twitter,
    location,
    repo
  ) {
    if (twitter === null) {
      twitter = "-";
    }
    if (bio === null) {
      bio = "-";
    }
    if (location === null) {
      location = "-";
    }
    mainCard.innerHTML = `<div class="card text-bg-dark mb-3" style="max-width: 500px;">
    <div class="row g-0">
      <div class="col-sm-3 g-4">
        <img src="${avatar}" class="rounded-circle card-img-top m-2 mx-auto img-thumbnail" alt="${name}">
      </div>
      <div class="col-sm-9">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${bio}</p>
          <div class="row" >
          <div class="col-sm-9">
          <div class="d-flex justify-content-between">
          <p class="card-text"><strong>Follower: </strong>${followers}</p>
          <p class="card-text"><strong>Following: </strong>${following}</p>
          <p class="card-text"><strong>Repos: </strong>${repo}</p>
          </div> 
          <div class="d-flex justify-content-between">
          <p class="card-text"><strong>Twitter: </strong>${twitter}</p>
          <p class="card-text"><strong>Location: </strong>${location}</p>
          </div> 
          </div>  
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
}

const gitHubProfile = new GitHub();
gitHubProfile.getUserDetails("ksuthar937");

// let getUserID = document.getElementById("search").value;
// console.log(document.getElementById("search"));
// console.log(document.getElementById("search").value);

// let track = document.getElementById("search");

// track.addEventListener("onupdate", ())

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { search } = form.elements;
  const getUserID = search.value;
  // console.log(search.value);
  const gitHubProfile = new GitHub();
  gitHubProfile.getUserDetails(getUserID);
  search.value = "";
});
