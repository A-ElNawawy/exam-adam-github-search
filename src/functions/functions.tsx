/*
 ** getRepo Function to Fetch Data From github [ Accepts Parameters]
 ** Parameters:
 ** repoName = The repo name that will be searched
 */
async function getRepo(owner: string, repo: string) {
  let api =
    "https://api.github.com/search/repositories?q=" +
    encodeURIComponent(`repo:${owner}/${repo}`);
  //+"/forks";
  //encodeURIComponent("javascript-algorithms trekhleb in:login fork:true");
  //encodeURIComponent("javascript-algorithms user:trekhleb fork:true");

  //in:repo
  //trekhleb+in:login+fork:true+repo:javascript-algorithms ";

  // trekhleb/:javascript-algorithms
  //+ repoName +
  //"+repo:jquery/jquery" +
  //"&page=" +
  //pageNo +
  //"&per_page=10" +
  //"&sort=stars&order=desc";
  //let response;
  return await fetch(api);
  //  .then((response) => response.json())
  //  .then((data) => {
  //    console.log(data.items[0].forks_url);
  //    fetch(data.items[0].forks_url)
  //      .then((response) => response.json())
  //      .then((res) => {
  //        console.log(res);
  //        response = res;
  //      });
  //  });
  //return response;
}

/*
 ** getForks Function to Fetch Data From github [ Accepts Parameters]
 ** Parameters:
 ** repoName = The repo name that will be searched
 */
// async function getForks(forks_url: string) {
//  return await fetch(forks_url)
// }

export { getRepo /*, getForks*/ };
