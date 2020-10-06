// Write code here to communicate with Github
let user = "thonynava";
let apiGit = `https://api.github.com/users/${user}`;

function fetching(api) {
  let repos = `${api}/repos`;
  fetch(repos)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let repos_arr = Array.from(myJson);
      let repos_len = repos_arr.length;
      let repo_list = document.getElementById("repos-list");

      document.getElementById("repos-count").innerHTML = repos_len;

      repos_arr.forEach(obj => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = obj.html_url;
        a.innerHTML = obj.name;
        li.appendChild(a);
        repo_list.appendChild(li);
      });
      return myJson;
    });
}
fetching(apiGit);
