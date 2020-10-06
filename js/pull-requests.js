let user = "torvalds";
let apiGit = `https://api.github.com/users/${user}`;

function fetching(api) {
  let repos = `${api}/repos`;
  fetch(repos)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let repos_arr = Array.from(myJson);
      let repo_list = document.getElementById("pull-requests-list");

      repos_arr.forEach(obj => {
        let li_1 = document.createElement("li");
        let ul = document.createElement("ul");
        let repoName = obj.name;
        let pulls = `https://api.github.com/repos/${obj.full_name}/pulls`;

        fetch(pulls)
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            let pulls_arr = Array.from(myJson);
            let pullsLen = pulls_arr.length;

            ul.innerHTML = `${repoName} - Pulls (${pullsLen})`;

            pulls_arr.forEach(obj => {
              let li = document.createElement("li");
              let a = document.createElement("a");
              a.innerHTML = obj.title;
              a.href = obj.html_url;
              li.appendChild(a);
              ul.appendChild(li);
            });
            li_1.appendChild(ul);
            repo_list.appendChild(li_1);
            return myJson;
          });
      });
      return myJson;
    });
}
fetching(apiGit);
